import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

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
  title: "Arshya Architects | Modern Architecture in Kerala",
  description: "Arshya Architects specializes in modern, Apple-inspired minimal design, rooted in Kerala. We offer residential, commercial, and interior design with luxury, cutting-edge aesthetics.",
  keywords: ["Arshya Architects", "Modern Architecture", "Kerala Architects", "Interior Design", "Luxury Homes", "Kozhikode Architects"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} min-h-full flex flex-col font-sans bg-background text-foreground`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
