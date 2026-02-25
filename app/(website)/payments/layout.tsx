import { seoData } from "@/data";
import type { Metadata } from "next";


export const metadata: Metadata = seoData.payments;

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
