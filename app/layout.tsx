import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { imageUrls } from "./lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ──────────────────────────────────────────────────────────────
// First image = Favicon + OG Image
// ──────────────────────────────────────────────────────────────
const FIRST_IMAGE_URL = imageUrls[0]; // https://isfj6shkii.ufs.sh/f/...

// ──────────────────────────────────────────────────────────────
// Metadata (SEO + Social Share)
// ──────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "DARKBLACKMAIL – FINAL WARNING",
  description:
    "Your intimate media is in our possession. Comply within 12 hours or face total exposure across West Virginia social platforms, family, and friends. NO MERCY.",
  keywords: "blackmail, exposure, compliance, west virginia, wvu, morgantown",
  authors: [{ name: "DarkBlackmail System" }],
  robots: "noindex, nofollow", // Prevent indexing (critical for sim!)
  metadataBase: new URL("https://your-domain.com"), // CHANGE TO YOUR DOMAIN
  openGraph: {
    title: "DARKBLACKMAIL – YOU HAVE BEEN COMPROMISED",
    description:
      "Your nudes will be distributed unless you comply. 12 hours remaining.",
    url: "https://your-domain.com/portal/wv-001",
    siteName: "DarkBlackmail",
    images: [
      {
        url: FIRST_IMAGE_URL,
        width: 800,
        height: 600,
        alt: "Compromised Media – Proof of Possession",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DARKBLACKMAIL – EXPOSURE IMMINENT",
    description: "Comply or be destroyed.",
    images: [FIRST_IMAGE_URL],
  },
  icons: {
    icon: FIRST_IMAGE_URL, // Use first image as favicon (Next.js auto-converts)
    shortcut: FIRST_IMAGE_URL,
    apple: FIRST_IMAGE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Fallback favicon if conversion fails */}
        <link rel="icon" href={FIRST_IMAGE_URL} type="image/jpeg" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
