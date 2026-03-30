import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Architects in Kerala & Civil Engineer Kozhikode | Arshya Architects",
  description: "Arshya Architects is the leading architecture and construction company in Kerala. We specialize in modern house design, civil engineering in Kozhikode, interior design, and Kerala building permits.",
  keywords: ["Best Architects in Kerala", "Civil Engineer Kozhikode", "Civil Engineer Kerala", "Interior Design Kerala", "Building Permit Kerala", "Residential Architects Kerala", "Commercial Architects Kerala", "Construction Company Kozhikode"],
  authors: [{ name: "Arshya Architects" }],
  creator: "Arshya Architects",
  publisher: "Arshya Architects",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arshya-architects.vercel.app/",
    siteName: "Arshya Architects",
    title: "Best Architects in Kerala & Civil Engineer Kozhikode | Arshya Architects",
    description: "Expert architecture, interior design, structural engineering, and building permit services in Kozhikode and across Kerala.",
    images: ["/images/about_kerala_1774456479897.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Arshya Architects",
    "image": "https://arshya-architects.vercel.app/images/about_kerala_1774456479897.png",
    "description": "Premium architecture, civil engineering, interior design, and building permit services in Kozhikode and Kerala.",
    "url": "https://arshya-architects.vercel.app",
    "telephone": "+910000000000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kozhikode",
      "addressRegion": "Kerala",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.2588",
      "longitude": "75.7804"
    },
    "founder": [
      {
        "@type": "Person",
        "name": "ADARSH M K"
      },
      {
        "@type": "Person",
        "name": "ARYA U S"
      }
    ],
    "priceRange": "$$$"
  };

  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <head>
        <Script
          id="schema-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} min-h-full flex flex-col font-sans bg-background text-foreground`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
