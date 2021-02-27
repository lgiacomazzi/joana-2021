import Image from "next/image";

import { motion } from "framer-motion";

import styles from "../styles/Job.module.css";
import { useState } from "react";

type PortfolioBodyData = {
  images: Array;
};
export default function PortfolioBody({ images }: PortfolioBodyData) {
  const [[page, direction], setPage] = useState([0, 0]);

  return (
    <motion.div className={styles.portfolio_body}>
      {images.map((image) => (
        <div key={image.id} className={styles.portfolio_content}>
          <motion.div
            className={styles.portfolio_content_image}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
          >
            <Image
              src={image.url}
              alt={image.title}
              layout="fill"
              objectFit="contain"
            ></Image>
          </motion.div>
          <div className={styles.portfolio_content_description}>
            {image.title}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
