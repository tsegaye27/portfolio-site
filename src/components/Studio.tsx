"use client";

import { useEffect, useRef, useState } from "react";

import { Cabinet } from "@/components/Cabinet";
import { rooms, Stage, type CharState, type Speech } from "@/components/Stage";
import type { TabId } from "@/lib/content";

const FACE_VIEWER = -45;
const WAVE_MS = 1800;
const DOTS_MS = 950;

// Shortest way round from `cur` to `target` degrees, so turns never spin 270°.
function turnTo(cur: number, target: number) {
  return cur + ((((target - cur) % 360) + 540) % 360) - 180;
}

// One shared state: picking a tab and clicking a room are the same action.
export function Studio() {
  const [tab, setTab] = useState<TabId>("experience");
  const [char, setChar] = useState<CharState>(() => {
    const [x, y] = rooms.experience.stand;
    return { x, y, facing: FACE_VIEWER, walking: false, waving: false, dur: 1 };
  });
  const [speech, setSpeech] = useState<Speech>("none");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  function later(ms: number, fn: () => void) {
    timers.current.push(setTimeout(fn, ms));
  }

  // "…" first, then the room's line.
  function speak() {
    setSpeech("dots");
    later(DOTS_MS, () => setSpeech("text"));
  }

  // Say the first line shortly after load. `timers.current` is only ever
  // emptied in place, so this captured array is the live one at unmount.
  useEffect(() => {
    const t = timers.current;
    t.push(
      setTimeout(() => {
        setSpeech("dots");
        t.push(setTimeout(() => setSpeech("text"), DOTS_MS));
      }, 600),
    );
    return () => t.forEach(clearTimeout);
  }, []);

  function arrive() {
    setChar((c) => ({ ...c, walking: false, waving: true, facing: turnTo(c.facing, FACE_VIEWER) }));
    speak();
    later(WAVE_MS, () => setChar((c) => ({ ...c, waving: false })));
  }

  function go(id: TabId) {
    timers.current.splice(0).forEach(clearTimeout);
    setTab(id);

    const [x, y] = rooms[id].stand;
    const dx = x - char.x;
    const dy = y - char.y;
    const dist = Math.hypot(dx, dy);
    if (dist < 4) {
      arrive();
      return;
    }
    // Local forward is +y, so heading is atan2(-dx, dy).
    const heading = (Math.atan2(-dx, dy) * 180) / Math.PI;
    const dur = Math.max(0.7, dist / 220);
    setSpeech("none");
    setChar({ x, y, facing: turnTo(char.facing, heading), walking: true, waving: false, dur });
    later(dur * 1000, arrive);
  }

  return (
    <>
      <Stage tab={tab} go={go} char={char} speech={speech} />
      <Cabinet tab={tab} setTab={go} />
    </>
  );
}
