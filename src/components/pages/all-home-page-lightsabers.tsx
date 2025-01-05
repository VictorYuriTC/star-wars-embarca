type AllHomePageLightsabersProps = {
  shouldShowAllBlurredRoundedLights: boolean;
  shouldShowRedLightsaber: boolean;
  shouldShowGreenLightsaber: boolean;
};

export default function AllHomePageLightsabers(
  props: AllHomePageLightsabersProps
) {
  return (
    <div>
      <AllBlurredRoundedLights
        shouldShowAllBlurredRoundedLights={
          props.shouldShowAllBlurredRoundedLights
        }
      />

      <RedLightsaber shouldShowRedLightsaber={props.shouldShowRedLightsaber} />

      <GreenLightsaber
        shouldShowGreenLightsaber={props.shouldShowGreenLightsaber}
      />
    </div>
  );
}

type AllBlurredRoundedLightsProps = {
  shouldShowAllBlurredRoundedLights: boolean;
};

function AllBlurredRoundedLights(props: AllBlurredRoundedLightsProps) {
  const visibilityClassName = props.shouldShowAllBlurredRoundedLights
    ? "visible"
    : "invisible";

  return (
    <div className={visibilityClassName}>
      <BlurredRoundedLight
        color="yellow"
        hasBrightness
        className="translate-x-24"
      />

      <BlurredRoundedLight
        color="yellow"
        className="-translate-y-16 -translate-x-24"
      />

      <BlurredRoundedLight
        color="yellow"
        className="translate-y-24 -translate-x-24"
      />

      <BlurredRoundedLight
        color="yellow"
        hasBrightness
        className="translate-y-52 -translate-x-16"
      />

      <BlurredRoundedLight color="yellow" className="-translate-y-40" />

      <BlurredRoundedLight
        color="yellow"
        className="-translate-x-48 translate-y-48"
      />

      <BlurredRoundedLight color="yellow" className="-translate-x-60" />

      <BlurredRoundedLight
        color="yellow"
        hasBrightness
        className="translate-x-24 translate-y-40"
      />
    </div>
  );
}

type GreenLightsaberProps = {
  shouldShowGreenLightsaber: boolean;
};

function GreenLightsaber(props: GreenLightsaberProps) {
  const visibilityClassName = props.shouldShowGreenLightsaber
    ? "visible"
    : "invisible";

  return (
    <div
      className={`rotate-[30deg] -translate-x-[360px] ${visibilityClassName}`}>
      <BlurredRoundedLight color="green" className="-translate-y-40" />

      <BlurredRoundedLight color="green" className="-translate-y-20" />

      <BlurredRoundedLight color="green" className="" />

      <BlurredRoundedLight color="green" className="translate-y-20" />

      <BlurredRoundedLight color="green" className="translate-y-40" />

      <BlurredRoundedLight color="white" className="translate-y-56" />

      <BlurredRoundedLight color="white" className="translate-y-72" />

      <BlurredRoundedLight color="white" className="translate-y-96" />
    </div>
  );
}

type RedLightsaberProps = {
  shouldShowRedLightsaber: boolean;
};

function RedLightsaber(props: RedLightsaberProps) {
  const visibilityClassName = props.shouldShowRedLightsaber
    ? "visible"
    : "invisible";

  return (
    <div
      className={`rotate-[-30deg] translate-x-[360px] ${visibilityClassName}`}>
      <BlurredRoundedLight color="red" className="-translate-y-40" />

      <BlurredRoundedLight color="red" className="-translate-y-20" />

      <BlurredRoundedLight color="red" className="" />

      <BlurredRoundedLight color="red" className="translate-y-20" />

      <BlurredRoundedLight color="red" className="translate-y-40" />

      <BlurredRoundedLight color="white" className="translate-y-56" />

      <BlurredRoundedLight color="white" className="translate-y-72" />

      <BlurredRoundedLight color="white" className="translate-y-96" />
    </div>
  );
}

type ShadowColorType = "red" | "green" | "yellow" | "white";

type BlurredRoundedLightProps = {
  className?: string;
  hasBrightness?: boolean;
  color: ShadowColorType;
};

function BlurredRoundedLight(props: BlurredRoundedLightProps) {
  const brightnessClassName = props.hasBrightness ? "brightness-200" : "";

  const ALL_SHADOW_COLOR_CLASSNAMES: Record<ShadowColorType, string> = {
    yellow: "shadow-[0px_0px_1000px_25px_rgb(246,228,30,1)]",
    red: "shadow-[0px_0px_1000px_25px_rgb(152,40,42,1)]",
    green: "shadow-[0px_0px_1000px_25px_rgb(0,190,111,1)]",
    white: "shadow-[0px_0px_1000px_25px_rgb(255,255,255,1)]",
  };

  const shadowColor = ALL_SHADOW_COLOR_CLASSNAMES[props.color];

  return (
    <div
      className={`absolute ${shadowColor} ${brightnessClassName} ${props.className}`}
    />
  );
}
