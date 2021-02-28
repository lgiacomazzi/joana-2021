import { motion } from "framer-motion";

import styles from "../styles/components/Menu.module.css";

export default function MenuToggle({ toggle, isMenuOpen }) {
  return (
    <motion.button
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      className={styles.menuToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.1, delay: 0.2 }}
      onClick={toggle}
    >
      {isMenuOpen ? (
        <motion.img src="../icons/x-bold.svg" />
      ) : (
        <motion.img src="../icons/list-bold.svg" />
      )}
    </motion.button>
  );
}
