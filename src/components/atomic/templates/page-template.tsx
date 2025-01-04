import { ReactNode } from "react";

type PageTemplateProps = {
  children: ReactNode;
};

export default function PageTemplate(props: PageTemplateProps) {
  return (
    <main
      itemScope
      itemType="https://schema.org/CreativeWork"
      className="my-8 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
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
