import { ReactNode } from "react";

type PageTemplateProps = {
  children: ReactNode;
};

export default function PageTemplate(props: PageTemplateProps) {
  return (
    <main className="my-8 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
      {props.children}
    </main>
  );
}
