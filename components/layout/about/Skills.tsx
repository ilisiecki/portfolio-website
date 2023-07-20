"use client";

import { motion, Variants } from "framer-motion";

const skills = [
  { name: "Next.js" },
  { name: "React" },
  { name: "TypeScript" },
  { name: "Tailwind CSS" },
  { name: "Prisma" },
  { name: "Framer Motion" },
  { name: "TanStack Query" },
  { name: "Zustand" },
  { name: "Shadcn/ui" },
  { name: "Vercel" },
  { name: "Git" },
  { name: "MySQL" },
  { name: "SQL" },
  { name: "CSS" },
  { name: "HTML" },
  { name: "Photoshop" },
  { name: "Illustrator" },
];

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

const Skills = () => {
  return (
    <div className="z-10 flex flex-row flex-wrap justify-center gap-2 md:justify-end">
      {skills.map((item, idx) => {
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
            className="mt-2 cursor-default rounded bg-main-secondary/90 px-4 py-2 font-semibold text-main-text transition-colors duration-500 hover:bg-main-primary/80 dark:bg-main-secondary/70 dark:text-main-textDark dark:hover:bg-main-primary/80"
          >
            {item.name}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Skills;
