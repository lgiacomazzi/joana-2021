import Image from "next/image";

import { motion } from "framer-motion";

import styles from "../styles/Job.module.css";
import { useState } from "react";

export default function PortfolioBody({ images }) {
  //   const [[page, direction], setPage] = useState([0, 0]);

  return (
    <motion.div className={styles.portfolio_body}>
      {images.map((image) => (
        <div key={image.id} className={styles.portfolio_content}>
          <motion.div
            className={styles.portfolio_content_image}
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
            className={styles.portfolio_content_description}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", delay: 0.3 }}
          >
            {image.title}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}
