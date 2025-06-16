import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Interactive Romance Stories | Choose Your Own Adventure",
  description: "Experience passionate interactive romance stories where your choices shape the narrative. Immersive erotic fiction with real chemistry and irresistible tension.",
  keywords: "interactive romance, choose your own adventure, erotic fiction, interactive stories, romance novels, adult fiction",
  authors: [{ name: "Interactive Romance" }],
  creator: "Interactive Romance",
  publisher: "Interactive Romance",
  metadataBase: new URL("https://interactive-romance.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Interactive Romance Stories | Choose Your Own Adventure",
    description: "Experience passionate interactive romance stories where your choices shape the narrative. Immersive erotic fiction with real chemistry and irresistible tension.",
    url: "https://interactive-romance.com",
    siteName: "Interactive Romance",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Interactive Romance - Passionate stories that respond to your choices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Romance Stories | Choose Your Own Adventure",
    description: "Experience passionate interactive romance stories where your choices shape the narrative. Immersive erotic fiction with real chemistry and irresistible tension.",
    images: ["/og-image.jpg"],
    creator: "@interactive_romance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23000'/%3E%3Cpath d='M16 28c-1.5 0-11-6-11-15 0-4.5 3.5-8 8-8 2.5 0 3 2 3 2s.5-2 3-2c4.5 0 8 3.5 8 8 0 9-9.5 15-11 15z' fill='%23dc2626'/%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
    shortcut: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23000'/%3E%3Cpath d='M16 28c-1.5 0-11-6-11-15 0-4.5 3.5-8 8-8 2.5 0 3 2 3 2s.5-2 3-2c4.5 0 8 3.5 8 8 0 9-9.5 15-11 15z' fill='%23dc2626'/%3E%3C/svg%3E",
    apple: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='16' fill='%23000'/%3E%3Cpath d='M16 28c-1.5 0-11-6-11-15 0-4.5 3.5-8 8-8 2.5 0 3 2 3 2s.5-2 3-2c4.5 0 8 3.5 8 8 0 9-9.5 15-11 15z' fill='%23dc2626'/%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
