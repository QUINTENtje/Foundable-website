import type { MetadataRoute } from "next";
import { artikelen } from "@/content/kennis";
import { dienstPaginas, dienstPaginasBijgewerkt } from "@/content/diensten";

const base = "https://www.foundable.nl";

/* Laatste inhoudelijke wijziging van de vaste pagina's. Alleen bijwerken bij
   een echte wijziging, dan weet Google dat opnieuw ophalen zin heeft. */
const paginasBijgewerkt = new Date("2026-11-01T12:00:00");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/werkwijze",
    "/cases",
    "/kennis",
    "/over",
    "/start",
    "/contact",
    "/privacy",
  ];

  const paginas: MetadataRoute.Sitemap = routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: paginasBijgewerkt,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const kennisArtikelen: MetadataRoute.Sitemap = artikelen.map((a) => ({
    url: `${base}/kennis/${a.slug}`,
    lastModified: new Date(`${a.bijgewerkt ?? a.gepubliceerd}T12:00:00`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  /* Dienstpagina's: elk beantwoordt een koopvraag, zoals "GEO-bureau" of
     "GEO-bureau Amsterdam". Even zwaar als de vaste pagina's. */
  const diensten: MetadataRoute.Sitemap = dienstPaginas.map((d) => ({
    url: `${base}/${d.slug}`,
    lastModified: dienstPaginasBijgewerkt,
    changeFrequency: "monthly",
    priority: d.slug === "geo-bureau" ? 0.9 : 0.7,
  }));

  return [...paginas, ...diensten, ...kennisArtikelen];
}
