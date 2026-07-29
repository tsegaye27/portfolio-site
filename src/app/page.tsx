import { Grain } from "@/components/Grain";
import { SmoothScroll } from "@/components/SmoothScroll";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Nav } from "@/sections/Nav";
import { Ticker } from "@/sections/Ticker";
import { Work } from "@/sections/Work";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Grain />
      <Nav />

      <main>
        <section id="top">
          <Hero />
        </section>

        <Ticker />

        <section id="work">
          <Work />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}
