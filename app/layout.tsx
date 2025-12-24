import type { Metadata } from "next";
import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
// import { headers } from "next/headers"; // Not needed for client-side only Bitcoin connection
import ContextProvider from "@/context";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SignWall | Leave Your Mark",
  description: "A futuristic on-chain guestbook.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const headersObj = await headers();
  // const cookies = headersObj.get('cookie');

  return (
    <html lang="en">
      <body className={`${orbitron.variable} ${inter.variable}`}>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
