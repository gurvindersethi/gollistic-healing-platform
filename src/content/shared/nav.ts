export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Gollistic Healing", href: "/gollistic-healing" },
  { label: "Life Coaching", href: "/life-coaching" },
  { label: "Gurbani Teaching", href: "/gurbani-teaching" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const bookCta: NavLink = { label: "Book a Session", href: "/contact" };

export const footerLegalNav: NavLink[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
