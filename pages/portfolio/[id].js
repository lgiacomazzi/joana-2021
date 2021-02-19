import Head from "next/head";
import Image from "next/image";
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
  // Get external data from the file system, API, DB, etc.
  const response = await require("../../public/joana.json");
  const id = context.params.id;

  const data = response.jobs.filter((job) => job.id == id)[0];

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: { data },
  };
}

export default function Job(props) {
  const renderContent = props.data.img.map((image) => (
    <Image
      key={image.id}
      src={image.url}
      alt={image.title}
      width={500}
      height={500}
    />
  ));

  return (
    <main className={styles.job_page}>
      <Head>
        <title>{props.title} | Joana Brum</title>
      </Head>
      <div className={styles.portfolio_header}>
        <div className={styles.back_arrow}></div>
        <h1>{props.title}</h1>
        <Image
          src="/images/joana-dark.svg"
          alt="Logo Joana Brum"
          width={500}
          height={500}
        />
      </div>
      <div className={styles.portfolio_content}>{renderContent}</div>
      <div className={styles.portfolio_footer}>
        <div className={styles.left_arrow}></div>
        <div className={styles.right_arrow}></div>
      </div>
    </main>
  );
}
