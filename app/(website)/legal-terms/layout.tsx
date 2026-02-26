import { seoData } from "@/data";
import type { Metadata } from "next";


export const metadata: Metadata = seoData.terms;

export default function LegalTermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
