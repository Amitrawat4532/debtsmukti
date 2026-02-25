import { seoData } from "@/data";
import type { Metadata } from "next";


export const metadata: Metadata = seoData.contact;

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
