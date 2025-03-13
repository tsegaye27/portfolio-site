import { ExperienceSection } from "@/sections/Experience";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ExperienceSection />
    </div>
  );
}
