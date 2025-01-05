import { EMBARCA_STAR_WARS_URL } from "@/constants/urls";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
    },

    sitemap: `${EMBARCA_STAR_WARS_URL}/sitemap.xml`,
  };
}
