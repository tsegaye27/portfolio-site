export type Rect = [minX: number, minY: number, maxX: number, maxY: number];
export type Offset = { dx: number; dy: number };
export type Placed = { room: Rect; footprint: Rect };

const PAD = 6; // keep pieces this far inside their room
const GAP = 3; // and this far from each other

// Undo the isometric view: screen x = 0.707(fx - fy), screen y = 0.354(fx + fy).
export function screenToFloor(sx: number, sy: number) {
  const a = sx / 0.7071;
  const b = sy / 0.35355;
  return { fx: (a + b) / 2, fy: (b - a) / 2 };
}

/**
 * Where piece `id` ends up when the pointer asks for offset `want`: clamped to
 * its room, then the full move, else a slide along x, else along y. Returns
 * null when every option would overlap another piece (stay put).
 */
export function nextOffset(
  id: string,
  want: Offset,
  items: Record<string, Placed>,
  off: Record<string, Offset>,
): Offset | null {
  const { room: r, footprint: b } = items[id];
  const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
  const nx = clamp(want.dx, r[0] + PAD - b[0], r[2] - PAD - b[2]);
  const ny = clamp(want.dy, r[1] + PAD - b[1], r[3] - PAD - b[3]);
  const cur = off[id] ?? { dx: 0, dy: 0 };

  const hits = (dx: number, dy: number) =>
    Object.entries(items).some(([oid, o]) => {
      if (oid === id) return false;
      const q = o.footprint;
      const qo = off[oid] ?? { dx: 0, dy: 0 };
      return (
        b[0] + dx < q[2] + qo.dx + GAP &&
        b[2] + dx > q[0] + qo.dx - GAP &&
        b[1] + dy < q[3] + qo.dy + GAP &&
        b[3] + dy > q[1] + qo.dy - GAP
      );
    });

  const tries: [number, number][] = [
    [nx, ny],
    [nx, cur.dy],
    [cur.dx, ny],
  ];
  const ok = tries.find(([dx, dy]) => !hits(dx, dy));
  return ok ? { dx: ok[0], dy: ok[1] } : null;
}
