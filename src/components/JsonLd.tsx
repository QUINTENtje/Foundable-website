interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Sitewide entiteits-graaf: gedeeld op elke pagina via de root layout.
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.foundable.nl/#organization",
      name: "Foundable",
      url: "https://www.foundable.nl",
      sameAs: ["https://www.linkedin.com/company/foundable-nl"],
      logo: "https://www.foundable.nl/logo.png",
      email: "quinten@foundable.nl",
      telephone: "+31 6 38389591",
      priceRange: "€499–€999 excl. BTW",
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
      makesOffer: {
        "@type": "Offer",
        name: "GEO-audit",
        description:
          "Done-for-you GEO-audit: AI Visibility Score, JSON-LD code, Content Optimization, implementatiegids, PowerPoint-rapport en tips om beter aanbevolen te worden door AI.",
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
