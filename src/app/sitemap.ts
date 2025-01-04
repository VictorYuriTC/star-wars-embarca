import {
  EMBARCA_STAR_WARS_URL,
  STAR_WARS_CHARACTERS_URL,
} from "@/constants/urls";
import { StarWarsCharactersListResponse } from "@/types/star-wars-characters-list-response";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const res = await fetch(STAR_WARS_CHARACTERS_URL);

  if (!res.ok) {
    return [];
  }

  const starWarsCharactersListResponse: StarWarsCharactersListResponse =
    await res.json();

  const allCharactersRoutes: MetadataRoute.Sitemap = Array.from(
    {
      length: starWarsCharactersListResponse.count,
    },

    (_, index) => ({
      url: `${EMBARCA_STAR_WARS_URL}/characters/${index + 1}`,
      priority: 1,
      changeFrequency: "monthly",
    })
  );

  return allCharactersRoutes;
}
