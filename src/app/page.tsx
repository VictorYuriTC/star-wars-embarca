"use client";

import PageTemplate from "@/components/atomic/templates/page-template";
import AllHomePageLightsabers from "@/components/pages/all-home-page-lightsabers";
import { useAppDispatch } from "@/redux/hooks";
import {
  setIsBackgroundMusicEnabled,
  setHasUserStartedTheJourney,
} from "@/redux/slices/user-preferences";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useRef, useState } from "react";

export default function HomePage() {
  const [
    shouldShowAllBlurredRoundedLights,
    setShouldShowAllBlurredRoundedLights,
  ] = useState(false);
  const [shouldShowRedLightsaber, setShouldShowRedLightsaber] = useState(false);
  const [shouldShowGreenLightsaber, setShouldShowGreenLightsaber] =
    useState(false);

  return (
    <PageTemplate shouldHideDefaultMarginY>
      <div className="min-h-screen flex flex-col items-center justify-center gap-y-10">
        <AllHomePageLightsabers
          shouldShowAllBlurredRoundedLights={shouldShowAllBlurredRoundedLights}
          shouldShowGreenLightsaber={shouldShowGreenLightsaber}
          shouldShowRedLightsaber={shouldShowRedLightsaber}
        />

        <HomePageTitle />

        <HomePageDescription />

        <HomePageStartJouneyButton
          setShouldShowAllBlurredRoundedLights={
            setShouldShowAllBlurredRoundedLights
          }
          setShouldShowGreenLightsaber={setShouldShowGreenLightsaber}
          setShouldShowRedLightsaber={setShouldShowRedLightsaber}
        />
      </div>
    </PageTemplate>
  );
}

function HomePageTitle() {
  return (
    <h1 className="text-white text-3xl">
      Welcome to <span className="font-bold">Embarca</span>
      <span className="font-bold text-star-wars-yellow">Wars</span>
    </h1>
  );
}

function HomePageDescription() {
  return (
    <p className="text-center w-full lg:w-[85%] xl:w-[65%] text-white">
      Click on <span className="font-bold">Start Journey</span> to enable music,
      SFX, and enjoy this experience!
    </p>
  );
}

type HomePageStartJouneyButtonProps = {
  setShouldShowAllBlurredRoundedLights: Dispatch<SetStateAction<boolean>>;
  setShouldShowRedLightsaber: Dispatch<SetStateAction<boolean>>;
  setShouldShowGreenLightsaber: Dispatch<SetStateAction<boolean>>;
};

function HomePageStartJouneyButton(props: HomePageStartJouneyButtonProps) {
  const greenLightsaberAudioRef = useRef<HTMLAudioElement>(null);
  const redLightsaberAudioRef = useRef<HTMLAudioElement>(null);
  const journeyHasStartedAudioRef = useRef<HTMLAudioElement>(null);

  const dispatch = useAppDispatch();

  const router = useRouter();

  async function handleOnClickSetHasUserStartedTheJourney() {
    props.setShouldShowGreenLightsaber(true);

    if (greenLightsaberAudioRef.current) {
      greenLightsaberAudioRef.current.play();
    }

    setTimeout(() => {
      props.setShouldShowRedLightsaber(true);

      if (redLightsaberAudioRef.current) {
        redLightsaberAudioRef.current.play();
      }
    }, 750);

    setTimeout(() => {
      props.setShouldShowAllBlurredRoundedLights(true);

      if (journeyHasStartedAudioRef.current) {
        journeyHasStartedAudioRef.current?.play();
      }
    }, 1500);

    setTimeout(() => {
      dispatch(setHasUserStartedTheJourney(true));
      dispatch(setIsBackgroundMusicEnabled(true));

      router.push("/characters");
    }, 2500);
  }

  return (
    <button
      onClick={handleOnClickSetHasUserStartedTheJourney}
      className="rounded-full py-2 px-6 bg-white hover:bg-gray-300">
      <span className="text-black text-lg font-medium">Start Journey</span>

      <audio ref={greenLightsaberAudioRef} src={`/lightsaber-1.mp3`} />
      <audio ref={redLightsaberAudioRef} src={`/lightsaber-2.mp3`} />
      <audio ref={journeyHasStartedAudioRef} src={`/lightsaber-3.mp3`} />
    </button>
  );
}
