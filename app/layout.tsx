import type { Metadata } from "next";
import { Instrument_Sans, Space_Grotesk } from "next/font/google";

import "./globals.css";

const bodyFont = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
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
