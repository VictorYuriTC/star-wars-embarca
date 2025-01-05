"use client";

import PageTemplate from "@/components/atomic/templates/page-template";
import { useAppDispatch } from "@/redux/hooks";
import {
  setIsBackgroundMusicEnabled,
  setHasUserStartedTheJourney,
} from "@/redux/slices/user-preferences";
import { useRouter } from "next/navigation";

export default function HomePage() {
  return (
    <PageTemplate shouldHideDefaultMarginY>
      <div className="min-h-screen flex flex-col items-center justify-center gap-y-10">
        <HomePageTitle />

        <HomePageDescription />

        <HomePageStartJouneyButton />
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

function HomePageStartJouneyButton() {
  const dispatch = useAppDispatch();

  const router = useRouter();

  async function handleOnClickSetHasUserStartedTheJourney() {
    dispatch(setHasUserStartedTheJourney(true));
    dispatch(setIsBackgroundMusicEnabled(true));

    router.push("/characters");
  }

  return (
    <button
      onClick={handleOnClickSetHasUserStartedTheJourney}
      className="rounded-full py-2 px-6 bg-white hover:bg-gray-300">
      <span className="text-black text-lg font-medium">Start Journey</span>
    </button>
  );
}
