import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/sections/ServiceCard";
import { HeartPulse, Compass, Music } from "lucide-react";
import { aboutContent } from "@/content/pages/about";

const skillIcons = [HeartPulse, Compass, Music];

export const metadata: Metadata = {
  title: "About Kanwaljit Singh",
  description:
    "Meet Kanwaljit Singh — seven decades of music, spirituality, and service behind Gollistic Healing, Life Coaching, and Gurbani teaching.",
};

export default function AboutPage() {
  const { header, journey, philosophy, skills, closing } = aboutContent;

  return (
    <>
      <PageHeader eyebrow={header.eyebrow} title={header.title} intro={header.intro} />

      <section className="py-16">
        <Container className="mx-auto flex max-w-2xl flex-col gap-6">
          <SectionHeading title={journey.title} align="left" />
          {journey.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg text-ink-soft">
              {paragraph}
            </p>
          ))}
        </Container>
      </section>

      <section className="bg-surface-muted py-16">
        <Container className="flex flex-col items-center gap-8 text-center">
          <SectionHeading title={philosophy.title} subtitle={philosophy.intro} />
          <ul className="flex flex-wrap justify-center gap-3">
            {philosophy.principles.map((principle) => (
              <li
                key={principle}
                className="rounded-full border border-border bg-surface px-5 py-2 font-heading text-lg text-ink"
              >
                {principle}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionHeading title={skills.title} />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {skills.items.map((item, index) => (
              <ServiceCard
                key={item.href}
                icon={skillIcons[index]}
                title={item.title}
                description={item.description}
                href={item.href}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20">
        <Container className="mx-auto max-w-2xl text-center">
          <SectionHeading title={closing.title} />
          <p className="mt-6 font-heading text-xl text-ink-soft">{closing.body}</p>
        </Container>
      </section>
    </>
  );
}
