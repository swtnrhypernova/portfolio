import {ThemeProvider} from "./theme-provider";
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
  title: "Chisom Jennifer Okoroafor | Portfolio",
  description: "Welcome to my portfolio !",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans bg-periwinkle text-ink dark:bg-[#1A1B38] dark:text-fog antialiased">
        <ThemeProvider>{children}</ThemeProvider>
        </body>
    </html>
  );
}
