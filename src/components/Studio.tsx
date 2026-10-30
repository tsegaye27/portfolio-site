"use client";

import { useState } from "react";

import { Cabinet } from "@/components/Cabinet";
import { Stage } from "@/components/Stage";
import type { TabId } from "@/lib/content";

// One shared state: picking a tab and clicking a room are the same action.
export function Studio() {
  const [tab, setTab] = useState<TabId>("experience");
  return (
    <>
      <Stage tab={tab} setTab={setTab} />
      <Cabinet tab={tab} setTab={setTab} />
    </>
  );
}
