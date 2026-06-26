import { site, contact } from "@/content/shared/site";

export function buildPersonAndLocalBusinessJsonLd() {
  const person = {
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: "Kanwaljit Singh",
    description: site.description,
    email: contact.email,
    telephone: contact.phoneHref,
    url: site.url,
  };

  const localBusiness = {
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: contact.phoneHref,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bakersfield",
      addressRegion: "CA",
      addressCountry: "US",
    },
    founder: { "@id": `${site.url}/#person` },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, localBusiness],
  };
}

export function buildServiceJsonLd(options: {
  name: string;
  description: string;
  url: string;
  price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    description: options.description,
    url: options.url,
    provider: { "@id": `${site.url}/#person` },
    areaServed: "Bakersfield, California",
    ...(options.price
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "USD",
            price: options.price,
          },
        }
      : {}),
  };
}
