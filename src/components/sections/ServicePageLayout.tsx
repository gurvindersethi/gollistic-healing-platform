import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { PricingCard } from "@/components/sections/PricingCard";
import { CTA } from "@/components/sections/CTA";
import type { ServicePageContent } from "@/types/content";

type ServicePageLayoutProps = {
  content: ServicePageContent;
  afterOfferings?: React.ReactNode;
};

export function ServicePageLayout({ content, afterOfferings }: ServicePageLayoutProps) {
  const { header, offerings, whoItHelps, approach, pricing, closingStatement, cta } = content;

  return (
    <>
      <PageHeader eyebrow={header.eyebrow} title={header.title} intro={header.intro} />

      <section className="py-16">
        <Container className="grid gap-12 sm:grid-cols-2">
          <div>
            <SectionHeading title={offerings.title} align="left" />
            <ul className="mt-6 grid gap-3">
              {offerings.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-surface px-4 py-3 text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionHeading title={whoItHelps.title} align="left" />
            <ul className="mt-6 grid gap-3">
              {whoItHelps.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-surface-muted px-4 py-3 text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {afterOfferings}

      <section className="bg-surface-muted py-16">
        <Container>
          <SectionHeading title={approach.title} />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-border bg-surface p-6">
                <span className="font-heading text-2xl text-primary">{index + 1}</span>
                <h3 className="mt-2 font-heading text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16">
        <Container className="flex flex-col items-center gap-8 text-center">
          <SectionHeading title={pricing.title} />
          <div className="w-full max-w-sm">
            <PricingCard
              price={pricing.price}
              unit={pricing.unit}
              duration={pricing.duration}
              format={pricing.format}
              ctaLabel={cta.label}
              ctaHref="/contact"
            />
          </div>
          <p className="max-w-2xl font-heading text-xl text-ink-soft">{closingStatement}</p>
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <CTA
            title={cta.title}
            subtitle={cta.subtitle}
            links={[{ label: cta.label, href: "/contact" }]}
          />
        </Container>
      </section>
    </>
  );
}
