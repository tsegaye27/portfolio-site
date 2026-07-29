"use client";

import { motion, useReducedMotion } from "framer-motion";

type WordRevealProps = {
  text: string;
  className?: string;
  /** Seconds between consecutive words. */
  stagger?: number;
  delay?: number;
  /** Render immediately instead of waiting for the viewport (hero copy). */
  immediate?: boolean;
};

/**
 * Masked per-word reveal: each word rides up from behind a clipping box, so
 * headlines assemble themselves rather than fading in as one lump.
 */
export const WordReveal = ({
  text,
  className,
  stagger = 0.055,
  delay = 0,
  immediate = false,
}: WordRevealProps) => {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) return <span className={className}>{text}</span>;

  const animateProps = immediate
    ? { animate: "visible" as const }
    : {
        whileInView: "visible" as const,
        viewport: { once: true, margin: "0px 0px -10% 0px" },
      };

  return (
    <motion.span
      className={className}
      initial="hidden"
      {...animateProps}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          // Each word gets its own clipping window; the extra bottom padding
          // keeps descenders (g, y, p) from being sliced off.
          className="inline-block overflow-hidden pb-[0.12em] align-bottom"
          // The gap between words is a margin, not a space — a trailing space
          // inside an overflow-hidden box gets collapsed away.
          style={{ marginRight: i < words.length - 1 ? "0.25em" : undefined }}
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              visible: { y: 0 },
            }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};
