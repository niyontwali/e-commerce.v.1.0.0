import type { Metadata } from "next";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import { Work_Sans, Signika } from "next/font/google";

/* Components */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* css */
import "../globals.css";
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
  description: "",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // side is the easiest way to get started
  const messages = await getMessages();


  return (
    <html lang={locale}>
      <body
        className={`${work_sans.variable} ${signika.variable} scroll-smooth bg-background-50 font-body text-core-600`}>
        <NextIntlClientProvider messages={messages}>
          <Preloader />
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
