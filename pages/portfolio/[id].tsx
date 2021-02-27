import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import ArrowButton from "../../components/ArrowButton";
import styles from "../../styles/Job.module.css";

export async function getStaticPaths() {
  const response = await require("../../public/joana.json");

  var paths = [];
  for (let i = 0; i < response.jobs.length; i++) {
    paths.push({ params: { id: (i + 1).toString() } });
  }

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const response = await require("../../public/joana.json");
  const id = context.params.id;

  const data = response.jobs.filter((job) => job.id == id)[0];

  return {
    props: data,
  };
}

export default function Job(props) {
  const { title, img } = props;

  return (
    <motion.div
      className={styles.job_page}
      initial="jobInitial"
      animate="jobAnimate"
      transition={{ duration: 0.3 }}
    >
      <Head>
        <title>{title} | Joana Brum</title>
      </Head>

      <motion.div
        className={styles.portfolio_header}
        initial="headerInitial"
        animate="headerAnimate"
        variants={{
          headerInitial: {
            opacity: 0,
            y: -100,
          },
          headerAnimate: {
            opacity: 1,
            y: 0,
          },
        }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <div className={styles.portfolio_title}>
          <Link href="/" scroll={false}>
            <a>
              <ArrowButton type="left" size="big"></ArrowButton>
            </a>
          </Link>
          <h1>{title}</h1>
        </div>
        <img src="/images/joana-dark.svg" alt="Logo Joana Brum" />
      </motion.div>

      <div className={styles.portfolio_body}>
        <AnimatePresence>
          {img.map((image) => (
            <div key={image.id} className={styles.portfolio_content}>
              <motion.div
                className={styles.portfolio_content_image}
                initial="imageInitial"
                animate="imageAnimate"
                exit="imageExit"
                variants={{
                  imageInitial: {
                    opacity: 0,
                    scale: 0.9,
                    x: 100,
                  },
                  imageAnimate: {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                  },
                  imageExit: {
                    opacity: 0,
                  },
                }}
                transition={{ duration: 0.3, delay: 0.5 }}
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
        </AnimatePresence>
      </div>

      <motion.div
        className={styles.portfolio_footer}
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
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        <ArrowButton type="left" size="big"></ArrowButton>
        <ArrowButton type="right" size="big"></ArrowButton>
      </motion.div>
    </motion.div>
  );
}
