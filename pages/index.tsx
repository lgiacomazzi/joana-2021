import { useContext } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Arrow from "../components/Arrow";
import Bio from "../components/Bio";
import Footer from "../components/Footer";
import { BioContext } from "../contexts/BioContext";

import { motion } from "framer-motion";

import styles from "../styles/Home.module.css";

export async function getStaticProps(context) {
  const response = await require("../public/joana.json");

  return {
    props: { response },
  };
}

export default function Home(props) {
  const {
    titleGifUrl,
    mainGif1Url,
    mainGif2Url,
    mainGif3Url,
    jobs,
  } = props.response;

  const { isBioActive } = useContext(BioContext);

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
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.85 }}
      >
        {renderSectionText(job)}
        <Arrow className={styles.enter} type="right" size="big" />
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

  const renderHead = (
    <Head>
      <title>Joana Brum</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );

  function openMenu() {}

  const renderBurgerMenu = (
    <motion.div
      className={styles.burgerMenu}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.3 }}
      onClick={openMenu()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="192"
        height="192"
        fill="#ffffff"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none"></rect>
        <line
          x1="40"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="40"
          y1="64"
          x2="216"
          y2="64"
          fill="none"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
        <line
          x1="40"
          y1="192"
          x2="216"
          y2="192"
          fill="none"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="24"
        ></line>
      </svg>
    </motion.div>
  );

  return (
    <div className={styles.main_body}>
      {renderBurgerMenu}
      {renderHead}
      <section className={styles.title_section}>
        <img src="../images/joana-white.svg" alt="" />
        <div className={styles.overlay}>
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
      <Bio visibility={isBioActive}></Bio>
      <Footer></Footer>
    </div>
  );
}
