import type { Metadata, Viewport } from "next";
import { site } from "./site";
import { display, mono, hand, wordmark } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.name,
  description: site.description,
  icons: {
    icon: "/assets/icon-180.png",
    apple: "/assets/icon-180.png",
  },
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/assets/social-card.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/assets/social-card.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#37442E",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${wordmark.variable} ${mono.variable} ${hand.variable}`}>
      <head>
        <link rel="preload" as="image" href="/assets/background.webp" type="image/webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
