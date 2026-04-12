import type { Metadata } from "next";
import { Geist, Lilex } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="7b96a762-1490-4cc5-97e3-19ff7c628dbd"
          data-performance="true"
          data-host-url="https://hackctl.dev"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
