import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
  title: "Tinkera.id – Solusi Digital Kreatif untuk Bisnismu",
  description:
    "Tinkera.id menyediakan layanan pengembangan website, mobile app, desain grafis, dan video editing profesional untuk bantu wujudkan visi digital bisnismu.",
  keywords: [
    "tinkera",
    "tinkera.id",
    "jasa pembuatan website",
    "jasa desain grafis",
    "jasa mobile app",
    "video editing profesional",
    "digital agency indonesia",
    "web developer freelance",
    "layanan digital kreatif",
    "pengembangan aplikasi"
  ],
  authors: [{ name: "Tinkera Team", url: "https://tinkera.space" }],
  creator: "Tinkera.space",
  publisher: "Tinkera.space",
  metadataBase: new URL("https://tinkera.space"),
  alternates: {
    canonical: "https://tinkera.space",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
