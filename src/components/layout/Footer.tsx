import Link from "next/link";
import { primaryNav, footerLegalNav } from "@/content/shared/nav";
import { site, contact } from "@/content/shared/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-muted">
      <Container className="grid gap-10 py-12 sm:grid-cols-3">
        <div>
          <p className="font-heading text-lg font-bold text-ink">{site.shortName}</p>
          <p className="mt-2 max-w-xs text-sm text-ink-soft">{site.footerTagline}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2">
          {primaryNav.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-ink hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-2 text-sm text-ink">
          <a href={`tel:${contact.phoneHref}`} className="hover:text-primary">
            {contact.phoneDisplay}
          </a>
          <a href={`mailto:${contact.email}`} className="hover:text-primary">
            {contact.email}
          </a>
          <p className="text-ink-soft">{contact.serviceArea}</p>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 text-sm text-ink-soft sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} {site.name}. All rights reserved.
        </p>
        <nav aria-label="Legal" className="flex gap-4">
          {footerLegalNav.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
