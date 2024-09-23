import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavbarDemo from "./components/NavbarDemo";
import BackgroundBeamsWithCollisionDemo from "@/app/components/herosection";
import ThreeDCardDemo from "@/app/components/head";
import BentoGridDemo from "@/app/components/actitivies"
import AppleCardsCarouselDemo from "@/app/components/membars"
import MeteorsDemo from "@/app/components/meteors"
import MeteorsD from "@/app/components/domain"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MLSA DYPCET",
  description: "Generated by create next app",
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
        <NavbarDemo />
        
        <BackgroundBeamsWithCollisionDemo />

        <MeteorsDemo />

        <MeteorsD />
        
<div className="flex place-content-around">
        <ThreeDCardDemo />
       
        </div>
       <AppleCardsCarouselDemo />
        {children}
      </body>
    </html>
  );
}