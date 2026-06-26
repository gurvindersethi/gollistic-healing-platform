import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/sections/PageHeader";

type LegalSection = {
  title: string;
  body: string;
};

type LegalPageLayoutProps = {
  header: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  sections: readonly LegalSection[];
};

export function LegalPageLayout({ header, sections }: LegalPageLayoutProps) {
  return (
    <>
      <PageHeader eyebrow={header.eyebrow} title={header.title} intro={header.intro} />
      <section className="py-16">
        <Container className="mx-auto flex max-w-2xl flex-col gap-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-heading text-2xl text-ink">{section.title}</h2>
              <p className="mt-3 text-ink-soft">{section.body}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
