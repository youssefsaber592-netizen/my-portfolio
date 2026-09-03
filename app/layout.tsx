import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";

// إعداد خط Pacifico وتعيين متغير CSS خاص به
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Youssef Saber | Portfolio",
  description: "Cloud Architecture & DevOps Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pacifico.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}