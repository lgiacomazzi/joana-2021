import { useContext, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import ArrowButton from "../components/ArrowButton";
import Bio from "../components/Bio";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

import { AnimatePresence, motion } from "framer-motion";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const response = await require("../public/joana.json");

  return {
    props: response,
  };
}

export default function Home(props) {
  const { titleGifUrl, mainGif1Url, mainGif2Url, mainGif3Url, jobs } = props;

  const [isBioOpen, setIsBioOpen] = useState(false);

  const renderSectionText = (job) => {
    return (
      <>
        <div className={styles.top_text}>
          {job.topText
            ? job.topText.map((text) => (
                <h3 key={text.description} className={text.class}>
                  {text.description}
                </h3>
              ))
            : ""}
        </div>
        <div className={styles.center_text}>
          {job.centerText
            ? job.centerText.map((text) => (
                <h2 key={text.description} className={text.class}>
                  {text.description}
                </h2>
              ))
            : ""}
        </div>
        <div className={styles.bottom_text}>
          {job.bottomText
            ? job.bottomText.map((text) => (
                <h3 key={text.description} className={text.class}>
                  {text.description}
                </h3>
              ))
            : ""}
        </div>
      </>
    );
  };

  const renderSections = jobs.map((job) => (
    <Link href={"/portfolio/" + job.id} key={job.id}>
      <motion.section
        className={styles.job_section}
        whileHover={{ scale: 0.99 }}
        whileTap={{ scale: 0.88 }}
        transition={{ duration: 0.5 }}
      >
        {renderSectionText(job)}
        <ArrowButton className={styles.enter} type="right" size="big" />
        <Image
          src={job.mainGifUrl}
          alt={job.title}
          className="z-1"
          layout="fill"
          objectFit="cover"
          priority
        />
      </motion.section>
    </Link>
  ));

  return (
    <motion.div
      className={styles.main_body}
      initial="homeInitial"
      animate="homeAnimate"
      exit="homeExit"
      variants={{
        homeInitial: {
          y: 100,
          opacity: 0,
        },
        homeAnimate: {
          y: 0,
          opacity: 1,
        },
        homeExit: {
          x: "100%",
          opacity: 0,
        },
      }}
    >
      <Menu />

      <Head>
        <title>Joana Brum</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.title_section}>
        <motion.img
          src="../images/joana-white.svg"
          className={styles.title_section_logo}
          animate={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: "spring", bounce: 0.5 }}
        />
        <div className={styles.background}>
          <Image
            src={titleGifUrl}
            className={styles.blendMode}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </section>

      {renderSections}

      <Bio isBioOpen={isBioOpen}></Bio>

      <Footer></Footer>
    </motion.div>
  );
}
