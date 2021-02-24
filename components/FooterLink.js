import { motion } from "framer-motion";

export default function FooterLink(props) {
  const { href, children } = props;

  return (
    <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.a>
  );
}
