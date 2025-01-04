import { StarWarsCharacter } from "./star-wars-character";

export type StarWarsCharactersListResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: StarWarsCharacter[];
};
