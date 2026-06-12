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

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://foundable.nl/#organization",
  name: "Foundable",
  url: "https://foundable.nl",
  email: "quinten@foundable.nl",
  telephone: "06-38389591",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Andreasplein 84",
    postalCode: "1058 GD",
    addressLocality: "Amsterdam",
    addressCountry: "NL",
  },
  founder: {
    "@type": "Person",
    name: "Quinten Orij",
  },
  identifier: {
    "@type": "PropertyValue",
    propertyID: "KVK",
    value: "96898267",
  },
  description:
    "Foundable helpt Nederlandse MKB-bedrijven zichtbaar worden in AI-zoekmachines zoals ChatGPT, Perplexity en Google AI via done-for-you AIO audits.",
  areaServed: "Nederland",
  priceRange: "€595 excl. BTW",
  knowsAbout: [
    "AIO",
    "AI Optimization",
    "AI zichtbaarheid",
    "structured data",
    "JSON-LD",
    "ChatGPT zichtbaarheid",
  ],
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://foundable.nl/#website",
  name: "Foundable",
  url: "https://foundable.nl",
  publisher: {
    "@id": "https://foundable.nl/#organization",
  },
  inLanguage: "nl-NL",
};
