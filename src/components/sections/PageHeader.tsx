import { Container } from "@/components/layout/Container";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  intro: string;
};

export function PageHeader({ eyebrow, title, intro }: PageHeaderProps) {
  return (
    <section className="border-b border-border bg-surface-muted py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-4 text-center">
        {eyebrow && (
          <span className="text-sm font-bold uppercase tracking-wide text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl font-heading text-4xl text-ink sm:text-5xl">{title}</h1>
        <p className="max-w-2xl text-lg text-ink-soft">{intro}</p>
      </Container>
    </section>
  );
}
