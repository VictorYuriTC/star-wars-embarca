import { SEO_EMBARCA_WARS_DESCRIPTION } from "@/constants/seo";
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    description: SEO_EMBARCA_WARS_DESCRIPTION,
    display: "browser",
    lang: "en-US",
    name: "Embarca Wars | Renting spacial buses",
    orientation: "any",
    start_url: "/",
  };
}
