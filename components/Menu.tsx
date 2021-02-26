import { motion } from "framer-motion";

import MenuLink from "./MenuLink";
import MenuToggle from "./MenuToggle";

import styles from "../styles/components/Menu.module.css";
import { useState } from "react";
import { NONAME } from "dns";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const variants = {
    closed: {
      opacity: 0,
      x: -100,
      zIndex: 0,
    },
    open: {
      opacity: 1,
      x: 0,
      zIndex: 999,
    },
  };

  return (
    <motion.nav initial={false} animate={isMenuOpen ? "open" : "closed"}>
      <MenuToggle toggle={() => setIsMenuOpen(!isMenuOpen)}></MenuToggle>
      <motion.div
        className={styles.menuBackground}
        variants={variants}
      ></motion.div>
    </motion.nav>
  );
}
