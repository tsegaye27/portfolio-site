"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  /** How far the element chases the cursor, 0–1. */
  pull?: number;
  className?: string;
};

/**
 * Makes an element lean toward the pointer while it is hovered, then spring
 * back on exit. Disabled for coarse pointers and reduced-motion users.
 */
export const Magnetic = ({ children, pull = 0.3, className }: MagneticProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const spring = { stiffness: 220, damping: 18, mass: 0.6 };
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  if (reduced) return <span className={className}>{children}</span>;

  const handleMove = (event: React.MouseEvent<HTMLSpanElement>) => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    x.set((event.clientX - (rect.left + rect.width / 2)) * pull);
    y.set((event.clientY - (rect.top + rect.height / 2)) * pull);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
    >
      {children}
    </motion.span>
  );
};
