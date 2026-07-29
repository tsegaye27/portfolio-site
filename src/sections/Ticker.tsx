import { Marquee } from "@/components/Marquee";
import { marqueeWords } from "@/lib/content";

/** Two counter-drifting bands that break the page between sections. */
export const Ticker = () => (
  <div className="rule border-y py-8 md:py-10">
    <Marquee items={marqueeWords} />
    <div className="mt-3 md:mt-4">
      <Marquee items={marqueeWords} reverse />
    </div>
  </div>
);
