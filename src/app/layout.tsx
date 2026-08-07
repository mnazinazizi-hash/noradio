import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import { RadioProvider } from "@/components/RadioProvider";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NoRadio — Personal Affirmation Radio Hub",
  description:
    "A calm-tech sanctuary for reflection, affirmations, and uplifting radio. Find your center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body-md bg-background text-on-background">
        <RadioProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <AudioPlayer />
        </RadioProvider>
      </body>
    </html>
  );
}
