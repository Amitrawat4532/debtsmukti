import { seoData } from "@/data";
import type { Metadata } from "next";


export const metadata: Metadata = seoData.contract

export default function ContractLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
