import { motion } from "framer-motion";

import styles from "../styles/components/Menu.module.css";

export default function MenuToggle({ toggle }) {
  console.log(toggle);
  return (
    <motion.button
      className={styles.menuToggle}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.1 }}
      onClick={toggle}
    >
      <motion.img src="../icons/list-bold.svg" />
    </motion.button>
  );
}
