"use client";

import { LocalTime } from "@/components/LocalTime";
import { Magnetic } from "@/components/Magnetic";
import { Reveal } from "@/components/Reveal";
import { WordReveal } from "@/components/WordReveal";
import { profile, socials } from "@/lib/content";

export const Contact = () => (
  <div className="relative overflow-hidden py-24 md:py-32">
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[32rem]"
      style={{
        background:
          "radial-gradient(70% 100% at 50% 100%, rgba(240,178,63,0.16), transparent 70%)",
      }}
    />

    <div className="shell">
      <Reveal className="rule border-b pb-5">
        <span className="label">Contact</span>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.9] tracking-[-0.03em]">
            <WordReveal text="Have something" className="block" />
            <WordReveal
              text="worth building?"
              delay={0.08}
              className="text-bone-400 block italic"
            />
          </h2>

          <Reveal delay={0.25} className="mt-10">
            <Magnetic pull={0.2}>
              <a
                href={`mailto:${profile.email}`}
                className="group border-bone-50/20 hover:border-flare relative inline-flex items-center gap-4 overflow-hidden rounded-full border px-8 py-5"
              >
                {/* Amber wipes up from the bottom edge on hover. */}
                <span
                  aria-hidden
                  className="bg-flare absolute inset-0 origin-bottom scale-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
                />
                <span className="group-hover:text-ink-950 relative z-10 font-mono text-sm tracking-[0.06em] transition-colors duration-500 md:text-base">
                  {profile.email}
                </span>
                <span className="group-hover:text-ink-950 relative z-10 transition-[color,transform] duration-500 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </Magnetic>
          </Reveal>

          <Reveal delay={0.35} className="mt-8">
            <p className="text-bone-400 max-w-md leading-relaxed">
              Backend work, payment integrations, or a full-stack build that
              needs to hold up in production — I read everything that lands.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-4">
          <Reveal delay={0.2}>
            <dl className="space-y-6">
              <div>
                <dt className="label">Local time</dt>
                <dd className="mt-1 font-mono text-sm">
                  <LocalTime />
                  <span className="text-bone-600 ml-2">EAT</span>
                </dd>
              </div>
              <div>
                <dt className="label">Status</dt>
                <dd className="text-flare mt-1 text-sm">
                  {profile.available
                    ? "Open to new projects"
                    : "Currently at capacity"}
                </dd>
              </div>
              <div>
                <dt className="label">Elsewhere</dt>
                <dd className="mt-2 space-y-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-baseline justify-between gap-4"
                    >
                      <span className="link-sweep text-sm">{social.label}</span>
                      <span className="text-bone-600 group-hover:text-bone-400 truncate font-mono text-xs transition-colors">
                        {social.handle}
                      </span>
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </div>
  </div>
);
