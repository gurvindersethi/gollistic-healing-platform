"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav, bookCta } from "@/content/shared/nav";
import { site } from "@/content/shared/site";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <Container className="flex items-center justify-between gap-4 py-4">
        <Link
          href="/"
          className="font-heading text-xl font-bold text-ink"
          onClick={() => setIsMenuOpen(false)}
        >
          {site.shortName}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {primaryNav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-base font-bold transition-colors hover:text-primary",
                  isActive ? "text-primary" : "text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Button href={bookCta.href} size="md" className="hidden lg:inline-flex">
          {bookCta.label}
        </Button>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </Container>

      {isMenuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-border bg-surface lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {primaryNav.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-3 text-lg font-bold",
                    isActive ? "bg-surface-muted text-primary" : "text-ink",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button
              href={bookCta.href}
              size="lg"
              className="mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {bookCta.label}
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  if (isOpen) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7" aria-hidden="true">
        <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-7 w-7" aria-hidden="true">
      <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
