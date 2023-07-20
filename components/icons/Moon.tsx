import { motion, AnimatePresence } from "framer-motion";

type Props = {
  className: string;
  theme?: string;
};

const Moon = (props: Props) => {
  return (
    <AnimatePresence>
      {props.theme === "dark" && (
        <motion.div
          initial={{ rotate: 150 }}
          animate={{ rotate: 0 }}
          transition={{
            type: "spring",
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className={props.className}
          >
            <path d="M 14.97 11.83 C 13.600000000000001 14.27 10.99 15.91 8 15.91 C 3.58 15.91 0 12.33 0 7.91 C 0 3.91 2.95 0.58 6.8 0 C 6.8 0 4.3 4.1 7.17 8.36 C 7.17 8.36 9.5 12.459999999999999 14.969999999999999 11.83 Z" />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Moon;
