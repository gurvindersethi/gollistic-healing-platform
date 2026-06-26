import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceJsonLd } from "@/lib/seo";
import { gurbaniTeachingContent } from "@/content/pages/gurbani-teaching";
import { site } from "@/content/shared/site";

export const metadata: Metadata = {
  title: gurbaniTeachingContent.metaTitle,
  description: gurbaniTeachingContent.metaDescription,
};

export default function GurbaniTeachingPage() {
  return (
    <>
      <JsonLd
        data={buildServiceJsonLd({
          name: gurbaniTeachingContent.metaTitle,
          description: gurbaniTeachingContent.metaDescription,
          url: `${site.url}/gurbani-teaching`,
          price: "50",
        })}
      />
      <ServicePageLayout content={gurbaniTeachingContent} />
    </>
  );
}
