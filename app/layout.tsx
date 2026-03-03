import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dubbin OS",
  description:
    "Cross-border legal intelligence platform for review, drafting, fundraising readiness, and evidence-linked decision support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${headingFont.variable} font-[var(--font-body)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
