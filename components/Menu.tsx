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
      borderBottomRightRadius: "100px",
      x: "-100%",
    },
    open: {
      borderBottomRightRadius: "0px",
      x: 0,
      transition: {
        type: "spring",
        bounce: 0,
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.nav initial={false} animate={isMenuOpen ? "open" : "closed"}>
      <MenuToggle
        toggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      ></MenuToggle>
      <motion.div className={styles.menuBackground} variants={variants}>
        <MenuLink>Shop</MenuLink>
        <MenuLink>Biografia</MenuLink>
        <MenuLink>Instagram</MenuLink>
        <MenuLink>Contato</MenuLink>
        <img src="/images/joana-white.svg" />
      </motion.div>
    </motion.nav>
  );
}
