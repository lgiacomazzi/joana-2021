import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import Arrow from "../../components/Arrow";
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
    props: { data },
  };
}

export default function Job(props) {
  const { title, img } = props.data;

  const renderHead = (
    <Head>
      <title>{title} | Joana Brum</title>
    </Head>
  );

  const renderHeader = (
    <motion.div
      className={styles.portfolio_header}
      animate={{ y: 0 }}
      initial={{ y: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.portfolio_title}>
        <Link href="/" scroll={false}>
          <a>
            <Arrow type="left" size="big"></Arrow>
          </a>
        </Link>
        <h1
          animate={{ x: 0 }}
          initial={{ x: -60 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </h1>
      </div>
      <img src="/images/joana-dark.svg" alt="Logo Joana Brum" />
    </motion.div>
  );

  const renderContent = img.map((image) => (
    <div className={styles.portfolio_content}>
      <div className={styles.portfolio_content_image}>
        <Image
          src={image.url}
          alt={image.title}
          layout="fill"
          objectFit="contain"
        ></Image>
      </div>
      <div className={styles.portfolio_content_description}>{image.title}</div>
    </div>
  ));

  const renderBody = (
    <div className={styles.portfolio_body}>{renderContent}</div>
  );

  const renderFooter = (
    <div className={styles.portfolio_footer}>
      <div className={styles.left_arrow}></div>
      <div className={styles.right_arrow}></div>
    </div>
  );

  return (
    <main className={styles.job_page}>
      {renderHead}
      {renderHeader}
      {renderBody}
      {renderFooter}
    </main>
  );
}