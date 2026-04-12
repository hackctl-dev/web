import type { Metadata } from "next";
import { Geist, Lilex } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lilex = Lilex({
  variable: "--font-lilex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hackctl | Launch hackathon projects faster.",
  description: "Hackctl | Launch hackathon projects faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${lilex.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
