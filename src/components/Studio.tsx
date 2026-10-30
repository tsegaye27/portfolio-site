"use client";

import { useEffect, useRef, useState } from "react";

import { Cabinet } from "@/components/Cabinet";
import { rooms, Stage, type CharState } from "@/components/Stage";
import type { TabId } from "@/lib/content";

const FACE_VIEWER = -45;
const WAVE_MS = 1800;

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
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  function later(ms: number, fn: () => void) {
    timers.current.push(setTimeout(fn, ms));
  }

  function arrive() {
    setChar((c) => ({ ...c, walking: false, waving: true, facing: turnTo(c.facing, FACE_VIEWER) }));
    later(WAVE_MS, () => setChar((c) => ({ ...c, waving: false })));
  }

  function go(id: TabId) {
    timers.current.forEach(clearTimeout);
    timers.current = [];
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
    setChar({ x, y, facing: turnTo(char.facing, heading), walking: true, waving: false, dur });
    later(dur * 1000, arrive);
  }

  return (
    <>
      <Stage tab={tab} go={go} char={char} />
      <Cabinet tab={tab} setTab={go} />
    </>
  );
}
