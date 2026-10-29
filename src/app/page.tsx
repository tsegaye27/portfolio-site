import { profile, socials } from "@/lib/content";

export default function Home() {
  return (
    <>
      <header className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-[22px] font-mono text-xs uppercase tracking-[0.04em]">
        <span>Selected work, 2024 — 2026</span>
        <nav aria-label="Elsewhere" className="flex flex-wrap gap-x-[22px] gap-y-1">
          {socials.map((s) => (
            <a key={s.label} href={s.href} className="py-3 no-underline">
              {s.label} ↗
            </a>
          ))}
          <a href={profile.cv} className="py-3 underline underline-offset-4">
            CV (PDF)
          </a>
        </nav>
      </header>

      <main>
        <section className="shell flex flex-col gap-6 pt-10 pb-12">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6">
            <h1 className="m-0 text-[clamp(64px,11vw,168px)] leading-[0.9] font-extrabold tracking-[-0.035em]">
              Tsegaye
              <br />
              Talegngeta
            </h1>
            <a
              href={profile.cv}
              download
              className="mb-3.5 inline-flex min-h-14 items-center gap-3 rounded-full bg-ink px-[26px] font-mono text-[15px] font-medium text-paper no-underline hover:text-paper hover:opacity-90"
            >
              Download CV
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 4v12M6 10l6 6 6-6M5 20h14" />
              </svg>
            </a>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-8">
            <div className="flex max-w-[680px] flex-[1_1_460px] flex-col gap-4">
              <p className="m-0 text-[clamp(24px,2.6vw,32px)] leading-[1.3] italic">{profile.intro}</p>
              <p className="m-0 font-mono text-[13px] text-muted-ink">{profile.meta}</p>
            </div>
            <div
              role="img"
              aria-label="Currently at Pitron Tech Solutions since June 2026"
              className="mr-6 -rotate-7 border-3 border-stamp p-1 font-mono text-stamp uppercase"
            >
              <div className="flex flex-col items-center gap-0.5 border-[1.5px] border-stamp px-4 py-2">
                <span className="text-[10px] tracking-[0.18em]">{profile.stamp.top}</span>
                <span className="text-lg font-semibold tracking-[0.04em]">{profile.stamp.name}</span>
                <span className="text-[10px] tracking-[0.18em]">{profile.stamp.since}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="shell flex flex-wrap justify-between gap-3 pb-10 font-mono text-xs tracking-[0.06em] uppercase">
        <span>© 2026 {profile.name}</span>
        <span>Made in Addis Ababa</span>
      </footer>
    </>
  );
}
