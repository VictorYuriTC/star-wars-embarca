import { StarWarsCharacter } from "@/app/types";
import PageTemplate from "@/components/atomic/templates/page-template";
import CharacterDetailsCard from "@/components/pages/characters/id/character-details-card";
import { STAR_WARS_CHARACTERS_URL } from "@/constants/urls";
import { notFound } from "next/navigation";

type CharacterDetailsPageProps = {
  params: {
    id: number;
  };
};

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

  return (
    <PageTemplate>
      <article>
        <header className="flex flex-col items-center gap-y-1">
          <h1 className="font-bold text-white text-3xl text-center">
            {starWarsCharacter.name ?? "Unknown"}
          </h1>
        </header>

        <CharacterDetailsCard character={starWarsCharacter} />
      </article>
    </PageTemplate>
  );
}
