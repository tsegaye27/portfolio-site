"use client";

import type { CSSProperties, ReactNode } from "react";

import { tabs, type TabId } from "@/lib/content";

const STAMP = "#B8301C";

/* ── Geometry ────────────────────────────────────────────────────────────
   The floor is a 640×640 plane viewed isometrically. Coordinates below are
   floor pixels: x grows to the right-back, y to the left-front. */

type Rect = [minX: number, minY: number, maxX: number, maxY: number];

const rooms: Record<TabId, { rect: Rect; floor: string; decal: [number, number] }> = {
  experience: { rect: [0, 0, 320, 320], floor: "#E8D9AE", decal: [22, 262] },
  projects: { rect: [320, 0, 640, 320], floor: "#DCE0CF", decal: [342, 262] },
  about: { rect: [0, 320, 320, 640], floor: "#E8D8CB", decal: [22, 582] },
  contact: { rect: [320, 320, 640, 640], floor: "#DEDACB", decal: [342, 582] },
};

const wood = { top: "#B98A5B", front: "#9C6F44", right: "#84593A" };
const navy = { top: "#34425A", front: "#29354A", right: "#1F2939" };
const sage = { top: "#75866A", front: "#63735A", right: "#53614B" };

type BoxSpec = {
  x: number;
  y: number;
  w: number;
  d: number;
  h: number;
  z?: number;
  top: string;
  front?: string;
  right?: string;
  frontChildren?: ReactNode;
};

type Piece = { id: string; room: TabId; footprint: Rect; boxes: BoxSpec[] };

// Footprints drive drag clamping and collision (phase 7).
export const pieces: Piece[] = [
  {
    id: "desk",
    room: "experience",
    footprint: [60, 30, 210, 90],
    boxes: [
      { x: 60, y: 30, w: 150, d: 60, h: 46, ...wood },
      {
        x: 100, y: 40, w: 72, d: 8, h: 46, z: 46,
        top: "#2A2A26", front: "#1A1A17", right: "#111110",
        frontChildren: (
          <>
            <Bar l={8} t={11} w={42} c="#4A78C2" />
            <Bar l={8} t={18} w={26} c="#8E8A80" />
            <Bar l={8} t={25} w={50} c="#8E8A80" />
            <Bar l={8} t={32} w={34} c={STAMP} />
          </>
        ),
      },
    ],
  },
  {
    id: "chair",
    room: "experience",
    footprint: [118, 108, 156, 148],
    boxes: [
      { x: 118, y: 108, w: 38, d: 38, h: 24, ...navy },
      { x: 118, y: 140, w: 38, d: 8, h: 34, z: 24, ...navy },
    ],
  },
  {
    id: "plant",
    room: "experience",
    footprint: [16, 224, 58, 266],
    boxes: [
      { x: 22, y: 230, w: 30, d: 30, h: 28, top: "#A65A3A", front: "#8E4B30", right: "#773D27" },
      { x: 16, y: 224, w: 42, d: 42, h: 36, z: 28, top: "#6A8C4E", front: "#557440", right: "#455F34" },
    ],
  },
  {
    id: "bench",
    room: "projects",
    footprint: [420, 30, 590, 86],
    boxes: [
      { x: 420, y: 30, w: 170, d: 56, h: 46, ...wood },
      { x: 440, y: 42, w: 26, d: 26, h: 26, z: 46, top: "#4A78C2", front: "#3D66A8", right: "#33568E" },
      { x: 444, y: 46, w: 18, d: 18, h: 18, z: 72, top: "#E2B23C", front: "#C99B2F", right: "#AD8526" },
      { x: 480, y: 50, w: 22, d: 22, h: 22, z: 46, top: "#C4442E", front: "#A93A27", right: "#8F3120" },
      { x: 530, y: 44, w: 44, d: 30, h: 3, z: 46, top: "#2A2A26", front: "#1A1A17" },
    ],
  },
  {
    id: "stool",
    room: "projects",
    footprint: [540, 120, 570, 150],
    boxes: [{ x: 540, y: 120, w: 30, d: 30, h: 34, ...navy }],
  },
  {
    id: "sofa",
    room: "about",
    footprint: [22, 400, 84, 550],
    boxes: [
      { x: 22, y: 400, w: 62, d: 150, h: 28, ...sage },
      { x: 22, y: 400, w: 18, d: 150, h: 32, z: 28, ...sage },
      { x: 22, y: 534, w: 62, d: 16, h: 16, z: 28, ...sage },
    ],
  },
  {
    id: "table",
    room: "about",
    footprint: [124, 444, 184, 504],
    boxes: [
      {
        x: 124, y: 444, w: 60, d: 60, h: 22,
        top: "repeating-conic-gradient(#1A1A17 0 25%, #EFE7D4 0 50%) 0 0 / 15px 15px",
        front: wood.front,
        right: wood.right,
      },
    ],
  },
  {
    id: "shelf",
    room: "about",
    footprint: [18, 578, 44, 628],
    boxes: [
      {
        x: 18, y: 578, w: 26, d: 50, h: 96,
        top: wood.top,
        front: wood.front,
        right: "repeating-linear-gradient(90deg, #84593A 0 6px, #C4442E 6px 12px, #4A78C2 12px 17px, #E2B23C 17px 22px, #F2EFE7 22px 26px, #84593A 26px 32px)",
      },
    ],
  },
  {
    id: "counter",
    room: "contact",
    footprint: [472, 506, 592, 550],
    boxes: [
      {
        x: 472, y: 506, w: 120, d: 44, h: 54,
        top: "#2A2A26", front: "#F3F1EC", right: "#CFC9BB",
        frontChildren: <div className="absolute top-[22px] left-3.5 h-3.5 w-[54px] border-2 border-stamp" />,
      },
      { x: 490, y: 512, w: 40, d: 28, h: 10, z: 54, top: STAMP, front: "#9C2918", right: "#81220F" },
      { x: 496, y: 516, w: 28, d: 20, h: 12, z: 54, top: "#FBFAF6" },
    ],
  },
];

/* ── Primitives ──────────────────────────────────────────────────────── */

const p3d: CSSProperties = { position: "absolute", transformStyle: "preserve-3d" };

function Bar({ l, t, w, c }: { l: number; t: number; w: number; c: string }) {
  return <div className="absolute h-[3px]" style={{ left: l, top: t, width: w, background: c }} />;
}

// A cuboid: top face lifted by h, front (+y) and right (+x) faces folded down.
function Box({ x, y, w, d, h, z = 0, top, front, right, frontChildren }: BoxSpec) {
  return (
    <div style={{ ...p3d, left: x, top: y, width: w, height: d, transform: `translateZ(${z}px)` }}>
      <div className="absolute inset-0" style={{ background: top, transform: `translateZ(${h}px)` }} />
      {front && (
        <div
          className="absolute left-0 origin-top"
          style={{ top: d, width: w, height: h, background: front, transform: "rotateX(90deg)" }}
        >
          {frontChildren}
        </div>
      )}
      {right && (
        <div
          className="absolute top-0 origin-left"
          style={{ left: w, width: h, height: d, background: right, transform: "rotateY(-90deg)" }}
        />
      )}
    </div>
  );
}

// A flat patch just above the floor (rugs, mats).
function Patch({ x, y, w, d, c }: { x: number; y: number; w: number; d: number; c: string }) {
  return (
    <div
      className="pointer-events-none absolute"
      style={{ left: x, top: y, width: w, height: d, background: c, transform: "translateZ(1px)" }}
    />
  );
}

/* ── Scene ───────────────────────────────────────────────────────────── */

export function Stage({ tab, setTab }: { tab: TabId; setTab: (t: TabId) => void }) {
  return (
    <section aria-label="Interactive studio" className="shell pb-2">
      <div className="relative h-[640px] overflow-hidden rounded-2xl border-[1.5px] border-ink bg-stage max-[1100px]:h-[540px] max-[760px]:h-[420px] max-[480px]:h-[320px]">
        <span className="absolute right-5 bottom-4 left-5 z-[2] text-right font-mono text-[11px] tracking-[0.08em] text-muted-ink uppercase">
          <span className="max-[480px]:hidden">Click a room to walk · drag furniture to rearrange</span>
          <span className="hidden max-[480px]:inline">Tap a room · drag furniture</span>
        </span>

        <div className="iso absolute top-[57%] left-1/2 size-0 max-[1100px]:scale-80 max-[760px]:scale-60 max-[480px]:scale-[0.44]">
          <div
            style={{ ...p3d, left: -320, top: -320, width: 640, height: 640, transform: "rotateX(60deg) rotateZ(45deg)" }}
          >
            {tabs.map((t) => {
              const r = rooms[t.id];
              const on = t.id === tab;
              return (
                <button
                  key={t.id}
                  aria-label={`Walk to the ${t.room.toLowerCase()} (${t.label})`}
                  onClick={() => setTab(t.id)}
                  className="absolute m-0 border-0 p-0"
                  style={{
                    left: r.rect[0],
                    top: r.rect[1],
                    width: 320,
                    height: 320,
                    background: r.floor,
                    boxShadow: on ? `inset 0 0 0 4px ${STAMP}` : "inset 0 0 0 1px rgba(26,26,23,0.16)",
                  }}
                />
              );
            })}

            {tabs.map((t) => {
              const [l, top] = rooms[t.id].decal;
              return (
                <div
                  key={t.id}
                  aria-hidden="true"
                  className="pointer-events-none absolute text-[34px] font-bold whitespace-nowrap uppercase"
                  style={{ left: l, top, color: t.id === tab ? STAMP : "rgba(26,26,23,0.26)", transform: "translateZ(1px)" }}
                >
                  {t.no} {t.room}
                </div>
              );
            })}

            <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
              {/* floor slab edges */}
              <div className="absolute top-[640px] left-0 h-[22px] w-[640px] origin-top bg-[#BDB29A] [transform:rotateX(-90deg)]" />
              <div className="absolute top-0 left-[640px] h-[640px] w-[22px] origin-left bg-[#A89D86] [transform:rotateY(90deg)]" />

              {/* back wall: terminal poster + pegboard */}
              <div className="absolute top-0 left-0 h-[150px] w-[640px] origin-top bg-[#D9D0BC] [transform:translateZ(150px)_rotateX(-90deg)]">
                <div className="absolute top-[22px] left-[74px] flex h-[68px] w-[116px] flex-col gap-1.5 bg-ink p-2.5 font-mono text-xs text-paper">
                  <span>$ go run .</span>
                  <span className="text-stamp">{"// ok 200"}</span>
                </div>
                <div className="absolute top-5 left-[398px] h-[74px] w-[186px] bg-[#C7B48B] bg-[radial-gradient(rgba(26,26,23,0.35)_1.2px,transparent_1.6px)] bg-size-[12px_12px]">
                  <div className="absolute top-3.5 left-[18px] h-11 w-2.5 bg-ink" />
                  <div className="absolute top-3.5 left-11 h-[22px] w-[34px] border-3 border-stamp" />
                  <div className="absolute top-5 left-[98px] h-2 w-[60px] bg-[#4A78C2]" />
                  <div className="absolute top-[38px] left-[98px] h-2 w-10 bg-[#E2B23C]" />
                </div>
              </div>

              {/* side wall: whiteboard + window */}
              <div className="absolute top-0 left-0 h-[640px] w-[150px] origin-left bg-[#CFC5AE] [transform:translateZ(150px)_rotateY(90deg)]">
                <div className="absolute top-[70px] left-[30px] h-[150px] w-[72px] border-4 border-[#B5AE9E] bg-[#F7F6F1]">
                  <div className="absolute top-3.5 left-3 h-[26px] w-[22px] border-2 border-ink" />
                  <div className="absolute top-[92px] left-3 h-[26px] w-[22px] border-2 border-stamp" />
                  <div className="absolute top-[42px] left-[22px] h-12 w-0.5 bg-ink" />
                </div>
                <div className="absolute top-[392px] left-6 h-[130px] w-[74px] border-6 border-[#F2EFE7] bg-[#B9CED4]">
                  <div className="absolute top-14 left-0 h-1 w-full bg-[#F2EFE7]" />
                </div>
              </div>

              <Patch x={100} y={392} w={150} d={170} c="#CDB6A2" />
              <Patch x={560} y={586} w={66} d={40} c="#8F3120" />

              {pieces.map((p) => (
                <div key={p.id} className="absolute inset-0 [&>*]:pointer-events-auto" style={{ transformStyle: "preserve-3d" }}>
                  {p.boxes.map((b, i) => (
                    <Box key={i} {...b} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
