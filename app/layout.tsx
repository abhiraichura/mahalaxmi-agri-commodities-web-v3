import type { Metadata } from "next";
import "./styles/globals.css";
import { Providers } from "./components/shared/Providers";
import { Navigation } from "./components/shared/Navigation";
import { Footer } from "./components/shared/Footer";
import { WhatsAppButton } from "./components/shared/WhatsAppButton";

export const metadata: Metadata = {
  title: "Premium Agri Commodity Broker in India | Mahalaxmi Agri Commodities",
  description: "Mahalaxmi Agri Commodities — 23+ years connecting India's finest agricultural suppliers with exporters. Spices, pulses, oil seeds, cotton. Rajkot, Gujarat.",
  keywords: "agri commodity broker India, spice broker Gujarat, pulses supplier Rajkot, oil seeds exporter India, cotton broker Gujarat, cumin seeds supplier, sesame seeds exporter",
  authors: [{ name: "Mahalaxmi Agri Commodities" }],
  creator: "Mahalaxmi Agri Commodities",
  publisher: "Mahalaxmi Agri Commodities",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mahalaxmiagri.com",
    siteName: "Mahalaxmi Agri Commodities",
    title: "Premium Agri Commodity Broker in India | Mahalaxmi Agri Commodities",
    description: "23+ years connecting India's finest agricultural suppliers with exporters. Spices, pulses, oil seeds, cotton.",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Mahalaxmi Agri Commodities - Premium Agri Commodity Broker",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Agri Commodity Broker in India | Mahalaxmi Agri Commodities",
    description: "23+ years connecting India's finest agricultural suppliers with exporters.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.mahalaxmiagri.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#DE2A72" />
      </head>
      <body className="font-primary antialiased bg-cream text-text-primary">
        <Providers>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
