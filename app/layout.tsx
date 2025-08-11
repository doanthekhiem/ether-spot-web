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
  title: "EtherSpot - Earn From Your WiFi. Power the Future of Decentralized Connectivity",
  description: "Join EtherSpot to monetize your WiFi and earn SPOT tokens. Build the future of decentralized connectivity.",
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/favicon/site.webmanifest',
  openGraph: {
    url: 'https://ether-spot-web.vercel.app/',
    type: 'website',
    title: 'EtherSpot - Earn From Your WiFi. Power the Future of Decentralized Connectivity',
    description: 'Join EtherSpot to monetize your WiFi and earn SPOT tokens. Build the future of decentralized connectivity.',
    images: [
      {
        url: 'https://opengraph.b-cdn.net/production/images/0ad4c70d-79b3-401e-a10b-829f899bbfd2.png?token=xxZzEnDNlAln3JZH5-BU-GO6XNUtk7yVuHI1_ZSg8FU&height=1000&width=1000&expires=33290538796',
        width: 1000,
        height: 1000,
        alt: 'EtherSpot - Decentralized WiFi Connectivity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EtherSpot - Earn From Your WiFi. Power the Future of Decentralized Connectivity',
    description: 'Join EtherSpot to monetize your WiFi and earn SPOT tokens. Build the future of decentralized connectivity.',
    images: ['https://opengraph.b-cdn.net/production/images/0ad4c70d-79b3-401e-a10b-829f899bbfd2.png?token=xxZzEnDNlAln3JZH5-BU-GO6XNUtk7yVuHI1_ZSg8FU&height=1000&width=1000&expires=33290538796'],
  },
  other: {
    'twitter:domain': 'ether-spot-web.vercel.app',
    'twitter:url': 'https://ether-spot-web.vercel.app/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
