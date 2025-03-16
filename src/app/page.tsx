import { ExperienceSection } from "@/sections/Experience";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { TapeSection } from "@/sections/Tape";
import { Footer } from "@/sections/Footer";
import { ProjectsSection } from "@/sections/Projects";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="experience">
        <ExperienceSection />
        <TapeSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="about">
        <AboutSection />
        <ContactSection />
        <Footer />
      </section>
    </div>
  );
}
