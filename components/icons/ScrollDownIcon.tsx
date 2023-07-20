import { motion } from "framer-motion";

type Props = {
  className: string;
};

const ScrollDownIcon = (props: Props) => {
  return (
    <motion.div
      whileTap={{ scale: 1 }}
      whileHover={{ scale: 1.15 }}
      transition={{
        type: "spring",
      }}
    >
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        className={props.className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </motion.div>
  );
};

export default ScrollDownIcon;
