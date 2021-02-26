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
        whileHover={{ scale: 0.99 }}
        whileTap={{ scale: 0.88 }}
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

  function openMenu() {
    console.log("menu");
  }

  const renderBurgerMenu = (
    <motion.div
      className={styles.burgerMenu}
      animate={{ scale: 1 }}
      initial={{ scale: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      onClick={openMenu}
    >
      <img src="../icons/list-bold.svg" />
    </motion.div>
  );

  return (
    <div className={styles.main_body}>
      {renderBurgerMenu}
      {renderHead}
      <section className={styles.title_section}>
        <motion.img
          src="../images/joana-white.svg"
          className={styles.title_section_logo}
          animate={{ scale: 1 }}
          initial={{ scale: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.8 }}
          transition={{ duration: 0.3 }}
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
      <Bio visibility={isBioActive}></Bio>
      <Footer></Footer>
    </div>
  );
}
