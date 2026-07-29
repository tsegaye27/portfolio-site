"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { profile, sections } from "@/lib/content";

export const Nav = () => {
  const [active, setActive] = useState<string>(sections[0].id);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const targets = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // A band across the upper third: whichever section sits in it wins.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="bg-accent h-px origin-left"
      />

      <div className="shell flex items-center justify-between py-4 md:py-5">
        <a
          href="#top"
          className="label text-body hover:text-heading transition-colors"
        >
          {profile.name.split(" ")[0]}
          <span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-2 md:gap-3">
        <nav
          aria-label="Sections"
          className="border-line bg-surface/70 flex items-center gap-0.5 rounded-full border p-1 backdrop-blur-xl"
        >
          {sections.map((section) => {
            const isActive = active === section.id;
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`relative rounded-full px-3 py-1.5 font-mono text-[0.6875rem] tracking-[0.14em] uppercase transition-colors md:px-4 ${
                  isActive
                    ? "text-on-accent"
                    : "text-body hover:text-heading"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="bg-heading absolute inset-0 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}
                <span className="relative z-10">{section.label}</span>
              </a>
            );
          })}
        </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
