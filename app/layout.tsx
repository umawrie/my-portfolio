import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Uma Mawrie - Portfolio",
  description: "Interactive and visual designer studying Integrated Design and Media at NYU",
  openGraph: {
    title: "Uma Mawrie - Portfolio",
    description: "Interactive and visual designer studying Integrated Design and Media at NYU",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Uma Mawrie - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Uma Mawrie - Portfolio",
    description: "Interactive and visual designer studying Integrated Design and Media at NYU",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
