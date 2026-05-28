import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/services";

export default function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    image: `${siteConfig.url}/opengraph-image`,
    url: siteConfig.url,
    telephone: siteConfig.contact.phoneTel,
    email: siteConfig.contact.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address.city,
      postalCode: siteConfig.contact.address.postalCode,
      addressRegion: siteConfig.contact.address.region,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.address.lat,
      longitude: siteConfig.contact.address.lng,
    },
    areaServed: siteConfig.contact.serviceArea.map((city) => ({
      "@type": "City",
      name: city,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "12:00",
      },
    ],
    description: siteConfig.description,
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      name: s.title,
      description: s.shortDescription,
      priceCurrency: "EUR",
      price: s.priceFrom,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: s.priceFrom,
        priceCurrency: "EUR",
        unitText: "HOUR",
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
    />
  );
}
