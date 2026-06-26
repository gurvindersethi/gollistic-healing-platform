import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/sections/LegalPageLayout";
import { termsContent } from "@/content/pages/terms";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms for using this website and the services described on it.",
};

export default function TermsPage() {
  return <LegalPageLayout header={termsContent.header} sections={termsContent.sections} />;
}
