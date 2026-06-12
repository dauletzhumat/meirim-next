import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CityStats } from "@/components/sections/CityStats";
import { Partner } from "@/components/sections/Partner";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CityStats />
        <Partner />
      </main>
      <Footer />
    </>
  );
}
