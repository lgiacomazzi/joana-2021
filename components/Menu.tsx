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
      borderBottomRightRadius: "100vw",
      x: "-100%",
      y: "-100%",
    },
    open: {
      borderBottomRightRadius: "0vw",
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.nav initial={false} animate={isMenuOpen ? "open" : "closed"}>
      <MenuToggle
        toggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      ></MenuToggle>
      <motion.div
        className={styles.menuBackground}
        variants={variants}
        transition={{ type: "spring", bounce: 0 }}
      ></motion.div>
    </motion.nav>
  );
}
