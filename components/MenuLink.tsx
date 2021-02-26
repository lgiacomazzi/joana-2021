import { ReactNode } from "react";
import { motion } from "framer-motion";

import styles from "../styles/components/Menu.module.css";

type MenuLinkProps = {
  children: ReactNode;
};

export default function MenuLink({ children }: MenuLinkProps) {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.div
      className={styles.menuLink}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}
