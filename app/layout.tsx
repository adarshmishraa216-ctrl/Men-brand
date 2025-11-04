import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileBuyButton from "./component/MobileBuyButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pranoshakti by Charvak Ayurveda",
  description: "Energy • Stamina • Confidence • Naturally",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}
        style={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        <main className="pb-20 md:pb-0">{children}</main>
        <MobileBuyButton />
      </body>
    </html>
  );
}
