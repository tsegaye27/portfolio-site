import { Fragment } from "react";

type MarqueeProps = {
  items: readonly string[];
  reverse?: boolean;
};

/**
 * Edge-faded infinite ticker. The list is rendered twice so the CSS
 * translate of -50% lands exactly on a seam.
 */
export const Marquee = ({ items, reverse = false }: MarqueeProps) => (
  <div
    aria-hidden
    className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
  >
    <div
      className={`flex shrink-0 items-center gap-10 pr-10 ${
        reverse ? "animate-drift-right" : "animate-drift-left"
      }`}
    >
      {[0, 1].map((copy) => (
        <Fragment key={copy}>
          {items.map((item) => (
            <span key={`${copy}-${item}`} className="flex items-center gap-10">
              <span className="font-display text-3xl whitespace-nowrap text-bone-200 md:text-5xl">
                {item}
              </span>
              <span className="text-flare text-xl">✦</span>
            </span>
          ))}
        </Fragment>
      ))}
    </div>
  </div>
);
