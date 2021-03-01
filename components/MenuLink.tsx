import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "../styles/components/Menu.module.css";
import { Url } from "url";

type MenuLinkProps = {
  children: ReactNode;
  href?: Url;
  onClick?: () => void;
};

export default function MenuLink({ children, href, onClick }: MenuLinkProps) {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <Link href={href ?? "/"}>
      <motion.div
        className={styles.menuLink}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.div>
    </Link>
  );
}
