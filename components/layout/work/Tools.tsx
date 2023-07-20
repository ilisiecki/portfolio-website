"use client";

import { motion, Variants } from "framer-motion";

type Props = {
  tools: Array<string>;
};

const buttonsAnimationsVariants: Variants = {
  offscreen: {
    rotate: -15,
    scale: 0,
  },
  onscreen: {
    rotate: 0,
    scale: 1,
  },
};

const Tools = (props: Props) => {
  return (
    <div className="mb-4 grid grid-cols-2 gap-4 md:ml-8 md:flex md:flex-row">
      {props.tools.map((item, idx) => {
        const delayForButton = idx / 4;
        return (
          <motion.div
            variants={buttonsAnimationsVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            transition={{
              type: "spring",
              delay: delayForButton,
              damping: 5,
              mass: 0.75,
              stiffness: 100,
            }}
            key={idx}
            className="flex cursor-default justify-center rounded bg-main-secondary/90 px-4 py-2 font-semibold text-main-text transition-colors duration-500 hover:bg-main-primary/80 dark:bg-main-secondary/70 dark:text-main-textDark dark:hover:bg-main-primary/80"
          >
            {item}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Tools;
