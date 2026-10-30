import assert from "node:assert/strict";
import test from "node:test";

import { nextOffset, screenToFloor, type Placed } from "./drag.ts";

const room: Placed["room"] = [0, 0, 320, 320];
const items: Record<string, Placed> = {
  a: { room, footprint: [100, 100, 140, 140] },
  b: { room, footprint: [200, 100, 240, 140] },
};

test("clamps a piece inside its room with padding", () => {
  assert.deepEqual(nextOffset("a", { dx: -500, dy: 0 }, items, {}), { dx: -94, dy: 0 });
  assert.deepEqual(nextOffset("a", { dx: 0, dy: 900 }, items, {}), { dx: 0, dy: 174 });
});

test("blocks overlap, then slides along the free axis", () => {
  // Straight into b: x is blocked, so it stays at x=0.
  assert.deepEqual(nextOffset("a", { dx: 80, dy: 0 }, items, {}), { dx: 0, dy: 0 });
  // Into b and down: full move blocked, x-only blocked, y-only slide wins.
  assert.deepEqual(nextOffset("a", { dx: 80, dy: 20 }, items, {}), { dx: 0, dy: 20 });
  // Down far enough to pass under b: the full move is free.
  assert.deepEqual(nextOffset("a", { dx: 80, dy: 50 }, items, {}), { dx: 80, dy: 50 });
});

test("screen drag converts back to floor axes", () => {
  // Straight down on screen = +x and +y equally on the floor.
  const { fx, fy } = screenToFloor(0, 0.35355 * 20);
  assert.ok(Math.abs(fx - 10) < 1e-9 && Math.abs(fy - 10) < 1e-9);
});
