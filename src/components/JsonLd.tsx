interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

// Sitewide entiteits-graaf: gedeeld op elke pagina via de root layout.
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.foundable.nl/#website",
      url: "https://www.foundable.nl",
      name: "Foundable",
      alternateName: "Foundable.nl",
      inLanguage: "nl-NL",
      publisher: { "@id": "https://www.foundable.nl/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.foundable.nl/#organization",
      name: "Foundable",
      alternateName: "Foundable.nl",
      url: "https://www.foundable.nl",
      sameAs: [
        "https://www.linkedin.com/company/foundable-nl",
        "https://www.google.com/maps?cid=7591528248257612358",
      ],
      identifier: {
        "@type": "PropertyValue",
        propertyID: "KvK",
        value: "96898267",
      },
      logo: "https://www.foundable.nl/logo.png",
      email: "quinten@foundable.nl",
      telephone: "+31 6 38389591",
      priceRange: "€147,50–€875 excl. BTW",
      areaServed: { "@type": "Country", name: "Nederland" },
      foundingLocation: "Amsterdam, Nederland",
      founder: { "@id": "https://www.foundable.nl/#quinten-orij" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Andreasplein 84",
        postalCode: "1058 GD",
        addressLocality: "Amsterdam",
        addressCountry: "NL",
      },
      description:
        "Foundable is een GEO-consultancy (Generative Engine Optimization) in Amsterdam. Foundable helpt gevestigde experts en gespecialiseerde dienstverleners zichtbaar en accuraat weergegeven worden in AI-zoekmachines zoals ChatGPT, Perplexity, Claude en Google AI, via een done-for-you GEO-audit.",
      knowsAbout: [
        "GEO",
        "Generative Engine Optimization",
        "AI-zichtbaarheid",
        "structured data",
        "JSON-LD",
        "ChatGPT-zichtbaarheid",
      ],
      makesOffer: [
        {
          "@type": "Offer",
          name: "De meting",
          description:
            "Eenmalige AI-zichtbaarheidsmeting over 270 echte antwoorden: hoe vaak AI je noemt, wat AI over je vertelt, de AI Visibility Score van je website en de top 10 namen die AI in jouw vak noemt. De vragenlijst lever je zelf aan, of Foundable stelt er een op. Eén A4, geleverd per mail. Telt binnen 3 maanden volledig als aanbetaling op elke audit.",
          price: "147.50",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "147.50",
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
            description: "Tijdelijke introductieprijs, normaal €295 excl. BTW.",
          },
        },
        {
          "@type": "Offer",
          name: "GEO-audit",
          description:
            "Done-for-you GEO-audit: nieuwe teksten voor de site die AI begrijpt, JSON-LD code, platform-specifieke implementatiegids en een analyse waar buiten de site de grootste winst te halen valt. Inclusief nulmeting vooraf en nameting na 90 dagen.",
          price: "499",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "499",
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
            description: "Tijdelijke introductieprijs, normaal €999 excl. BTW.",
          },
        },
        {
          "@type": "Offer",
          name: "GEO-audit met nazorg",
          description:
            "De volledige GEO-audit plus twee bijstuurrondes: na 3 en na 6 maanden opnieuw meten, de site nalopen en de verbeterpunten meteen uitwerken.",
          price: "875",
          priceCurrency: "EUR",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: "875",
            priceCurrency: "EUR",
            valueAddedTaxIncluded: false,
            description: "Tijdelijke introductieprijs, normaal €1.750 excl. BTW.",
          },
        },
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.foundable.nl/#quinten-orij",
      name: "Quinten Orij",
      url: "https://www.foundable.nl/over",
      sameAs: ["https://www.linkedin.com/in/quintenorij"],
      jobTitle: "Oprichter van Foundable, GEO-specialist",
      image: "https://www.foundable.nl/quinten.jpg",
      worksFor: { "@id": "https://www.foundable.nl/#organization" },
      knowsAbout: [
        "GEO",
        "Generative Engine Optimization",
        "AI-zichtbaarheid",
        "structured data",
      ],
    },
  ],
};
