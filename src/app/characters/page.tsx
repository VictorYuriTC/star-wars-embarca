import PageTemplate from "@/components/atomic/templates/page-template";
import { STAR_WARS_CHARACTERS_URL } from "@/constants/urls";
import { notFound } from "next/navigation";
import { StarWarsCharactersListResponse } from "@/types/star-wars-characters-list-response";
import CharacterListCard from "@/components/pages/characters/character-list-card";
import PreviousAndNextPagesRow from "@/components/atomic/molecules/previous-and-next-pages-row";

type CharactersListPageProps = {
  searchParams: Promise<{
    page: number;
  }>;
};

export default async function CharactersListPage(
  props: CharactersListPageProps
) {
  const { page = 1 } = await props.searchParams;

  const res = await fetch(`${STAR_WARS_CHARACTERS_URL}/?page=${page}`);

  if (!res.ok) {
    notFound();
  }

  function getDifferentPage(differentPageFullUrl: string | null) {
    return differentPageFullUrl?.split("?").at(-1)?.replaceAll("page=", "");
  }

  const charactersListResponse: StarWarsCharactersListResponse =
    await res.json();

  const previousPage = getDifferentPage(charactersListResponse.previous);

  const nextPage = getDifferentPage(charactersListResponse.next);

  return (
    <PageTemplate>
      <h1 className="text-3xl text-white font-bold">Star Wars Characters</h1>

      <p className="mt-8 text-white">
        <span className="font-black">{charactersListResponse.count}</span>{" "}
        characters found.
      </p>

      <section className="mt-4 flex flex-col gap-y-5 mb-10">
        {charactersListResponse.results.map((character) => (
          <CharacterListCard
            character={character}
            key={`character_name=${character.name}-character_birth_year=${character.birth_year}`}
          />
        ))}
      </section>

      <PreviousAndNextPagesRow
        currentPage={page.toString()}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </PageTemplate>
  );
}
