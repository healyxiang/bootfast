import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { routing } from "@/i18n/routing";
import { ThemeProviders } from "./theme-providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SessionProvider } from "@/components/SessionProvider";
// import { CustomIntlProvider } from "@/components/IntlProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}>) {
  const res = await params;
  console.log("res in layout", res);
  const locale = res.locale;
  console.log("locale in layout", locale);
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* <CustomIntlProvider> */}
        <NextIntlClientProvider>
          <SessionProvider>
            <ThemeProviders>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </ThemeProviders>
          </SessionProvider>
          {/* </CustomIntlProvider> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
