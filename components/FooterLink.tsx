import { ReactNode } from "react";

import { useRouter } from "next/router";

import { motion } from "framer-motion";

type FooterLinkProps = {
  children: ReactNode;
  href?: string;
  onClick: () => void;
};

export default function FooterLink(props: FooterLinkProps) {
  const { href, children, onClick } = props;

  const router = useRouter();

  function onClickHandler(e) {
    if (href) {
      e.preventDefault();
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  }
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClickHandler}
    >
      {children}
    </motion.a>
  );
}
