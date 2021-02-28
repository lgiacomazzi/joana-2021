import { useEffect, useContext, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import styles from "../styles/Job.module.css";

import { JobContext } from "../contexts/JobContext";

export default function PortfolioBody({ images }) {
  const { page, portfolioSize, setPortfolioSize } = useContext(JobContext);

  useEffect(() => {
    console.log("Mudando a página");
    setPortfolioSize(images.length);
  }, [page]);

  return (
    <div className={styles.portfolioBody} data-position={page}>
      {images.length === 0 ? (
        <div className={styles.errorSign}>
          <img src="/icons/smiley-sad.svg" />
          <p>Sem imagens</p>
        </div>
      ) : (
        images.map((image) => (
          <div key={image.id} className={styles.portfolioContent}>
            <motion.div
              className={styles.portfolioContentImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
              <Image
                src={image.url}
                alt={image.title}
                layout="fill"
                objectFit="contain"
              ></Image>
            </motion.div>
            <motion.div
              className={styles.portfolioContentDescription}
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", delay: 0.3 }}
            >
              {image.title}
            </motion.div>
          </div>
        ))
      )}
    </div>
  );
}
