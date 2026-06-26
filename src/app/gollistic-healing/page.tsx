import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { gollisticHealingContent } from "@/content/pages/gollistic-healing";

export const metadata: Metadata = {
  title: gollisticHealingContent.metaTitle,
  description: gollisticHealingContent.metaDescription,
};

export default function GollisticHealingPage() {
  return <ServicePageLayout content={gollisticHealingContent} />;
}
