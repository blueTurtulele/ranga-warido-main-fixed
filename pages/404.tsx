import Button from "@components/Button";
import type { NextPage } from "next";
import Head from "next/head";
import { HouseLine, UserList } from "phosphor-react";
import styles from "../styles/404.module.scss";

const Page404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nie znaleźliśmy tej strony | Ranga × Warido</title>
        <meta name="robots" content="noindex" />

        <meta property="og:url" content="https://ranga.net.pl/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nie znaleźliśmy tej strony | Ranga × Warido" />
        <meta property="og:image" content="https://ranga.net.pl/feat.png" />

        <meta property="og:image:url" content="http://ranga.net.pl/feat.png" />
        <meta property="og:image:secure_url" content="https://ranga.net.pl/feat.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ranga.net.pl" />
        <meta property="twitter:url" content="https://ranga.net.pl/" />
        <meta name="twitter:title" content="Nie znaleźliśmy tej strony | Ranga × Warido" />
        <meta name="twitter:image" content="https://ranga.net.pl/feat.png" />
      </Head>
      <div className={styles.wrapper}>
        <span className={styles.watermark}>404</span>
        <h1>Nie znaleźliśmy tej strony :(</h1>
        <p>Może znajdziesz to czego szukasz tutaj</p>
        <div className={styles.buttons}>
          <Button size="small" linkTo="/" icon={HouseLine}>
            Strona Główna
          </Button>
          <Button size="small" linkTo="/about" icon={UserList}>
            O Nas
          </Button>
        </div>
      </div>
    </>
  );
};

export default Page404;
