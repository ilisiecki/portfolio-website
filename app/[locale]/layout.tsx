import "@/app/globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${inter.variable} font-inter dark:bg-white`}>
        <Providers>
          <div
            id="background"
            className="fixed -z-50 h-screen w-full bg-main-background opacity-0 transition-opacity duration-700 dark:opacity-100"
          />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
