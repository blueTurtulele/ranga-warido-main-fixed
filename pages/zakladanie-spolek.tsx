import ServicePageWrapper from "@components/ServicePageWrapper";
import type { NextPage } from "next";
import Head from "next/head";
import featuredImage from "public/assets/tworzenie.jpg";
import Paragraph from "@components/Paragraph";
import ServiceHeading from "@components/ServiceHeading";

const ZakladanieSpolek: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Dla klientów naszego biura rachunkowego nieodpłatnie służymy wiedzą i pomocą w założeniu spółki w portalu S24."
        />

        <meta property="og:url" content="https://ranga.net.pl/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Zakładanie spółek | Ranga × Warido" />
        <meta
          property="og:description"
          content="Dla klientów naszego biura rachunkowego nieodpłatnie służymy wiedzą i pomocą w założeniu spółki w portalu S24."
        />
        <meta property="og:image" content="https://ranga.net.pl/feat.png" />

        <meta property="og:image:url" content="http://ranga.net.pl/feat.png" />
        <meta property="og:image:secure_url" content="https://ranga.net.pl/feat.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ranga.net.pl" />
        <meta property="twitter:url" content="https://ranga.net.pl/" />
        <meta name="twitter:title" content="Zakładanie spółek | Ranga × Warido" />
        <meta
          name="twitter:description"
          content="Dla klientów naszego biura rachunkowego n ieodpłatnie służymy wiedzą i pomocą w założeniu spółki w portalu S24."
        />
        <meta name="twitter:image" content="https://ranga.net.pl/feat.png" />
      </Head>
      <ServicePageWrapper title="Zakładanie spółek" image={featuredImage} firm="ranga" serviceId="s-zk">
        <ServiceHeading>Dla naszych klientów</ServiceHeading>
        <Paragraph>
          Naszym obecnym oraz potencjalnym klientom oferujemy: <br/>
        </Paragraph>
        <Paragraph>
          - pomoc w założeniu działalności gospodarczej lub spółki (pomoc w przygotowaniu i wypełnieniu dokumentów rejestracyjnych, takich jak KRS czy CEIDG)<br/><br/>
          - pomoc w wyborze odpowiedniej formy opodatkowania<br/><br/>
          - pomoc w przygotowaniu niezbędnych dokumentów do Urzędu Skarbowego oraz do Zakładu Ubezpieczeń Społecznych, pozwalających rozpocząć działalność gospodarczą zgodnie z obowiązującymi przepisami<br/><br/>
          - pomoc w przygotowaniu umów, regulaminów oraz innych dokumentów potrzebnych do rozpoczęcia działalności<br/><br/>

        </Paragraph>
      </ServicePageWrapper>
    </>
  );
};

export default ZakladanieSpolek;
