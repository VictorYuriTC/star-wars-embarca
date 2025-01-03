import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core";
fontAwesomeConfig.autoAddCss = false;

const pollerOne = Orbitron({
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Star Wars Embarca",
  description: "Project developed for Embarca's recruitment process",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black ${pollerOne.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
