export type ServicePageContent = {
  metaTitle: string;
  metaDescription: string;
  header: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  offerings: {
    title: string;
    items: string[];
  };
  whoItHelps: {
    title: string;
    items: string[];
  };
  approach: {
    title: string;
    steps: { title: string; description: string }[];
  };
  pricing: {
    title: string;
    price: string;
    unit: string;
    duration: string;
    format: string;
  };
  closingStatement: string;
  cta: {
    title: string;
    subtitle: string;
    label: string;
  };
};
