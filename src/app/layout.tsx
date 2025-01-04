import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
import { SEO_EMBARCA_WARS_DESCRIPTION } from "@/constants/seo";
import StarWarsMainThemeAudioPlayer from "@/components/atomic/organisms/star-wars-main-theme-audio-player";
import StoreProvider from "@/redux/store-provider";
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
          <StarWarsMainThemeAudioPlayer />
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
