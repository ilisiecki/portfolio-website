import Hero from "@/components/layout/hero/Hero";
import About from "@/components/layout/about/About";
import Work from "@/components/layout/work/Work";
import Contact from "@/components/layout/contact/Contact";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Contact");

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 md:max-w-7xl">
      <Hero />
      <About />
      <Work />
      <Contact title={t("title")} />
    </main>
  );
}
