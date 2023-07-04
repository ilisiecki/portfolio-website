import Link from "@/components/icons/Link";

type Props = {
  title: string;
  description: string;
  tools: Array<string>;
  readMore: string;
  liveLink?: string;
  gitHubLink: string;
};

const Board = (props: Props) => {
  return (
    <div className="mt-8 flex flex-col items-center rounded-lg border border-main-text/20 shadow-2xl dark:bg-main-textDark/10 md:items-start xl:mx-12">
      <div className="my-4 text-center text-xl font-bold text-main-text dark:text-main-textDark md:pl-8 md:text-left md:text-2xl">
        {props.title}
        <a href={props.liveLink} target="_blank">
          <span className="text-base font-normal hover:text-main-primary">
            <br className="flex md:hidden" /> Live{" "}
            <Link className="inline-block h-4 w-4" />
          </span>
        </a>
        <a href={props.gitHubLink} target="_blank">
          <span className="text-base font-normal hover:text-main-primary">
            <br className="flex md:hidden" /> Github{" "}
            <Link className="inline-block h-4 w-4" />
          </span>
        </a>
      </div>
      <hr className="ml-0 flex h-0.5 w-36 rounded border-0 bg-main-secondary md:ml-8 md:w-72" />
      <div className="my-4 px-4 text-center text-main-text dark:text-main-textDark md:px-8 md:text-left">
        {props.description}
        <a
          href={props.gitHubLink}
          target="_blank"
          className="text-main-text/60 hover:text-main-primary dark:text-main-textDark/60 dark:hover:text-main-primary"
        >
          {props.readMore}
        </a>
      </div>
      <div className="mb-4 grid grid-cols-2 gap-4 md:ml-8 md:flex md:flex-row">
        {props.tools.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex cursor-default justify-center rounded bg-main-secondary/90 px-4 py-2 font-semibold text-main-text hover:bg-main-primary/80 dark:bg-main-secondary/70 dark:text-main-textDark dark:hover:bg-main-primary/80"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
