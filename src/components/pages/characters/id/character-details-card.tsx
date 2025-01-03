import { StarWarsCharacter, StarWarsCharacterGender } from "@/app/types";
import {
  getCapitalizedString,
  getFormattedCharacterBodyColor,
} from "@/utils/strings";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faBirthdayCake,
  faEye,
  faFemale,
  faGenderless,
  faHandDots,
  faHatWizard,
  faMale,
  faRuler,
  faWeightHanging,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CharacterDetailsCardProps = {
  character: StarWarsCharacter;
};

export default function CharacterDetailsCard(props: CharacterDetailsCardProps) {
  return (
    <section className="flex flex-col gap-y-4 mt-10">
      <CharacterGenderCard gender={props.character.gender} />

      <CharacterBirthYear birthYear={props.character.birth_year} />

      <CharacterMass mass={props.character.mass} />

      <CharacterHeight height={props.character.height} />

      <CharacterSkinColor skinColor={props.character.skin_color} />

      <CharacterEyeColor eyeColor={props.character.eye_color} />

      <CharacterHairColor hairColor={props.character.hair_color} />
    </section>
  );
}

type CharacterDetailCardProps = {
  label: string;
  value?: string;
  icon: IconDefinition;
};

function CharacterDetailCard(props: CharacterDetailCardProps) {
  return (
    <div className="flex flex-row items-center gap-3">
      <FontAwesomeIcon
        icon={props.icon}
        style={{ color: "white" }}></FontAwesomeIcon>

      <p className="text-lg font-base text-white">{props.value}</p>
    </div>
  );
}

const POSSIBLE_GENDER_ICONS_MAP: Record<
  StarWarsCharacterGender,
  IconDefinition
> = {
  male: faMale,
  female: faFemale,
  "n/a": faGenderless,
};

type CharacterGenderCardProps = {
  gender: StarWarsCharacterGender;
};

function CharacterGenderCard(props: CharacterGenderCardProps) {
  const renderedGender =
    props.gender === "n/a"
      ? "No gender"
      : !props.gender
      ? "Unknown"
      : props.gender;

  if (!Object.keys(POSSIBLE_GENDER_ICONS_MAP).includes(props.gender)) {
    return <></>;
  }

  const cardValue = getCapitalizedString(renderedGender);

  return (
    <CharacterDetailCard
      value={cardValue}
      label="Gender"
      icon={POSSIBLE_GENDER_ICONS_MAP[props.gender]}
    />
  );
}

type CharacterBirthYearProps = {
  birthYear: string;
};

function CharacterBirthYear(props: CharacterBirthYearProps) {
  return (
    <CharacterDetailCard
      value={props.birthYear}
      label="Birth Year"
      icon={faBirthdayCake}
    />
  );
}

type CharacterMassProps = {
  mass: string;
};

function CharacterMass(props: CharacterMassProps) {
  return (
    <CharacterDetailCard
      value={`${props.mass} kg`}
      label="Birth Year"
      icon={faWeightHanging}
    />
  );
}

type CharacterHeightProps = {
  height: string;
};

function CharacterHeight(props: CharacterHeightProps) {
  return (
    <CharacterDetailCard
      value={`${props.height} cm`}
      label="Height"
      icon={faRuler}
    />
  );
}

type CharacterSkinColorProps = {
  skinColor: string;
};

function CharacterSkinColor(props: CharacterSkinColorProps) {
  const formattedSkinColor = getFormattedCharacterBodyColor(
    getCapitalizedString(props.skinColor)
  );

  return (
    <CharacterDetailCard
      value={`${formattedSkinColor} skin`}
      label="Skin color"
      icon={faHandDots}
    />
  );
}

type CharacterEyeColorProps = {
  eyeColor: string;
};

function CharacterEyeColor(props: CharacterEyeColorProps) {
  const formattedEyeColor = getFormattedCharacterBodyColor(
    getCapitalizedString(props.eyeColor)
  );

  return (
    <CharacterDetailCard
      value={`${formattedEyeColor} eyes`}
      label="Eye color"
      icon={faEye}
    />
  );
}

type CharacterHairColorProps = {
  hairColor: string;
};

function CharacterHairColor(props: CharacterHairColorProps) {
  const formattedHairColor = getFormattedCharacterBodyColor(
    getCapitalizedString(props.hairColor)
  );

  return (
    <CharacterDetailCard
      value={`${formattedHairColor} hair`}
      label="Hair color"
      icon={faHatWizard}
    />
  );
}
