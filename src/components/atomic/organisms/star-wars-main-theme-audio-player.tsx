"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { toggleIsBackgroundMusicEnabled } from "@/redux/slices/user-preferences";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

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

  useEffect(() => {
    if (isBackgroundMusicEnabled) {
      audioRef.current?.play();

      return;
    }

    audioRef.current?.pause();
  }, [isBackgroundMusicEnabled]);

  return (
    <div className="z-40 p-4">
      <button
        onClick={togglePlayPause}
        className="flex flex-row items-center gap-x-3 bg-gray-950 px-4 py-2 rounded-full hover:bg-gray-800">
        <FontAwesomeIcon
          className="text-white text-opacity-70 group-hover:text-opacity-100"
          icon={isBackgroundMusicEnabled ? faPause : faPlay}
        />

        <span className="text-sm text-white text-opacity-70 group-hover:text-opacity-100">
          Sound Effects
        </span>
      </button>

      <audio ref={audioRef} src="/star-wars-main-theme.mp3" loop />
    </div>
  );
}
