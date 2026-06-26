import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { TherapyCard } from "@/components/sections/TherapyCard";
import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildServiceJsonLd } from "@/lib/seo";
import { gollisticHealingContent, gollisticHealingTherapies } from "@/content/pages/gollistic-healing";
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
      <ServicePageLayout
        content={gollisticHealingContent}
        afterOfferings={
          <section className="py-16">
            <Container>
              <SectionHeading
                title="Therapies I Practice"
                subtitle="Each session draws on a personalized combination of these techniques, chosen for what your body needs."
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {gollisticHealingTherapies.map((therapy) => (
                  <TherapyCard
                    key={therapy.name}
                    name={therapy.name}
                    description={therapy.description}
                    helpsWith={therapy.helpsWith}
                  />
                ))}
              </div>
            </Container>
          </section>
        }
      />
    </>
  );
}
