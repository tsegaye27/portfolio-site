import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tsegaye-talegngeta.vercel.app/",
      lastModified: new Date().toISOString(),
    },
  ];
}
