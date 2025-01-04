"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleIsBackgroundMusicEnabled } from "@/redux/slices/user-preferences";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";

export default function StarWarsMainThemeAudioPlayer() {
  const isBackgroundMusicEnabled = useAppSelector(
    (state) => state.userPreferences.isBackgroundMusicEnabled
  );
  const dispatch = useAppDispatch();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  function playAudio() {
    try {
      audioRef.current?.play();

      dispatch(toggleIsBackgroundMusicEnabled());
    } catch (e) {
      console.log("Failed to play audio", e);
    }
  }

  function pauseAudio() {
    try {
      audioRef.current?.pause();

      dispatch(toggleIsBackgroundMusicEnabled());
    } catch (e) {
      console.log("Failed to pause audio", e);
    }
  }

  function togglePlayPause() {
    if (!audioRef.current) return;

    if (isBackgroundMusicEnabled) {
      pauseAudio();

      return;
    }

    playAudio();
  }

  return (
    <div className="z-40 fixed top-0 right-0 p-4">
      <button
        onClick={togglePlayPause}
        className="flex flex-row items-center gap-x-3 bg-white px-4 py-2 rounded-full hover:bg-opacity-85">
        <FontAwesomeIcon
          className="text-black"
          icon={isBackgroundMusicEnabled ? faPause : faPlay}
        />

        <span className="text-sm">Sound Effects</span>
      </button>

      <audio ref={audioRef} src="/star-wars-main-theme.mp3" loop />
    </div>
  );
}
