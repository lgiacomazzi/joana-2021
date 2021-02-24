import { useContext } from "react";

import { BioContext } from "../contexts/BioContext";

import FooterLink from "./FooterLink";

import styles from "../styles/Footer.module.css";

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
      <div>
        <span>created by lgiacomazzi</span>
      </div>
    </footer>
  );
}
