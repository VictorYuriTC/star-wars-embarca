"use client";

import Link from "next/link";
import StarWarsMainThemeAudioPlayer from "./star-wars-main-theme-audio-player";
import Image from "next/image";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from "next/navigation";

export default function AppHeaderNavbar() {
  const pathname = usePathname();

  const PATHNAMES_WITH_NO_NAVBAR = ["/"];

  const shouldRenderNavbar = !PATHNAMES_WITH_NO_NAVBAR.includes(pathname);

  if (!shouldRenderNavbar) {
    return <></>;
  }

  return (
    <div className="my-32">
      <header className="z-[1000] fixed left-0 top-0  right-0 bg-gray-950 border-b shadow shadow-gray-900 border-gray-900 flex flex-row items-center justify-between px-12 bg-opacity-[97.5%]">
        <div className="hidden md:flex flex-row items-center gap-x-10">
          <EmbarcaWarsLogoAndName />
        </div>

        <div className="w-full flex flex-row items-center justify-between sm:justify-around md:justify-end gap-x-4">
          <HeaderNavbarLink
            href="/characters"
            icon={faUser}
            label="Characters"
          />

          <StarWarsMainThemeAudioPlayer />
        </div>
      </header>
    </div>
  );
}

function EmbarcaWarsLogoAndName() {
  return (
    <Link href="/characters" className="flex flex-row items-center gap-x-2">
      <Image
        src="/embarca-icon-no-bg.png"
        width={48}
        height={48}
        alt="Embarca official logo"
      />

      <p className="font-bold">
        <span className="text-white">Embarca</span>
        <span className="text-star-wars-yellow">Wars</span>
      </p>
    </Link>
  );
}

type HeaderNavbarLinkProps = {
  href: string;
  icon: IconDefinition;
  label: string;
};

function HeaderNavbarLink(props: HeaderNavbarLinkProps) {
  return (
    <Link
      className="flex flex-row items-center gap-x-2 group"
      href={`${props.href}`}>
      <FontAwesomeIcon
        style={{
          width: 16,
          height: 16,
        }}
        icon={props.icon}
        className="text-white text-opacity-70 group-hover:text-opacity-100"
      />
      <span className="text-base text-white text-opacity-70 group-hover:text-opacity-100">
        {props.label}
      </span>
    </Link>
  );
}
