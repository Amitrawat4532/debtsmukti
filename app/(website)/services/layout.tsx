import { seoData } from "@/data";
import type { Metadata } from "next";


export const metadata: Metadata = seoData.services;

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
