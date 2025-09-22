import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Providers } from './providers';

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
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
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