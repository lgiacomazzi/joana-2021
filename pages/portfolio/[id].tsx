import { useContext } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { AnimatePresence, motion } from "framer-motion";

import SplitText from "../../components/SplitText";
import ArrowButton from "../../components/ArrowButton";
import PortfolioBody from "../../components/PortfolioBody";
import PortfolioFooter from "../../components/PortfolioFooter";

import { JobContext, JobContextProvider } from "../../contexts/JobContext";

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
      className={styles.jobPage}
      initial="jobInitial"
      animate="jobAnimate"
      exit="jobExit"
      variants={{
        jobInitial: {
          scale: 0.8,
          opacity: 0,
          borderRadius: 200,
        },
        jobAnimate: {
          scale: 1,
          opacity: 1,
          borderRadius: 0,
        },
        jobExit: {
          x: "100%",
          opacity: 0,
        },
      }}
    >
      <Head>
        <title>{title} | Joana Brum</title>
      </Head>

      <motion.div
        className={styles.portfolioHeader}
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
        transition={{ delay: 0.2 }}
      >
        <div className={styles.portfolioTitle}>
          <Link href="/" scroll={false}>
            <a>
              <ArrowButton type="left" size="big"></ArrowButton>
            </a>
          </Link>
          <h1>{title}</h1>
        </div>
        <img src="/images/joana-dark.svg" alt="Logo Joana Brum" />
      </motion.div>

      <JobContextProvider>
        <PortfolioBody images={img}></PortfolioBody>
        <PortfolioFooter />
      </JobContextProvider>
    </motion.div>
  );
}
