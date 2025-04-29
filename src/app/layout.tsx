import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { AuthProvider } from "@/lib/hooks/use-auth";
import Header from "@/components/layouts/header/header";

const avenirltstdBlackFont = localFont({
  src: "../assets/fonts/AvenirLTStd-Black.otf",
  display: "swap",
  preload: true,
  variable: "--font-aveniltstd-black",
});
const avenirltstdBookFont = localFont({
  src: "../assets/fonts/AvenirLTStd-Book.otf",
  display: "swap",
  preload: true,
  variable: "--font-aveniltstd-book",
});
const avenirltstdRomanFont = localFont({
  src: "../assets/fonts/AvenirLTStd-Roman.otf",
  display: "swap",
  preload: true,
  variable: "--font-aveniltstd-book",
});

export const metadata: Metadata = {
  title: "Turing Technologies Frontend Test",
  description: "Turing Technologies Frontend Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${avenirltstdBlackFont.variable} ${avenirltstdBookFont.variable} ${avenirltstdRomanFont.variable} antialiased`}
      >
        <AuthProvider>
          <Header />

          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
