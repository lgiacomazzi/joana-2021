import { useContext } from "react";

import { BioContext } from "../contexts/BioContext";

import { motion } from "framer-motion";

import styles from "../styles/Bio.module.css";

type BioProps = {
  visibility: boolean;
};

export default function Bio(props: BioProps) {
  const { visibility } = props;

  const { toggleBio } = useContext(BioContext);

  const variants = {
    true: { y: 0 },
    false: { y: 1000 },
  };

  return (
    <motion.div
      className={styles.bio}
      transition={{ duration: 0.5 }}
      initial="false"
      animate={visibility.toString()}
      variants={variants}
    >
      biografia
      <p onClick={toggleBio}>Close</p>
    </motion.div>
  );
}
