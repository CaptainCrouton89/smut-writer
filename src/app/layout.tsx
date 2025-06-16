import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ConvexClientProvider from "./ConvexClientProvider";
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
  title: "Interactive Romance Stories | Choose Your Own Adventure",
  description:
    "Experience passionate interactive romance stories where your choices shape the narrative. Immersive erotic fiction with real chemistry and irresistible tension.",
  keywords:
    "interactive romance, choose your own adventure, erotic fiction, interactive stories, romance novels, adult fiction",
  authors: [{ name: "Interactive Romance" }],
  creator: "Interactive Romance",
  publisher: "Interactive Romance",
  metadataBase: new URL("https://interactive-romance.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Interactive Romance Stories | Choose Your Own Adventure",
    description:
      "Experience passionate interactive romance stories where your choices shape the narrative. Immersive erotic fiction with real chemistry and irresistible tension.",
    url: "https://interactive-romance.com",
    siteName: "Interactive Romance",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/heart-og.png",
        width: 1200,
        height: 630,
        alt: "Interactive Romance - Passionate stories that respond to your choices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interactive Romance Stories | Choose Your Own Adventure",
    description:
      "Experience passionate interactive romance stories where your choices shape the narrative. Immersive erotic fiction with real chemistry and irresistible tension.",
    images: ["/heart-og.png"],
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
    icon: "/heart-icon.svg",
    shortcut: "/heart-icon.svg",
    apple: "/heart-icon.svg",
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
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
