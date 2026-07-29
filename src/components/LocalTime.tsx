"use client";

import { useEffect, useState } from "react";

import { profile } from "@/lib/content";

const formatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: profile.timezone,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/**
 * Live clock in the timezone I actually work in. Mounts empty so the server
 * and client markup agree, then ticks once a second.
 */
export const LocalTime = () => {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="tabular-nums">
      {time ?? "--:--:--"}
      <span className="text-flare ml-1 animate-blink">·</span>
    </span>
  );
};
