type TherapyCardProps = {
  name: string;
  description: string;
  helpsWith: string;
};

export function TherapyCard({ name, description, helpsWith }: TherapyCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
      <h3 className="font-heading text-xl text-ink">{name}</h3>
      <p className="text-ink-soft">{description}</p>
      <p className="text-sm font-bold text-secondary">Helps with: {helpsWith}</p>
    </div>
  );
}
