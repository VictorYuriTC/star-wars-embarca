import Link from "next/link";

type PreviousAndNextPagesRowProps = {
  previousPage: string | undefined;
  currentPage: string;
  nextPage: string | undefined;
};

export default function PreviousAndNextPagesRow(
  props: PreviousAndNextPagesRowProps
) {
  return (
    <div className="flex flex-row justify-center items-center gap-x-8">
      {props.previousPage && <LinkToDifferentPage page={props.previousPage} />}

      {props.currentPage && (
        <LinkToDifferentPage isCurrentPage page={props.currentPage} />
      )}

      {props.nextPage && <LinkToDifferentPage page={props.nextPage} />}
    </div>
  );
}

type LinkToDifferentPageProps = {
  page: string | undefined;
  isCurrentPage?: boolean;
};

function LinkToDifferentPage(props: LinkToDifferentPageProps) {
  if (!props.page) {
    return <></>;
  }

  const currentPageLinkClassName = "bg-transparent hover:bg-transparent";

  const currentPageSpanClassName = "text-white";

  const linkWrapperClassName = `flex flex-row items-center justify-center rounded-full p-3 ${
    props.isCurrentPage
      ? currentPageLinkClassName
      : "bg-white hover:bg-gray-300"
  }`;

  const innerSpanClassName = `text-xl ${
    props.isCurrentPage ? currentPageSpanClassName : "text-black"
  }`;

  if (props.isCurrentPage) {
    return (
      <div className={linkWrapperClassName}>
        <span className={innerSpanClassName}>{props.page}</span>
      </div>
    );
  }

  return (
    <Link
      className={linkWrapperClassName}
      href={`characters?page=${props.page}`}>
      <span className={innerSpanClassName}>{props.page}</span>
    </Link>
  );
}
