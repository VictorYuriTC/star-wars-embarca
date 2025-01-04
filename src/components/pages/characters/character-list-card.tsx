"use client";

import { useAppSelector } from "@/redux/hooks";
import { StarWarsCharacter } from "@/types";
import Link from "next/link";
import { useRef, useState } from "react";

type CharacterListCardProps = {
  character: StarWarsCharacter;
};

export default function CharacterListCard(props: CharacterListCardProps) {
  const [isAudioBeingPlayed, setIsAudioBeingPlayed] = useState(false);

  const isBackgroundMusicEnabled = useAppSelector(
    (state) => state.userPreferences.isBackgroundMusicEnabled
  );

  const audioRef = useRef<HTMLAudioElement>(null);

  function playSoundEffect() {
    if (audioRef.current) {
      setIsAudioBeingPlayed(true);
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  }

  function handleOnMouseEnterCard() {
    try {
      if (!isBackgroundMusicEnabled) {
        return;
      }

      if (isAudioBeingPlayed) {
        return;
      }

      playSoundEffect();

      setTimeout(() => {
        setIsAudioBeingPlayed(false);
      }, 1000);
    } catch (e) {
      console.log("Failed to play audio.", e);
    }
  }

  const characterId = Number(props.character.url.split("/").at(-2)) ?? "";

  const lightsaberFile =
    characterId % 3 === 0 ? "1" : characterId % 2 === 1 ? "2" : "3";

  return (
    <Link
      onMouseEnter={handleOnMouseEnterCard}
      href={`/characters/${characterId}`}
      className="relative py-5 px-8 border border-white transition-all duration-500 rounded-3xl border-opacity-60 hover:border-opacity-70 hover:border-star-wars-yellow hover:shadow-md hover:shadow-star-wars-yellow">
      <audio ref={audioRef} src={`/lightsaber-${lightsaberFile}.mp3`} />

      <p className="text-xl text-white">{props.character.name}</p>
    </Link>
  );
}
