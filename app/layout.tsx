import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theoliveboards.com"),
  title: "The Olive Boards | Dallas Charcuterie & Grazing Tables",
  description:
    "The Olive Boards creates handcrafted charcuterie boards, grazing tables, crudité platters and appetizer spreads for events across Dallas, Texas and beyond.",
  keywords: [
    "Dallas charcuterie",
    "Dallas grazing tables",
    "Dallas charcuterie boards",
    "Dallas grazing table catering",
    "Dallas event charcuterie",
    "Dallas appetizer catering",
    "charcuterie catering Dallas",
    "grazing table Dallas Texas",
  ],
  openGraph: {
    title: "The Olive Boards | Dallas Charcuterie & Grazing Tables",
    description:
      "Handcrafted charcuterie, grazing tables and appetizer spreads for celebrations across Dallas and beyond.",
    url: "https://theoliveboards.com",
    siteName: "The Olive Boards",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "The Olive Boards Dallas Charcuterie Grazing Table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Olive Boards | Dallas Charcuterie",
    description:
      "Handcrafted charcuterie, grazing tables and appetizer spreads for events across Dallas and beyond.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
