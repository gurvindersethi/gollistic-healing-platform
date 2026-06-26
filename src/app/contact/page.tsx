import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { contactContent } from "@/content/pages/contact";
import { contact } from "@/content/shared/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Kanwaljit Singh to book a Gollistic Healing session, schedule life coaching, or join a Gurbani class.",
};

export default function ContactPage() {
  const { header, hours, note } = contactContent;

  return (
    <>
      <PageHeader eyebrow={header.eyebrow} title={header.title} intro={header.intro} />

      <section className="py-16">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <ContactForm />

          <div className="flex flex-col gap-6">
            <a
              href={`tel:${contact.phoneHref}`}
              className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5"
            >
              <Phone aria-hidden="true" className="h-6 w-6 text-primary" />
              <div>
                <p className="font-bold text-ink">Call or Text</p>
                <p className="text-ink-soft">{contact.phoneDisplay}</p>
              </div>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5"
            >
              <Mail aria-hidden="true" className="h-6 w-6 text-primary" />
              <div>
                <p className="font-bold text-ink">Email</p>
                <p className="text-ink-soft">{contact.email}</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5">
              <MapPin aria-hidden="true" className="h-6 w-6 text-primary" />
              <div>
                <p className="font-bold text-ink">Location</p>
                <p className="text-ink-soft">{contact.serviceArea}</p>
                <p className="text-sm text-ink-soft">Home visits available for healing sessions.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5">
              <Clock aria-hidden="true" className="h-6 w-6 text-primary" />
              <div>
                <p className="font-bold text-ink">Hours</p>
                <p className="text-ink-soft">{hours}</p>
              </div>
            </div>

            <p className="font-heading text-lg text-ink-soft">{note}</p>
          </div>
        </Container>
      </section>
    </>
  );
}
