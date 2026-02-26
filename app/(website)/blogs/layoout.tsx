import { seoData } from "@/data";
import type { Metadata } from "next";


export const metadata: Metadata = seoData.blogs;

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
