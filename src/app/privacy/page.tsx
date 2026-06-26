import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/sections/LegalPageLayout";
import { privacyContent } from "@/content/pages/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How this website handles the information you provide through the contact form.",
};

export default function PrivacyPage() {
  return <LegalPageLayout header={privacyContent.header} sections={privacyContent.sections} />;
}
