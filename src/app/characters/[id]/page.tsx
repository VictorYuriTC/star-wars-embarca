import { StarWarsCharacter } from "@/app/types";
import PageTemplate from "@/components/atomic/templates/page-template";
import CharacterDetailsCard from "@/components/pages/characters/id/character-details-card";
import {
  SEO_EMBARCA_WARS_AUTHOR_NAME,
  SEO_EMBARCA_WARS_AUTHOR_WEBSITE,
} from "@/constants/seo";
import {
  EMBARCA_ICON,
  EMBARCA_STAR_WARS_URL,
  STAR_WARS_CHARACTERS_URL,
} from "@/constants/urls";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type CharacterDetailsPageProps = {
  params: {
    id: number;
  };
};

export async function generateMetadata(
  props: CharacterDetailsPageProps
): Promise<Metadata> {
  const { id: characterId } = await props.params;

  const res = await fetch(`${STAR_WARS_CHARACTERS_URL}/${characterId}`);

  const starWarsCharacter: StarWarsCharacter = await res.json();

  const metadataTitle = `Embarca Wars | ${starWarsCharacter.name}`;
  const metadataDescription = `${starWarsCharacter.name}, Star Wars' series character.`;
  const embarcaStarWarsLogoImg = {
    alt: `Embarca icon`,
    type: "image/png",
    href: `${EMBARCA_ICON}`,
    url: `${EMBARCA_ICON}`,
  };

  return {
    authors: [
      {
        name: SEO_EMBARCA_WARS_AUTHOR_NAME,
        url: SEO_EMBARCA_WARS_AUTHOR_WEBSITE,
      },
    ],
    creator: SEO_EMBARCA_WARS_AUTHOR_NAME,
    description: `${starWarsCharacter.name}, Star Wars' series character.`,
    icons: [embarcaStarWarsLogoImg],
    keywords: ["starwars", "embarca ai", "embarca wars"],
    manifest: `${EMBARCA_STAR_WARS_URL}/manifest.webmanifest`,
    openGraph: {
      authors: [SEO_EMBARCA_WARS_AUTHOR_NAME],
      countryName: "Brasil",
      description: metadataDescription,
      images: [embarcaStarWarsLogoImg],
      title: metadataTitle,
      type: "article",
    },
    title: metadataTitle,
    twitter: {
      description: metadataDescription,
      creator: SEO_EMBARCA_WARS_AUTHOR_NAME,
      title: metadataTitle,
      site: `${EMBARCA_STAR_WARS_URL}/characters/${characterId}`,
    },
  };
}

export default async function CharacterDetailsPage(
  props: CharacterDetailsPageProps
) {
  // VICTOR CAMARGO: Added due to console errors related to following docs: https://nextjs.org/docs/messages/sync-dynamic-apis
  const { id: characterId } = await props.params;

  const res = await fetch(`${STAR_WARS_CHARACTERS_URL}/${characterId}`);

  if (!res.ok) {
    notFound();
  }

  const starWarsCharacter: StarWarsCharacter = await res.json();

  console.log(starWarsCharacter);

  return (
    <PageTemplate>
      <CharacterDetailsCard character={starWarsCharacter} />
    </PageTemplate>
  );
}
