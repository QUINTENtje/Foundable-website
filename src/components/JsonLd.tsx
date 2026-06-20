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
// sameAs (LinkedIn) wordt toegevoegd zodra de URL's bekend zijn.
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://www.foundable.nl/#organization",
      name: "Foundable",
      url: "https://www.foundable.nl",
      logo: "https://www.foundable.nl/logo.png",
      email: "quinten@foundable.nl",
      telephone: "+31 6 38389591",
      priceRange: "€595 excl. BTW",
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
        "Foundable helpt Nederlandse MKB-bedrijven zichtbaar worden in AI-zoekmachines zoals ChatGPT, Perplexity en Google AI via done-for-you AIO-audits.",
      knowsAbout: [
        "AIO",
        "AI Optimization",
        "AI-zichtbaarheid",
        "structured data",
        "JSON-LD",
        "ChatGPT-zichtbaarheid",
        "Generative Engine Optimization",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.foundable.nl/#quinten-orij",
      name: "Quinten Orij",
      url: "https://www.foundable.nl/over",
      jobTitle: "Oprichter van Foundable, AIO-specialist",
      image: "https://www.foundable.nl/quinten.jpg",
      worksFor: { "@id": "https://www.foundable.nl/#organization" },
      knowsAbout: [
        "AIO",
        "AI-zichtbaarheid",
        "structured data",
        "Generative Engine Optimization",
      ],
    },
  ],
};
