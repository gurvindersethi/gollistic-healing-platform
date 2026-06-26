import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { lifeCoachingContent } from "@/content/pages/life-coaching";

export const metadata: Metadata = {
  title: lifeCoachingContent.metaTitle,
  description: lifeCoachingContent.metaDescription,
};

export default function LifeCoachingPage() {
  return <ServicePageLayout content={lifeCoachingContent} />;
}
