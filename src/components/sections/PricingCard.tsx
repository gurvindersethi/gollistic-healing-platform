import { Button } from "@/components/ui/Button";

type PricingCardProps = {
  price: string;
  unit: string;
  duration: string;
  format: string;
  ctaLabel: string;
  ctaHref: string;
};

export function PricingCard({ price, unit, duration, format, ctaLabel, ctaHref }: PricingCardProps) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8 text-center">
      <div>
        <p className="font-heading text-4xl text-ink">{price}</p>
        <p className="text-ink-soft">{unit}</p>
      </div>
      <dl className="flex flex-col gap-2 text-sm text-ink-soft">
        <div className="flex items-center justify-between gap-4">
          <dt className="font-bold text-ink">Duration</dt>
          <dd>{duration}</dd>
        </div>
        <div className="flex items-center justify-between gap-4">
          <dt className="font-bold text-ink">Format</dt>
          <dd>{format}</dd>
        </div>
      </dl>
      <Button href={ctaHref} size="lg">
        {ctaLabel}
      </Button>
    </div>
  );
}
