import { ReactNode } from "react";

type PageTemplateProps = {
  children: ReactNode;
  shouldHideDefaultMarginY?: boolean;
};

export default function PageTemplate(props: PageTemplateProps) {
  const DEFAULT_MARGIN_Y = "my-24";

  const marginY = props.shouldHideDefaultMarginY ? "" : DEFAULT_MARGIN_Y;

  return (
    <main
      itemScope
      itemType="https://schema.org/CreativeWork"
      className={`mx-4 sm:mx-16 md:mx-24 lg:mx-32 xl:mx-48 ${marginY}`}>
      <meta itemProp="name" content="Embarca Wars" />
      <meta itemProp="sameAs" content="Star Wars" />
      <meta itemProp="alternateName" content="Embarca Ai" />

      <section itemScope itemProp="author" itemType="https://schema.org/Person">
        <meta itemProp="givenName" content="George" />
        <meta itemProp="familyName" content="Lucas" />

        <section
          itemScope
          itemProp="nationality"
          itemType="https://schema.org/Country">
          <meta itemProp="name" content="United States" />
          <meta
            itemProp="logo"
            content="https://en.wikipedia.org/wiki/File:Flag_of_the_United_States.svg"
          />
        </section>
      </section>

      {props.children}
    </main>
  );
}
