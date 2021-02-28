import { useEffect, useContext, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import ArrowButton from "./ArrowButton";
import styles from "../styles/Job.module.css";

import { JobContext } from "../contexts/JobContext";

export default function PortfolioFooter() {
  const { page, paginate } = useContext(JobContext);

  return (
    <motion.div
      className={styles.portfolioFooter}
      initial="footerInitial"
      animate="footerAnimate"
      variants={{
        footerInitial: {
          opacity: 0,
          y: 100,
        },
        footerAnimate: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ delay: 0.2 }}
    >
      <ArrowButton
        type="left"
        size="big"
        disabled={page === 0 ?? true}
        onClick={() => paginate(-1)}
      ></ArrowButton>

      <ArrowButton
        type="right"
        size="big"
        onClick={() => paginate(1)}
      ></ArrowButton>
    </motion.div>
  );
}
