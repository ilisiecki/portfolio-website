"use client";

import { motion } from "framer-motion";

type Props = {};

const Heart = (props: Props) => {
  return (
    <motion.div
      animate={{ scale: [1, 1.35, 1, 1.35, 1] }}
      transition={{
        repeat: Infinity,
        repeatDelay: 2,
        damping: 1,
        mass: 0.75,
        stiffness: 100,
      }}
      className="px-1 sm:px-2"
    >
      💖
    </motion.div>
  );
};

export default Heart;
