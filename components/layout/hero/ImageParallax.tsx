"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const ImageParallax = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "145%"]);

  return (
    <>
      <motion.div
        style={{
          y: y,
        }}
      >
        <Image
          className="relative z-30 w-[20rem] drop-shadow-2xl sm:w-[20rem] md:w-[25rem] lg:w-[35rem]"
          src="/images/fox.webp"
          alt="Picture of me as a fox"
          width={500}
          height={450}
        />
      </motion.div>
    </>
  );
};

export default ImageParallax;
