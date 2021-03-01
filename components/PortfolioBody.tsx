import { useEffect, useContext, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";

import SplitText from "./SplitText";

import styles from "../styles/Job.module.css";

import { JobContext } from "../contexts/JobContext";

export default function PortfolioBody({ images }) {
  const { page, portfolioSize, setPortfolioSize } = useContext(JobContext);

  useEffect(() => {
    console.log("Mudando a página");
    const jobBody = document.getElementById("jobBody");
    jobBody.scrollLeft = page * jobBody.clientWidth;
    setPortfolioSize(images.length);
  }, [page]);

  return (
    <div id="jobBody" className={styles.portfolioBody} data-position={page}>
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
            <div className={styles.portfolioContentDescription}>
              <SplitText
                initial={{ y: "100%" }}
                animate="visible"
                variants={{
                  visible: (i) => ({
                    y: 0,
                    transition: {
                      delay: i * 0.1,
                    },
                  }),
                }}
              >
                {image.title}
              </SplitText>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
