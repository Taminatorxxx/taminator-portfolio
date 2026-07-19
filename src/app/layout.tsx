import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { MouseGlow } from "@/components/effects/MouseGlow";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { profile } from "@/data/profile";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
  viewportFit: "cover",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Business Developer · Strategist · Content Creator`,
    template: `%s | ${profile.name}`,
  },
  description: profile.bio,
  keywords: [
    "Taminator",
    "Business Development",
    "Growth Strategist",
    "Video Content",
    "Brand Promotion",
    "Content Creator",
    "Northern Nigeria",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${profile.name} — Business Developer & Growth Strategist`,
    description: profile.bio,
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — BD · Strategy · Video`,
    description: profile.bio,
    creator: "@Taminatorxx",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col bg-background text-foreground">
        <ScrollProgress />
        <MouseGlow />
        <Navbar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
