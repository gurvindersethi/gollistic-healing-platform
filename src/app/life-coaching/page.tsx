import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceJsonLd } from "@/lib/seo";
import { lifeCoachingContent } from "@/content/pages/life-coaching";
import { site } from "@/content/shared/site";

export const metadata: Metadata = {
  title: lifeCoachingContent.metaTitle,
  description: lifeCoachingContent.metaDescription,
};

export default function LifeCoachingPage() {
  return (
    <>
      <JsonLd
        data={buildServiceJsonLd({
          name: lifeCoachingContent.metaTitle,
          description: lifeCoachingContent.metaDescription,
          url: `${site.url}/life-coaching`,
          price: "60",
        })}
      />
      <ServicePageLayout content={lifeCoachingContent} />
    </>
  );
}
