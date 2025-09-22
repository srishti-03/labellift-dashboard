// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'; // <-- IMPORT our new provider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LabelLift Dashboard",
  description: "A Mini Music Distribution Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 1. The font variable now correctly goes on the <html> tag
    <html lang="en" className={geistSans.variable} suppressHydrationWarning>
      {/* 2. The body tag now ONLY has our theme and utility classes */}
      <body
        className={`antialiased bg-white dark:bg-gray-900 text-black dark:text-gray-200 transition-colors duration-300`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}