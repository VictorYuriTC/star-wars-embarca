import { StarWarsCharacter } from "@/app/types";
import { notFound } from "next/navigation";

type CharacterDetailsPageProps = {
  params: {
    id: number;
  };
};

export default async function CharacterDetailsPage(
  props: CharacterDetailsPageProps
) {
  const res = await fetch(
    `https://swapi.py4e.com/api/people/${props.params?.id}`
  );

  if (!res.ok) {
    notFound();
  }

  const starWarsCharacter: StarWarsCharacter = await res.json();

  return (
    <div className="">
      <p className="text-black">{starWarsCharacter.name ?? "No name"}</p>
    </div>
  );
}
