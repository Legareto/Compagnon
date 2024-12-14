import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Compagnon d'études Symbiose",
  description:
    "Une application intuitive qui intègre ton expérience étudiante universitaire et qui t'accompagne vers ta réussite.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-background antialiased">{children}</body>
    </html>
  );
}
