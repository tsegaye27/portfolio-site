"use client";

import { motion } from "framer-motion";
import { useEffect, useSyncExternalStore } from "react";

import { THEME_STORAGE_KEY, type Theme } from "@/lib/theme";

/**
 * The `data-theme` attribute on <html> is the single source of truth — the
 * boot script writes it before paint, the toggle rewrites it, and this
 * subscription reads it back. No duplicate state to drift out of sync.
 */
const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
};

const getSnapshot = (): Theme =>
  document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";

// Matches the light default the CSS falls back to before JS resolves.
const getServerSnapshot = (): Theme => "light";

export const ThemeToggle = () => {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isDark = theme === "dark";

  // Follow the OS if the visitor has never picked a side explicitly.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const follow = () => {
      let stored: string | null = null;
      try {
        stored = localStorage.getItem(THEME_STORAGE_KEY);
      } catch {
        // Storage blocked — treat it as "no preference recorded".
      }
      if (stored === "light" || stored === "dark") return;
      document.documentElement.setAttribute(
        "data-theme",
        media.matches ? "dark" : "light",
      );
    };

    media.addEventListener("change", follow);
    return () => media.removeEventListener("change", follow);
  }, []);

  const toggle = () => {
    const next: Theme = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Private browsing — the choice just won't survive a reload.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className="border-line hover:border-line-strong text-muted hover:text-heading relative flex size-9 items-center justify-center rounded-full border transition-colors"
    >
      {/* Both glyphs stay mounted; only their transforms differ, so the swap
          reads as one rotation rather than two pops. */}
      <motion.span
        aria-hidden
        className="absolute text-sm"
        animate={{ opacity: isDark ? 0 : 1, rotate: isDark ? -90 : 0, scale: isDark ? 0.5 : 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        ☀
      </motion.span>
      <motion.span
        aria-hidden
        className="absolute text-sm"
        animate={{ opacity: isDark ? 1 : 0, rotate: isDark ? 0 : 90, scale: isDark ? 1 : 0.5 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        ☾
      </motion.span>
    </button>
  );
};
