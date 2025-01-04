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

  const currentPageLinkClassName = "bg-transparent hover:bg-opacity-100";

  const currentPageSpanClassName = "text-white";

  const linkWrapperClassName = `flex flex-row items-center justify-center bg-white rounded-full p-3 hover:bg-opacity-80 ${
    props.isCurrentPage && currentPageLinkClassName
  }`;

  const innerSpanClassName = `text-xl text-black ${
    props.isCurrentPage && currentPageSpanClassName
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
