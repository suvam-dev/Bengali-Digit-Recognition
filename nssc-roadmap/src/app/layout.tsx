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
  title: "NSSC Roadmap to Mastery",
  description: "Interactive roadmap from Zero to Hero for building immersive space websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
      >
        {/* Deep Space Background elements */}
        <div className="fixed inset-0 z-[-1] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>
        <div className="fixed inset-0 z-[-2] bg-gradient-to-b from-[#030014] via-[#080421] to-[#030014] pointer-events-none"></div>
        {children}
      </body>
    </html>
  );
}
