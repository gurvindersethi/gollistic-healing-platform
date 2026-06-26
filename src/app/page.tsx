import { site } from "@/content/shared/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-heading text-4xl text-ink">{site.name}</h1>
      <p className="max-w-xl text-ink-soft">{site.tagline}</p>
    </main>
  );
}
