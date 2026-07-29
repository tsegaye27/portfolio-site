"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";
import { hobbies, stack } from "@/lib/content";

const principles = [
  {
    n: "01",
    title: "Correctness before cleverness",
    body: "Money moves through the systems I build. Idempotency, retries and audit trails come first; the elegant abstraction comes second.",
  },
  {
    n: "02",
    title: "Boundaries you can point at",
    body: "Services split along real seams — a gateway, a relay, a ledger — so a change stays where it started instead of rippling outward.",
  },
  {
    n: "03",
    title: "Ship, then sharpen",
    body: "A working slice in production teaches more than a month of planning. I get it live, watch it, and refine against what actually happens.",
  },
];

/** Hand-placed so the hobby chips read as a scattered pile, not a list. */
const chipPositions = [
  { top: "14%", left: "8%" },
  { top: "44%", left: "42%" },
  { top: "68%", left: "12%" },
  { top: "26%", left: "58%" },
  { top: "56%", left: "6%" },
];

export const About = () => {
  const dragArea = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  return (
    <div className="py-24 md:py-32">
      <div className="shell">
        <Reveal className="rule border-b pb-5">
          <span className="label">About</span>
          <h2 className="font-display mt-3 text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.02em]">
            <WordReveal text="How I work, and what with" />
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* ── narrative ──────────────────────────────────────────────── */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="font-display text-2xl leading-snug text-balance md:text-3xl">
                I started in the browser and ended up{" "}
                <span className="text-accent italic">underneath it</span> — in
                the services that decide whether a payment succeeds or fails
                honestly.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-body mt-6 leading-relaxed">
                Today I&apos;m a backend developer at Pitron Tech Solutions,
                working across the company&apos;s projects. Before that I wrote
                Go at AddisPay, building the microservices behind a payment
                gateway wired into Ethiopian banks and mobile wallets — and
                before that: a Nuxt frontend for a missing-person platform, an
                eSIM storefront on NestJS, a RAG-backed onboarding bot, and a
                run of freelance builds that taught me how much of engineering
                is really about drawing clear boundaries.
              </p>
            </Reveal>

            <div className="mt-12">
              {principles.map((principle, i) => (
                <Reveal key={principle.n} delay={i * 0.08}>
                  <div className="rule group border-t py-6">
                    <div className="flex gap-5">
                      <span className="label group-hover:text-accent pt-1.5 transition-colors duration-500">
                        {principle.n}
                      </span>
                      <div>
                        <h3 className="font-display text-xl md:text-2xl">
                          {principle.title}
                        </h3>
                        <p className="text-body mt-2 text-sm leading-relaxed">
                          {principle.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── toolbox + hobbies ──────────────────────────────────────── */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <span className="label">Toolbox</span>
                <ul className="border-line bg-line mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border sm:grid-cols-3 lg:grid-cols-2">
                  {stack.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li
                        key={item.title}
                        className="bg-canvas hover:bg-surface group flex items-center gap-3 p-4 transition-colors"
                      >
                        <Icon className="tech-svg text-muted group-hover:text-accent size-5 shrink-0 transition-colors duration-500" />
                        <span className="min-w-0 truncate text-sm font-medium">
                          {item.title}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>

              <Reveal delay={0.15} className="mt-10">
                <span className="label">Off the clock — drag them around</span>
                <div
                  ref={dragArea}
                  className="border-line bg-surface/50 relative mt-5 h-56 overflow-hidden rounded-xl border"
                >
                  {hobbies.map((hobby, i) => (
                    <motion.span
                      key={hobby.title}
                      drag={!reduced}
                      dragConstraints={dragArea}
                      dragElastic={0.15}
                      dragMomentum={false}
                      whileDrag={{ scale: 1.08, zIndex: 10 }}
                      style={chipPositions[i]}
                      className="border-line bg-surface-2 text-heading absolute inline-flex cursor-grab items-center gap-2 rounded-full border px-4 py-2 text-sm select-none active:cursor-grabbing"
                    >
                      {hobby.title}
                      <span aria-hidden>{hobby.emoji}</span>
                    </motion.span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
