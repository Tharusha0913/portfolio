import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Premium Portfolio Template | Creative Portfolio",
  description: "A modern, premium portfolio website template with a dark, cinematic aesthetic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased selection:bg-brand-brown-light/30 bg-noise`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
