import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Debt Mukti",
  description: "Your Path to Stress-Free Debt Freedom",
  openGraph: {
    title: '...',
    description: '...',
    url: 'https://debtmukti.com/services',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en">
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //   >
    <>
    
        <Header />
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
        <Footer />
    </>
    //   </body>
    // </html>
  );
}
