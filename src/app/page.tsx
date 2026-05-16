import { BenefitsStrip } from "@/components/sail-experience/BenefitsStrip";
import { ExperienceCategories } from "@/components/sail-experience/ExperienceCategories";
import { Header } from "@/components/sail-experience/Header";
import { Hero } from "@/components/sail-experience/Hero";
import { MembershipBanner } from "@/components/sail-experience/MembershipBanner";
import { PopularDestinations } from "@/components/sail-experience/PopularDestinations";
import { SeenInStrip } from "@/components/sail-experience/SeenInStrip";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0B0B0B]">
      <Header />
      <Hero />
      <BenefitsStrip />
      <PopularDestinations />
      <ExperienceCategories />
      <MembershipBanner />
      <SeenInStrip />
    </main>
  );
}
