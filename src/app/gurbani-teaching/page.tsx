import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { gurbaniTeachingContent } from "@/content/pages/gurbani-teaching";

export const metadata: Metadata = {
  title: gurbaniTeachingContent.metaTitle,
  description: gurbaniTeachingContent.metaDescription,
};

export default function GurbaniTeachingPage() {
  return <ServicePageLayout content={gurbaniTeachingContent} />;
}
