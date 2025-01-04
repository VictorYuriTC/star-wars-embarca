import { StarWarsCharacter, StarWarsCharacterGender } from "@/types";
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
    <article
      itemScope
      itemProp="character"
      itemType="https://schema.org/Person">
      <CharacterDetailsHeader character={props.character} />

      <CharacterDetailsBody character={props.character} />
    </article>
  );
}

type CharacterDetailsHeaderProps = {
  character: StarWarsCharacter;
};

function CharacterDetailsHeader(props: CharacterDetailsHeaderProps) {
  return (
    <header className="flex flex-row items-center gap-4 pb-6 border-b border-gray-800">
      <CharacterIdCard id={props.character.url.split("/").at(-2)} />
      <CharacterNameCard name={props.character.name} />
    </header>
  );
}

type CharacterDetailsBodyProps = {
  character: StarWarsCharacter;
};

function CharacterDetailsBody(props: CharacterDetailsBodyProps) {
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

type CharacterIdCardProps = {
  id?: string;
};

function CharacterIdCard(props: CharacterIdCardProps) {
  return (
    <div className="flex flex-row items-center justify-center rounded-full py-3 px-3 bg-white">
      <span className="text-xl text-black">{props.id ?? "Unknown"}</span>
    </div>
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
        className="text-white"></FontAwesomeIcon>

      <p className="text-lg font-base text-white">
        {getCapitalizedString(props.value)}
      </p>
    </div>
  );
}

type CharacterNameCardProps = {
  name: string;
};

function CharacterNameCard(props: CharacterNameCardProps) {
  const givenName = props.name.split(" ")?.[0];
  const familyName = props.name.split(" ")?.slice(1).join(" ");
  const UNKNOWN_NAME = "Unknown";

  return (
    <>
      <meta itemProp="givenName" content={givenName} />
      <meta itemProp="familyName" content={familyName} />

      <h1 className="font-bold text-white text-3xl text-center">
        {props.name ?? UNKNOWN_NAME}
      </h1>
    </>
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
    props.gender === "n/a" || !props.gender ? "No gender" : props.gender;

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
  const formattedBirthYear =
    props.birthYear === "unknown" ? "Unknown birth year" : props.birthYear;

  return (
    <CharacterDetailCard
      value={formattedBirthYear}
      label="Birth Year"
      icon={faBirthdayCake}
    />
  );
}

type CharacterMassProps = {
  mass: string;
};

function CharacterMass(props: CharacterMassProps) {
  const formattedWeight =
    props.mass === "unknown" ? "Unknown weight" : `${props.mass} kg`;

  return (
    <CharacterDetailCard
      value={formattedWeight}
      label="Birth Year"
      icon={faWeightHanging}
    />
  );
}

type CharacterHeightProps = {
  height: string;
};

function CharacterHeight(props: CharacterHeightProps) {
  const formattedHeight =
    props.height === "none" ? "Unknown height" : `${props.height} cm`;

  return (
    <CharacterDetailCard
      value={formattedHeight}
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
