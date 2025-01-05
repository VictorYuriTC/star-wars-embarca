import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  config as fontAwesomeConfig,
  IconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import { SEO_EMBARCA_WARS_DESCRIPTION } from "@/constants/seo";
import StarWarsMainThemeAudioPlayer from "@/components/atomic/organisms/star-wars-main-theme-audio-player";
import StoreProvider from "@/redux/store-provider";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
fontAwesomeConfig.autoAddCss = false;

const pollerOne = Orbitron({
  weight: ["400", "500", "600", "700", "800", "900"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Embarca Wars",
  description: SEO_EMBARCA_WARS_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={`bg-black ${pollerOne.className} antialiased`}>
          <AppHeaderNavbar />

          <div className="mt-32">{children}</div>
        </body>
      </html>
    </StoreProvider>
  );
}

function AppHeaderNavbar() {
  return (
    <header className="z-[1000] fixed left-0 top-0  right-0 bg-gray-950 border-b shadow shadow-gray-900 border-gray-900 flex flex-row items-center justify-between px-12">
      <div className="flex flex-row items-center gap-x-10">
        <EmbarcaWarsLogoAndName />
      </div>

      <div className="flex flex-row items-center gap-x-4">
        <HeaderNavbarLink href="/characters" icon={faUser} label="Characters" />

        <StarWarsMainThemeAudioPlayer />
      </div>
    </header>
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
