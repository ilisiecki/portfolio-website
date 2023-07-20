import { motion, AnimatePresence } from "framer-motion";

type Props = {
  className: string;
  isSound?: boolean;
};

const SpeakerOff = (props: Props) => {
  return (
    <AnimatePresence>
      {!props.isSound && (
        <svg
          width="22"
          height="22"
          viewBox="0 0 18 18"
          stroke="none"
          fill="none"
          className={props.className}
        >
          <path d="M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z"></path>
          <motion.path
            initial={{ opacity: 100 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: 0,
              duration: 0.15,
            }}
            d="M14.3025 3.69751
            C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001
            C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025"
            className="fill-none stroke-main-icon group-hover:stroke-main-iconHoverDark dark:stroke-main-iconDark"
          ></motion.path>
          <motion.path
            initial={{ opacity: 100 }}
            animate={{ opacity: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.15,
            }}
            d="M11.655 6.34501
            C12.358 7.04824 12.753 8.00189 12.753 8.99626
            C12.753 9.99063 12.358 10.9443 11.655 11.6475"
            className="fill-none stroke-main-icon group-hover:stroke-main-iconHoverDark dark:stroke-main-iconDark"
          ></motion.path>
        </svg>
      )}
    </AnimatePresence>
  );
};

export default SpeakerOff;
