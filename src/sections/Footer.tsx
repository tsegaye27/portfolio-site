import { profile } from "@/lib/content";

export const Footer = () => (
  <footer className="pb-10">
    <div className="shell">
      <div className="rule flex flex-wrap items-center justify-between gap-4 border-t pt-6">
        <span className="label">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="label hidden md:inline">
          Next.js · Tailwind · Framer Motion
        </span>
        <a href="#top" className="label hover:text-heading transition-colors">
          Back to top ↑
        </a>
      </div>
    </div>
  </footer>
);
