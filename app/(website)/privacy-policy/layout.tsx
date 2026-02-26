import { seoData } from "@/data";
import type { Metadata } from "next";


export const metadata: Metadata = seoData.privacy;

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
