import type { Metadata } from "next";
import { Work_Sans, Signika } from "next/font/google";

/* Components */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* css */
import "./globals.css";
import Preloader from "@/components/Preloader";

/* Fonts */
const work_sans = Work_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-work-sans",
});
const signika = Signika({
  weight: ["600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-signika",
});

export const metadata: Metadata = {
  title: {
    default: "Alpha Elite e-shop",
    template: "%s - Alpha Elite e-shop",
  },
  description:
    "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${work_sans.variable} ${signika.variable} scroll-smooth bg-background-50 font-body text-core-600`}
      >
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
