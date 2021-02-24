import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Arrow from "../components/Arrow";
import Footer from "../components/Footer";

import { motion } from "framer-motion";

import styles from "../styles/Home.module.css";

export async function getStaticProps(context) {
  const response = await require("../public/joana.json");

  return {
    props: { response },
  };
}

export default function Home(props) {
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

  const renderSections = props.response.jobs.map((job) => (
    <Link href={"/portfolio/" + job.id} key={job.id}>
      <motion.section
        className={styles.job_section}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.95 }}
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

  return (
    <div className={styles.main_body}>
      {renderHead}
      {renderSections}
      <Footer></Footer>
    </div>
  );
}
