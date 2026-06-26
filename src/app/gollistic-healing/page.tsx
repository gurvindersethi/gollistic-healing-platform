import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceJsonLd } from "@/lib/seo";
import { gollisticHealingContent } from "@/content/pages/gollistic-healing";
import { site } from "@/content/shared/site";

export const metadata: Metadata = {
  title: gollisticHealingContent.metaTitle,
  description: gollisticHealingContent.metaDescription,
};

export default function GollisticHealingPage() {
  return (
    <>
      <JsonLd
        data={buildServiceJsonLd({
          name: gollisticHealingContent.metaTitle,
          description: gollisticHealingContent.metaDescription,
          url: `${site.url}/gollistic-healing`,
          price: "60",
        })}
      />
      <ServicePageLayout content={gollisticHealingContent} />
    </>
  );
}
