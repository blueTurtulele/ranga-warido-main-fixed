import { Html, Head, Main, NextScript } from "next/document";
import { mediaStyles } from "utils/media";

export default function Document() {
  return (
    <Html lang="pl" className="smooth-scroll">
      <Head>
        <meta property="og:locale" content="pl_PL" />
        <link rel="icon" href="/favicon.png" />
        <style type="text/css" dangerouslySetInnerHTML={{ __html: mediaStyles }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
