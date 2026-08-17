#!/usr/bin/env python3
"""Taalcheck op tekst die de site in gaat.

Kijkt alleen naar de regels die je in deze commit TOEVOEGT, niet naar wat er al
stond. Zo blokkeert oude tekst je nooit, maar komt een nieuwe fout er ook niet
meer doorheen.

Regels komen uit de schrijfregels van Foundable:
- geen komma voor "en" of "of"
- geen em- of en-streepje in lopende tekst, ook niet als escape of entity
- geen woorden die Quinten zelf niet gebruikt
- geen klemtoon-accenten voor nadruk ("één" mag wel)

Draaien kan ook los:  python3 scripts/taalcheck.py            (staged regels)
                      python3 scripts/taalcheck.py --alles    (alle bestanden)
"""

import re
import subprocess
import sys

MAPPEN = ("src/", "public/")
EXTENSIES = (".tsx", ".ts", ".md", ".txt")
# Hier staat geen tekst die een bezoeker of een AI leest: prompts voor de
# score-tool, onderwerpregels van meldingsmails aan onszelf.
OVERSLAAN = ("src/app/api/",)

ACCENTEN = ["wát", "hóé", "wél", "géén", "óók", "mét", "nét", "hét", "dé",
            "én", "zó", "díe", "dát", "áls", "níet"]

REGELS = [
    ("komma voor en/of",
     re.compile(r", (?:en|of) "),
     'Splits de zin of herschrijf hem. De tweede zin mag met "En" beginnen.'),
    # Een en-streepje tussen twee getallen is een bereik ("0-39", "€295-€1.750")
    # en gewoon goed; alleen streepjes in lopende tekst zijn fout.
    ("streepje in lopende tekst",
     re.compile(r"(?<![\d€$])\s*[—–]\s*(?![\d€$])|\\u201[34]|&[mn]dash;|&#821[12];"),
     "Gebruik een punt, een komma of en/maar/want. Voor labels kan een middot ·."),
    ("woord dat Quinten niet gebruikt",
     re.compile(r"kant-en-kla\w*|bijschaven|oftewel|op den duur|insteek", re.I),
     "Schrijf het plat: klaar om te plaatsen, aanpassen, dus, uiteindelijk, aanpak."),
    ("klemtoon-accent",
     re.compile(r"\b(?:%s)\b" % "|".join(ACCENTEN)),
     'Schrijf het woord gewoon. Alleen "één" houdt zijn accenten.'),
]


def telt_mee(pad: str) -> bool:
    return (pad.startswith(MAPPEN) and pad.endswith(EXTENSIES)
            and not pad.startswith(OVERSLAAN))


def zonder_commentaar(inhoud: str, pad: str) -> str:
    """Codecommentaar is geen sitecopy, dus daar geldt de check niet."""
    if not pad.endswith((".ts", ".tsx")):
        return inhoud
    inhoud = re.sub(r"/\*.*?\*/", " ", inhoud, flags=re.S)
    return re.sub(r"(?m)^\s*//.*$", " ", inhoud)


def toegevoegde_regels() -> dict[str, str]:
    """Per bestand de toegevoegde regels, aan elkaar geplakt.

    Aan elkaar plakken is nodig omdat een komma voor "en" precies op een
    regelafbreking kan vallen; regel voor regel zoeken mist die dan.
    """
    diff = subprocess.run(
        ["git", "diff", "--cached", "--unified=0", "--no-color"],
        capture_output=True, text=True, check=True).stdout
    per_bestand: dict[str, list[str]] = {}
    huidig = None
    for regel in diff.splitlines():
        if regel.startswith("+++ b/"):
            pad = regel[6:]
            huidig = pad if telt_mee(pad) else None
        elif huidig and regel.startswith("+") and not regel.startswith("+++"):
            per_bestand.setdefault(huidig, []).append(regel[1:])
    return {p: re.sub(r"\s+", " ", zonder_commentaar(" ".join(r), p))
            for p, r in per_bestand.items()}


def alle_bestanden() -> dict[str, str]:
    # --others erbij, anders slaat de check nieuwe bestanden over die nog niet
    # in git zitten. Precies waar het bij het eerste kennisartikel misging.
    paden = subprocess.run(
        ["git", "ls-files", "--cached", "--others", "--exclude-standard"],
        capture_output=True, text=True, check=True).stdout.split()
    uit = {}
    for pad in paden:
        if telt_mee(pad):
            with open(pad, encoding="utf-8") as f:
                uit[pad] = re.sub(r"\s+", " ", zonder_commentaar(f.read(), pad))
    return uit


def main() -> int:
    tekst = alle_bestanden() if "--alles" in sys.argv else toegevoegde_regels()
    gevonden = []
    for pad, inhoud in sorted(tekst.items()):
        for naam, patroon, hulp in REGELS:
            for m in patroon.finditer(inhoud):
                start, eind = max(0, m.start() - 55), m.end() + 40
                gevonden.append((pad, naam, inhoud[start:eind].strip(), hulp))

    if not gevonden:
        return 0

    print(f"\nTaalcheck: {len(gevonden)} keer iets gevonden.\n")
    vorige = None
    for pad, naam, fragment, hulp in gevonden:
        if pad != vorige:
            print(f"  {pad}")
            vorige = pad
        print(f"    {naam}: …{fragment}…")
        print(f"      → {hulp}")
    print("\nRepareer het en commit opnieuw.")
    print("Moet het er echt door: git commit --no-verify\n")
    return 1


if __name__ == "__main__":
    sys.exit(main())
