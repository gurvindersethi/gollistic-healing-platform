import Link from "next/link";
import { primaryNav, footerLegalNav } from "@/content/shared/nav";
import { site, contact, socials } from "@/content/shared/site";
import { Container } from "@/components/layout/Container";

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
          <a
            href={socials.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-2 hover:text-primary"
          >
            <InstagramIcon />
            <span>Instagram</span>
          </a>
          <a
            href={socials.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary"
          >
            <YoutubeIcon />
            <span>YouTube</span>
          </a>
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
