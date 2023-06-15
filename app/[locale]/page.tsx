import Hero from "@/components/layout/hero/Hero";
import About from "@/components/layout/about/About";

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 md:max-w-7xl">
      <Hero />
      <About />
    </main>
  );
}
