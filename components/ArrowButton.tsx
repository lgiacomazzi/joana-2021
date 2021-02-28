import { motion } from "framer-motion";

import styles from "../styles/components/ArrowButton.module.css";

export default function ArrowButton(props) {
  const { type, size, className, onClick } = props;

  const renderArrow = () => {
    switch (type) {
      case "right":
        return (
          <>
            <rect x="7" y="27" width="6" height="6" fill="white" />
            <rect x="13" y="27" width="6" height="6" fill="white" />
            <rect x="19" y="27" width="6" height="6" fill="white" />
            <rect x="25" y="27" width="6" height="6" fill="white" />
            <rect x="31" y="27" width="6" height="6" fill="white" />
            <rect x="43" y="27" width="6" height="6" fill="white" />
            <rect x="37" y="27" width="6" height="6" fill="white" />
            <rect x="49" y="27" width="6" height="6" fill="white" />
            <rect x="43" y="21" width="6" height="6" fill="white" />
            <rect x="43" y="33" width="6" height="6" fill="white" />
            <rect x="37" y="39" width="6" height="6" fill="white" />
            <rect x="31" y="45" width="6" height="6" fill="white" />
            <rect x="37" y="15" width="6" height="6" fill="white" />
            <rect x="31" y="9" width="6" height="6" fill="white" />
          </>
        );
      case "left":
        return (
          <>
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 53 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 47 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 41 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 35 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 29 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 17 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 23 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 11 27)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 17 21)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 17 33)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 23 39)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 29 45)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 23 15)"
              fill="white"
            />
            <rect
              width="6"
              height="6"
              transform="matrix(-1 0 0 1 29 9)"
              fill="white"
            />
          </>
        );
    }
  };

  const renderSize = () => {
    switch (size) {
      case "small":
        return "30px";
      case "big":
        return "60px";
    }
  };

  return (
    <motion.button
      className={styles.arrowButton + " " + className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      onClick={onClick}
    >
      <svg
        width={renderSize()}
        height={renderSize()}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {renderArrow()}
      </svg>
    </motion.button>
  );
}
