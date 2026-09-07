import type { MetadataRoute } from "next";
import { empresa } from "@/content/empresa";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: empresa.site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
