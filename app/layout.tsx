import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import Header from "@/components/layout/header/Header";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter dark:bg-white`}>
        <Providers>
          <div
            id="background"
            className="fixed -z-50 h-screen w-full bg-main-background opacity-0 transition-opacity duration-700 dark:opacity-100"
          />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
