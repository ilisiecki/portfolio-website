import { motion, AnimatePresence } from "framer-motion";

type Props = {
  className: string;
  theme?: string;
};

const Sun = (props: Props) => {
  return (
    <AnimatePresence>
      {props.theme === "light" && (
        <motion.div
          initial={{ rotate: -30 }}
          animate={{ rotate: -30 }}
          transition={{
            type: "spring",
            delay: 0.875,
          }}
        >
          <svg
            width="19"
            height="18"
            viewBox="0 0 18 18"
            className={props.className}
          >
            <motion.circle cx="9" cy="9" r="5"></motion.circle>
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                damping: 11,
                mass: 0.75,
                stiffness: 100,
                delay: 0.125,
              }}
              cx="5"
              cy="16"
              r="1.5"
            ></motion.circle>
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                damping: 11,
                mass: 0.75,
                stiffness: 100,
                delay: 0.25,
              }}
              cx="1"
              cy="9"
              r="1.5"
            ></motion.circle>
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                damping: 11,
                mass: 0.75,
                stiffness: 100,
                delay: 0.375,
              }}
              cx="5"
              cy="2"
              r="1.5"
            ></motion.circle>
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                damping: 11,
                mass: 0.75,
                stiffness: 100,
                delay: 0.5,
              }}
              cx="13"
              cy="2"
              r="1.5"
            ></motion.circle>
            <motion.circle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                damping: 11,
                mass: 0.75,
                stiffness: 100,
                delay: 0.625,
              }}
              cx="17"
              cy="9"
              r="1.5"
            ></motion.circle>
            <motion.circle
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                type: "spring",
                damping: 11,
                mass: 0.75,
                stiffness: 100,
                delay: 0.75,
              }}
              cx="14"
              cy="16"
              r="1.5"
            ></motion.circle>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sun;
