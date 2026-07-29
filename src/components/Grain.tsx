/**
 * Full-page film grain plus a soft vignette. Pure CSS/SVG, fixed and
 * non-interactive, so it costs nothing on scroll.
 */
export const Grain = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 z-50">
    <div
      className="absolute inset-0 opacity-[0.045] mix-blend-screen"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, transparent 45%, rgba(8,8,10,0.55) 100%)",
      }}
    />
  </div>
);
