import Image from "next/image";
import { HeartPulse, Compass, Music } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { CTA } from "@/components/sections/CTA";
import { Button } from "@/components/ui/Button";
import { homeContent } from "@/content/pages/home";

const serviceIcons = {
  "/gollistic-healing": HeartPulse,
  "/life-coaching": Compass,
  "/gurbani-teaching": Music,
} as const;

export default function Home() {
  const { hero, services, philosophy, whoIServe, closingCta } = homeContent;

  return (
    <>
      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-[1fr_auto]">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <span className="text-sm font-bold uppercase tracking-wide text-primary">
              {hero.eyebrow}
            </span>
            <h1 className="max-w-xl font-heading text-4xl text-ink sm:text-5xl">
              {hero.heading}
            </h1>
            <p className="max-w-xl text-lg text-ink-soft">{hero.body}</p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <Image
            src="/images/kanwaljit-portrait.webp"
            alt="Kanwaljit Singh, founder of Gollistic Healing, wearing a blue patka and a long white beard"
            width={320}
            height={317}
            priority
            className="mx-auto rounded-full border-4 border-surface object-cover shadow-md"
          />
        </Container>
      </section>

      <section className="py-12">
        <Container className="flex flex-col gap-8">
          <SectionHeading title="How I Can Help" />
          <div className="grid gap-6 sm:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.href}
                icon={serviceIcons[service.href]}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col items-center gap-8 text-center">
          <SectionHeading
            eyebrow={philosophy.eyebrow}
            title={philosophy.title}
          />
          <blockquote className="max-w-2xl font-heading text-2xl text-ink">
            “{philosophy.quote}”
          </blockquote>
          <ul className="flex flex-wrap justify-center gap-3">
            {philosophy.grounding.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-surface-muted px-4 py-2 text-sm text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-12">
        <Container className="flex flex-col items-center gap-8 text-center">
          <SectionHeading title={whoIServe.title} />
          <ul className="grid w-full max-w-3xl gap-4 sm:grid-cols-2">
            {whoIServe.items.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-border bg-surface p-5 text-left text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <CTA title={closingCta.title} subtitle={closingCta.subtitle} links={closingCta.links} />
        </Container>
      </section>
    </>
  );
}
