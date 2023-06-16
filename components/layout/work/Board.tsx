import React from "react";

type Props = {
  title: string;
  description: string;
  tools: Array<string>;
};

const Board = (props: Props) => {
  return (
    <div className="mt-8 flex flex-col items-center rounded-lg border border-main-text/20 shadow-2xl dark:bg-main-textDark/10 md:h-80 md:items-start xl:mx-12">
      <div className="my-4 text-center text-xl font-bold text-main-text dark:text-main-textDark md:pl-8 md:text-left md:text-2xl">
        {props.title}
      </div>
      <hr className="ml-0 flex h-0.5 w-36 rounded border-0 bg-main-secondary md:ml-8 md:w-72" />
      <div className="my-4 px-4 text-center text-main-text dark:text-main-textDark md:px-8 md:text-left">
        {props.description}
      </div>
      <hr className="ml-0 flex h-0.5 w-36 rounded border-0 bg-main-secondary md:ml-8 md:w-72" />
      <div className="my-4 grid grid-cols-2 gap-4 md:ml-8 md:flex md:flex-row">
        {props.tools.map((item, idx) => {
          return (
            <div
              key={idx}
              className="mt-1 flex cursor-default justify-center rounded bg-main-secondary/90 px-4 py-2 font-semibold text-main-text hover:bg-main-primary/80 dark:bg-main-secondary/70 dark:text-main-textDark dark:hover:bg-main-primary/80"
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
