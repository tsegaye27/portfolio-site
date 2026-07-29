"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import Image from "next/image";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";
import { work, type WorkKind } from "@/lib/content";

type Filter = "all" | WorkKind;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "work", label: "Professional" },
  { id: "lab", label: "Personal" },
];

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

export const Work = () => {
  const [filter, setFilter] = useState<Filter>("all");
  const [hovered, setHovered] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(work[0].id);
  const reduced = useReducedMotion();

  const entries = useMemo(
    () => (filter === "all" ? work : work.filter((e) => e.kind === filter)),
    [filter],
  );

  // Cursor-tracked preview: raw pointer position, softened by a spring.
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const previewX = useSpring(pointerX, { stiffness: 240, damping: 26, mass: 0.5 });
  const previewY = useSpring(pointerY, { stiffness: 240, damping: 26, mass: 0.5 });

  const trackPointer = (event: React.MouseEvent<HTMLDivElement>) => {
    pointerX.set(event.clientX);
    pointerY.set(event.clientY);
  };

  // An expanded row already shows its screenshot — a second floating copy
  // would just sit on top of the detail you are trying to read.
  const preview =
    hovered && hovered !== expanded
      ? work.find((entry) => entry.id === hovered)
      : null;

  return (
    <div className="py-24 md:py-32">
      <div className="shell">
        <Reveal className="rule flex items-end justify-between border-b pb-5">
          <div>
            <span className="label">Selected work</span>
            <h2 className="font-display mt-3 text-[clamp(2.25rem,6vw,4.5rem)] leading-[0.95] tracking-[-0.02em]">
              <WordReveal text="Things I have shipped" />
            </h2>
          </div>
          <span className="label hidden shrink-0 pb-2 md:inline">
            {String(entries.length).padStart(2, "0")} entries
          </span>
        </Reveal>

        {/* ── filter ─────────────────────────────────────────────────── */}
        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
          {filters.map((option) => {
            const isActive = filter === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setFilter(option.id)}
                aria-pressed={isActive}
                className={`relative rounded-full px-4 py-2 font-mono text-[0.6875rem] tracking-[0.14em] uppercase transition-colors ${
                  isActive ? "text-ink-950" : "text-bone-400 hover:text-bone-50"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="work-filter-pill"
                    className="bg-flare absolute inset-0 rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{option.label}</span>
              </button>
            );
          })}
        </Reveal>

        {/* ── index list ─────────────────────────────────────────────── */}
        <div
          className="mt-10"
          onMouseMove={trackPointer}
          onMouseLeave={() => setHovered(null)}
        >
          <AnimatePresence initial={false} mode="popLayout">
            {entries.map((entry) => {
              const isOpen = expanded === entry.id;
              const isDimmed = hovered !== null && hovered !== entry.id;

              return (
                <motion.article
                  key={entry.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: easeOutExpo }}
                  onMouseEnter={() => setHovered(entry.id)}
                  className="rule group border-b"
                >
                  <button
                    type="button"
                    onClick={() => setExpanded(isOpen ? null : entry.id)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-baseline gap-4 py-6 text-left md:gap-8 md:py-8"
                  >
                    <span
                      className={`label shrink-0 transition-colors ${
                        isOpen ? "text-flare" : ""
                      }`}
                    >
                      {entry.index}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`font-display block text-[clamp(1.6rem,4.2vw,3rem)] leading-tight tracking-[-0.02em] transition-[color,transform] duration-500 ${
                          isDimmed ? "text-bone-600" : "text-bone-50"
                        } ${reduced ? "" : "md:group-hover:translate-x-3"}`}
                      >
                        {entry.title}
                      </span>
                      <span className="text-bone-400 mt-1 block text-sm">
                        {entry.org}
                      </span>
                    </span>

                    <span className="label hidden shrink-0 md:inline">
                      {entry.period}
                    </span>

                    <span
                      className={`shrink-0 text-xl transition-transform duration-500 ${
                        isOpen ? "text-flare rotate-45" : "text-bone-600"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="detail"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.55, ease: easeOutExpo }}
                        className="overflow-hidden"
                      >
                        <div className="grid gap-8 pb-10 md:grid-cols-12 md:gap-10">
                          <div className="md:col-span-7 md:col-start-2">
                            <p className="text-bone-200 text-base md:text-lg">
                              {entry.summary}
                            </p>
                            <ul className="mt-5 space-y-2.5">
                              {entry.detail.map((line) => (
                                <li
                                  key={line}
                                  className="text-bone-400 flex gap-3 text-sm leading-relaxed"
                                >
                                  <span className="text-flare mt-[0.35em] shrink-0 text-[0.5rem]">
                                    ◆
                                  </span>
                                  {line}
                                </li>
                              ))}
                            </ul>

                            <div className="mt-6 flex flex-wrap gap-2">
                              {entry.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="border-bone-50/15 text-bone-400 rounded-full border px-3 py-1 font-mono text-[0.6875rem] tracking-wide"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {entry.href && (
                              <a
                                href={entry.href}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="link-sweep text-bone-50 mt-6 inline-flex items-center gap-2 text-sm font-semibold"
                              >
                                Visit
                                <span className="text-flare">↗</span>
                              </a>
                            )}
                            <span className="label mt-6 block md:hidden">
                              {entry.period}
                            </span>
                          </div>

                          <div className="md:col-span-4">
                            <div className="border-bone-50/10 bg-ink-900 relative aspect-video overflow-hidden rounded-xl border">
                              <Image
                                src={entry.image}
                                alt={`${entry.title} screenshot`}
                                fill
                                sizes="(min-width: 768px) 22rem, 100vw"
                                className="object-cover object-top"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* ── cursor-following preview (fine pointers only) ─────────────── */}
      {!reduced && (
        <AnimatePresence>
          {preview && (
            <motion.div
              key={preview.id}
              aria-hidden
              style={{ x: previewX, y: previewY }}
              className="pointer-events-none fixed top-0 left-0 z-30 hidden [@media(pointer:fine)]:block"
            >
              {/* Three layers on purpose: pointer tracking, static centring,
                  and the enter/exit transform each own their own element so
                  none of them overwrite another's `transform`. */}
              <div className="-translate-x-1/2 -translate-y-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, ease: easeOutExpo }}
                  className="border-bone-50/10 relative aspect-video w-72 overflow-hidden rounded-lg border shadow-2xl shadow-black/60"
                >
                  <Image
                    src={preview.image}
                    alt=""
                    fill
                    sizes="18rem"
                    className="object-cover object-top"
                  />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};
