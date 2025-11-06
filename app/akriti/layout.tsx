import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
 // ✅ import your button

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aakriti by Charvak Ayurveda",
  description: "Feel Beautiful. Stay Confident. Live Natural.",
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
          overflowX: "hidden", // ✅ only prevent sideways scroll
          overflowY: "auto", // ✅ allow normal vertical scroll
        }}
      >
        <main className="">{children}</main> {/* ✅ padding only on mobile for buy button */}
         {/* ✅ fixed button */}
      </body>
    </html>
  );
}
