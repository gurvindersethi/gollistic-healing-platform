import { Button } from "@/components/ui/Button";

type CTALink = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

type CTAProps = {
  title: string;
  subtitle?: string;
  links: readonly CTALink[];
};

export function CTA({ title, subtitle, links }: CTAProps) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-3xl bg-secondary px-8 py-14 text-center">
      <h2 className="font-heading text-3xl text-cream sm:text-4xl">{title}</h2>
      {subtitle && <p className="max-w-2xl text-lg text-cream/90">{subtitle}</p>}
      <div className="flex flex-wrap items-center justify-center gap-4">
        {links.map((link) => (
          <Button key={link.href} href={link.href} variant={link.variant ?? "primary"} size="lg">
            {link.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
