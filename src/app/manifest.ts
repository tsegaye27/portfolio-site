import type { MetadataRoute } from "next";

import { profile } from "@/lib/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.name,
    short_name: "Tsegaye",
    description: profile.intro,
    start_url: "/",
    display: "standalone",
    background_color: "#efece4",
    theme_color: "#efece4",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
