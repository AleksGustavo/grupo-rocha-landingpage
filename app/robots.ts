import type { MetadataRoute } from "next";
import { empresa } from "@/content/empresa";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${empresa.site.url}/sitemap.xml`,
  };
}
