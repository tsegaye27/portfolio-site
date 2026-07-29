"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Seconds of head start to give this element over its siblings. */
  delay?: number;
  /** Travel distance in px before settling. */
  distance?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "p";
};

/**
 * Slides a block up into place the first time it enters the viewport.
 * One primitive, used everywhere, so the whole page shares a rhythm.
 */
export const Reveal = ({
  children,
  delay = 0,
  distance = 28,
  className,
  as = "div",
}: RevealProps) => {
  const reduced = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={reduced ? undefined : { opacity: 0, y: distance }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
};
