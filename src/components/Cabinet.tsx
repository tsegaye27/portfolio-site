"use client";

import Image from "next/image";
import { useRef, type KeyboardEvent } from "react";

import {
  about,
  builds,
  contact,
  experience,
  profile,
  sideProjects,
  socials,
  tabs,
  type Project,
  type TabId,
} from "@/lib/content";

const label = "font-mono text-xs tracking-[0.08em] text-muted-ink uppercase";
const h2 = "m-0 text-[clamp(48px,7vw,96px)] leading-[0.95] font-bold tracking-[-0.025em]";
const rule = "border-[rgba(26,26,23,0.35)]";

export function Cabinet({ tab, setTab }: { tab: TabId; setTab: (t: TabId) => void }) {
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // ARIA tabs pattern: arrows move between tabs, Home/End jump to the ends.
  function onKeyDown(e: KeyboardEvent, i: number) {
    const last = tabs.length - 1;
    const next = { ArrowRight: i === last ? 0 : i + 1, ArrowLeft: i === 0 ? last : i - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setTab(tabs[next].id);
    tabRefs.current[next]?.focus();
  }

  return (
    <div className="shell pt-6 pb-20">
      <div role="tablist" aria-label="Portfolio sections" className="flex items-end gap-1 overflow-x-auto pl-[18px] [scrollbar-width:none]">
        {tabs.map((t, i) => {
          const active = t.id === tab;
          return (
            <button
              key={t.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              role="tab"
              id={`tab-${t.id}`}
              aria-selected={active}
              aria-controls={`panel-${t.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => setTab(t.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`flex min-h-11 items-baseline gap-2.5 rounded-t-xl border-0 whitespace-nowrap ${
                active ? "bg-folder px-[26px] pt-4 pb-[18px] text-ink" : "bg-tab px-5 pt-[11px] pb-3 text-manila-body"
              }`}
            >
              <span className="font-mono text-[11px]">{t.no}</span>
              <span className="text-[22px] font-bold">{t.label}</span>
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${tab}`}
        aria-labelledby={`tab-${tab}`}
        tabIndex={0}
        className="min-h-[640px] rounded-tl rounded-r-2xl rounded-bl-2xl bg-folder p-[clamp(24px,4vw,56px)] shadow-[0_2px_0_rgba(26,26,23,0.12),0_24px_48px_-32px_rgba(26,26,23,0.35)]"
      >
        {tab === "experience" && <Experience />}
        {tab === "projects" && <Projects />}
        {tab === "about" && <About />}
        {tab === "contact" && <Contact />}
      </div>
    </div>
  );
}

function PanelHead({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 border-b-2 border-ink pb-4">
      <h2 className={h2}>{title}</h2>
      <span className="font-mono text-xs tracking-[0.06em] uppercase">{meta}</span>
    </div>
  );
}

function Experience() {
  return (
    <div className="flex flex-col gap-14">
      <PanelHead title="Experience" meta={`${experience.length} records on file`} />
      <div className="flex flex-col">
        <span className={`${label} pb-3`}>Service record</span>
        {experience.map((e) => (
          <div key={e.title} className={`flex flex-wrap gap-x-8 gap-y-2 border-t py-[22px] last:border-b ${rule}`}>
            <span className="flex-[1_1_170px] font-mono text-[13px] uppercase">{e.dates}</span>
            <div className="flex min-w-0 flex-[999_1_420px] flex-col gap-2">
              <h3 className="m-0 text-[25px] font-bold tracking-[-0.01em]">{e.title}</h3>
              <p className="m-0 text-lg leading-normal text-manila-body">{e.summary}</p>
            </div>
            <span className="flex-[1_1_200px] text-right font-mono text-xs text-muted-ink uppercase">{e.stack}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="flex flex-col gap-10">
      <PanelHead title="Projects" meta={`${builds.length} builds · ${sideProjects.length} side projects`} />
      <div className="flex flex-col gap-4">
        <span className={label}>Selected builds</span>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-x-[22px] gap-y-11 pt-2">
          {builds.map((p, i) => (
            <ProjectCard key={p.title} project={p} no={i + 1} />
          ))}
        </div>
      </div>
      <div className="mt-14 flex flex-col gap-4">
        <span className={label}>Side projects &amp; experiments</span>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-x-[22px] gap-y-11 pt-2">
          {sideProjects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
          <div className="flex min-h-[220px] flex-col justify-center gap-2.5 border-[1.5px] border-dashed border-[rgba(26,26,23,0.5)] p-[22px]">
            <span className="font-mono text-[11px] tracking-[0.06em] uppercase">Next in the drawer</span>
            <span className="text-lg leading-snug">CLI tools, being written up.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// `no` set = a selected build (numbered header, LIVE stamp); unset = side project.
// The card sits in a kraft folder; on hover/focus its screenshot slides up out of it.
function ProjectCard({ project: p, no }: { project: Project; no?: number }) {
  const Tag = p.href ? "a" : "div";
  return (
    <div className="pcard relative pt-[18px]">
      <div aria-hidden="true" className="absolute top-0 left-0 h-5 w-24 rounded-t-lg bg-kraft" />
      <div aria-hidden="true" className="absolute inset-x-0 top-3.5 -bottom-1.5 rounded-tl-xs rounded-r-[10px] rounded-bl-[10px] bg-kraft" />
      {p.image && (
        <div
          aria-hidden="true"
          className="peek absolute inset-x-4 top-[26px] h-[170px] border border-ink bg-card p-2 shadow-[0_12px_24px_-12px_rgba(26,26,23,0.5)]"
        >
          <div className="flex h-full flex-col overflow-hidden">
            <div className="flex gap-1 bg-ink px-2 py-1.5">
              <span className="size-1.5 rounded-full bg-paper" />
              <span className="size-1.5 rounded-full bg-paper" />
              <span className="size-1.5 rounded-full bg-paper" />
            </div>
            <div className="relative grow">
              <Image src={p.image} alt="" fill sizes="340px" className="object-cover object-top" />
            </div>
          </div>
        </div>
      )}
      <Tag
        href={p.href}
        className={`relative z-[1] flex flex-col gap-3.5 border border-ink bg-card p-[22px] no-underline ${
          no ? "min-h-[250px]" : "min-h-[220px]"
        }`}
      >
        {no ? (
          <div className="flex justify-between border-b border-dashed border-[rgba(26,26,23,0.4)] pb-2.5 font-mono text-[11px] tracking-[0.06em] uppercase">
            <span>No. {String(no).padStart(2, "0")}</span>
            <span>{p.context}</span>
          </div>
        ) : (
          <span className="font-mono text-[11px] tracking-[0.06em] uppercase">
            {p.context}
            {p.href && " ↗"}
          </span>
        )}
        <h3 className="m-0 text-[32px] leading-[1.05] font-bold tracking-[-0.01em]">{p.title}</h3>
        <p className="m-0 grow text-[17px] leading-[1.45]">{p.blurb}</p>
        <span className="font-mono text-[11px] text-muted-ink uppercase">{p.stack}</span>
        {no && p.href && (
          <span className="absolute top-[46px] right-4 rotate-8 border-2 border-stamp px-2 py-[3px] font-mono text-[11px] font-semibold tracking-[0.12em] text-stamp">
            LIVE ↗
          </span>
        )}
      </Tag>
    </div>
  );
}

function About() {
  return (
    <div className="flex flex-col gap-12">
      <div className="border-b-2 border-ink pb-4">
        <h2 className={h2}>About</h2>
      </div>
      <p className="m-0 max-w-[860px] text-[clamp(22px,2.6vw,32px)] leading-[1.35] tracking-[-0.01em]">{about.text}</p>
      <div className={`grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-6 gap-y-8 border-t pt-7 ${rule}`}>
        {about.toolbox.map((g) => (
          <div key={g.group} className="flex flex-col gap-2.5">
            <span className={`${label} text-[11px]`}>{g.group}</span>
            <span className="text-lg leading-[1.6]">
              {g.items.map((item, i) => (
                <span key={item}>
                  {i > 0 && <br />}
                  {item}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-2.5">
        <span className={`${label} mr-2 text-[11px]`}>Off the clock</span>
        {about.hobbies.map((h) => (
          <span key={h} className="rounded-full border border-ink px-3 py-1.5 text-[17px]">
            {h}
          </span>
        ))}
      </div>
    </div>
  );
}

function Contact() {
  const btn = "inline-flex min-h-[52px] items-center px-6 font-mono text-[15px] no-underline";
  const others = ["Telegram", "LinkedIn", "GitHub"].map((l) => socials.find((s) => s.label === l)!);
  return (
    <div className="flex flex-col gap-10 py-6">
      <h2 className="m-0 text-[clamp(56px,10vw,150px)] leading-[0.92] font-bold tracking-[-0.03em]">
        Let&apos;s open
        <br />a new file.
      </h2>
      <p className="m-0 max-w-[560px] text-xl leading-normal">{contact.invite}</p>
      <div className="flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className={`${btn} bg-ink text-paper hover:text-paper hover:opacity-90`}>
          {profile.email}
        </a>
        {others.map((s) => (
          <a key={s.label} href={s.href} className={`${btn} border-[1.5px] border-ink`}>
            {s.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
}
