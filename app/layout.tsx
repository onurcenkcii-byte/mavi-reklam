import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mavi Reklam Dünyası | Bayrak, Tabela, Dijital Baskı - Türkiye Geneli",
  description: "Mavi Reklam Dünyası - Makam bayrağı, yelken bayrak, masa bayrağı, ledbox tabela, dijital baskı ve promosyon ürünlerinde kaliteli üretim. Türkiye geneline kargo ile gönderim yapıyoruz.",
  keywords: ["mavi reklam", "mavi reklam dünyası", "bayrak imalatı", "makam bayrağı", "yelken bayrak", "masa bayrağı", "ledbox tabela", "dijital baskı", "promosyon ürünleri", "türkiye geneli bayrak"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
