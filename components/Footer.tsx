import { useContext } from "react";
import { motion } from "framer-motion";

import { BioContext } from "../contexts/BioContext";

import FooterLink from "./FooterLink";

import styles from "../styles/components/Footer.module.css";

export default function Footer() {
  const { toggleBio } = useContext(BioContext);

  return (
    <footer className={styles.footer}>
      <img src="/images/joana-white.svg" alt="" />
      {/* add enabled based on route */}
      <div className={styles.links}>
        <FooterLink href="/">Portfólio</FooterLink>
        {/* Add popup message */}
        <FooterLink href="https://www.instagram.com/acervobrum/">
          Shop
        </FooterLink>
        <FooterLink onClick={toggleBio}>Biografia</FooterLink>

        <FooterLink href="https://www.instagram.com/joanasbrum/">
          Instagram
        </FooterLink>

        <FooterLink href="">Contato</FooterLink>
      </div>
      {/* Create Tag Component */}
      <motion.div
        className={styles.auth}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span>
          created by <span>lgiacomazzi</span>
        </span>
      </motion.div>
    </footer>
  );
}
