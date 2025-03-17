import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Tsegaye Talegngeta | Full-Stack Developer",
  description:
    "Tsegaye Talegngeta - A full-stack developer specializing in React, Next.js, and Node.js.",
  metadataBase: new URL("https://tsegaye-talegngeta.vercel.app"),

  openGraph: {
    type: "website",
    url: "https://tsegaye-talegngeta.vercel.app",
    title: "Tsegaye Talegngeta | Full-Stack Developer",
    description:
      "Tsegaye Talegngeta - A full-stack developer specializing in React, Next.js, and Node.js.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tsegaye Talegngeta | Full-Stack Developer",
      },
    ],
    siteName: "Tsegaye Talegngeta",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tsegaye Talegngeta | Full-Stack Developer",
    description:
      "Tsegaye Talegngeta - A full-stack developer specializing in React, Next.js, and Node.js.",
    images: ["/og-image.png"],
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
        className={twMerge(
          inter.variable,
          calistoga.variable,
          "text-white bg-gray-900 antialiased font-sans",
        )}
      >
        {children}
      </body>
    </html>
  );
}
