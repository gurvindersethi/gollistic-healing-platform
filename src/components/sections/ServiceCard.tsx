import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  linkLabel?: string;
};

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  linkLabel = "Learn More",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-surface p-8 transition-colors hover:border-primary"
    >
      <Icon aria-hidden="true" className="h-10 w-10 text-primary" strokeWidth={1.5} />
      <h3 className="font-heading text-2xl text-ink">{title}</h3>
      <p className="text-ink-soft">{description}</p>
      <span className="mt-auto inline-flex items-center gap-2 font-bold text-secondary group-hover:underline">
        {linkLabel}
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </span>
    </Link>
  );
}
