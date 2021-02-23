import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../components/arrow";
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

  const renderSection = props.response.jobs.map((job) => (
    <Link href={"/portfolio/" + job.id} key={job.id}>
      <section className={styles.job_section}>
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
      </section>
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
      {renderSection}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
