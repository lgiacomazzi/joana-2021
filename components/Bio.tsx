import { motion } from "framer-motion";

import styles from "../styles/components/Bio.module.css";

type BioProps = {
  isBioOpen?: boolean;
};

export default function Bio({ isBioOpen }: BioProps) {
  function toggleBio() {
    console.log("bio!");
  }

  const variants = {
    true: { y: 0 },
    false: { y: 1000 },
  };

  return (
    <motion.div
      className={styles.bio}
      transition={{ duration: 0.5 }}
      initial="false"
      animate={isBioOpen ?? false}
      variants={variants}
    >
      biografia
      <p onClick={toggleBio}>Close</p>
    </motion.div>
  );
}
