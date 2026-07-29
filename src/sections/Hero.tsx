"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { LocalTime } from "@/components/LocalTime";
import { Magnetic } from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";
import { facts, profile, socials } from "@/lib/content";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // The headline drifts up and dims as you leave; the side panel lags behind it.
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const panelY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  const parallax = reduced ? {} : { y: copyY, opacity: copyOpacity };

  return (
    <div ref={ref} className="relative min-h-svh overflow-hidden pt-28 pb-16">
      {/* A single warm bloom behind the fold, and the page's structural grid. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60rem 40rem at 72% 18%, var(--glow), transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "25% 100%",
        }}
      />

      <div className="shell">
        <motion.div style={parallax}>
          {/* ── meta strip ─────────────────────────────────────────────── */}
          <Reveal className="rule flex flex-wrap items-center gap-x-6 gap-y-2 border-b pb-4">
            <span className="label text-body">{profile.location}</span>
            <span className="label text-body">
              <LocalTime />
            </span>
            {profile.available && (
              <span className="label text-accent inline-flex items-center gap-2">
                <span className="relative flex size-1.5">
                  <span className="bg-accent animate-pulse-ring absolute inset-0 rounded-full" />
                  <span className="bg-accent relative inline-flex size-1.5 rounded-full" />
                </span>
                Available for work
              </span>
            )}
            <span className="label ml-auto hidden md:inline">
              {new Date().getFullYear()} — Portfolio
            </span>
          </Reveal>

          {/* ── headline ───────────────────────────────────────────────── */}
          <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <h1 className="font-display text-[clamp(3rem,11vw,9rem)] leading-[0.86] tracking-[-0.03em]">
                <WordReveal text="Tsegaye" immediate className="block" />
                <WordReveal
                  text="Talegngeta"
                  immediate
                  delay={0.12}
                  className="text-body block italic"
                />
              </h1>

              <Reveal delay={0.35} className="mt-8 max-w-xl">
                <p className="text-body text-lg leading-relaxed md:text-xl">
                  {profile.intro}
                </p>
              </Reveal>

              <Reveal delay={0.45} className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic pull={0.25}>
                  <a
                    href="#work"
                    className="group bg-heading text-on-accent hover:bg-accent inline-flex h-12 items-center gap-3 rounded-full px-7 text-sm font-semibold transition-colors duration-500"
                  >
                    See the work
                    <span className="transition-transform duration-500 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </Magnetic>
                <Magnetic pull={0.25}>
                  <a
                    href={profile.cv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-line-strong text-heading hover:border-heading inline-flex h-12 items-center gap-3 rounded-full border px-7 text-sm font-semibold transition-colors duration-500"
                  >
                    Download CV
                    <span className="text-body">↓</span>
                  </a>
                </Magnetic>
              </Reveal>
            </div>

            {/* ── portrait + role card ───────────────────────────────────── */}
            <div className="lg:col-span-4">
              <Reveal delay={0.25} distance={40}>
                <motion.div
                  style={reduced ? {} : { y: panelY }}
                  className="rule lg:border-l lg:pl-8"
                >
                  <p className="font-display text-3xl leading-tight md:text-4xl">
                    {profile.role}
                    <span className="text-muted block">/</span>
                    <span className="text-body italic">
                      {profile.secondaryRole}
                    </span>
                  </p>

                  {/* Spec-sheet rows — the panel carries the column now that
                      there is no portrait to anchor it. */}
                  <dl className="mt-8">
                    {facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="rule flex items-baseline justify-between gap-4 border-t py-3"
                      >
                        <dt className="label">{fact.label}</dt>
                        <dd className="text-body text-right text-sm">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </motion.div>
              </Reveal>
            </div>
          </div>

          {/* ── socials ────────────────────────────────────────────────── */}
          <Reveal
            delay={0.55}
            className="rule mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t pt-5"
          >
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-sweep text-body hover:text-heading font-mono text-xs tracking-[0.14em] uppercase transition-colors"
              >
                {social.label}
              </a>
            ))}
            <span className="label ml-auto hidden lg:inline">Scroll ↓</span>
          </Reveal>
        </motion.div>
      </div>
    </div>
  );
};
