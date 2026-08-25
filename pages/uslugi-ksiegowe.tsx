import ServicePageWrapper from "@components/ServicePageWrapper";
import type { NextPage } from "next";
import Head from "next/head";
import featuredImage from "public/assets/ksiegowe.jpg";
import ServiceHeading from "@components/ServiceHeading";

const UslugiKsiegowe: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Prowadzenia ksiąg rachunkowych, ewidencji podatkowej oraz obsługi kadrowej." />

        <meta property="og:url" content="https://ranga.net.pl/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Usługi Księgowe | Ranga × Warido" />
        <meta property="og:description" content="Prowadzenia ksiąg rachunkowych, ewidencji podatkowej oraz obsługi kadrowej." />
        <meta property="og:image" content="https://ranga.net.pl/feat.png" />

        <meta property="og:image:url" content="http://ranga.net.pl/feat.png" />
        <meta property="og:image:secure_url" content="https://ranga.net.pl/feat.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="ranga.net.pl" />
        <meta property="twitter:url" content="https://ranga.net.pl/" />
        <meta name="twitter:title" content="Usługi Księgowe | Ranga × Warido" />
        <meta name="twitter:description" content="Prowadzenia ksiąg rachunkowych, ewidencji podatkowej oraz obsługi kadrowej." />
        <meta name="twitter:image" content="https://ranga.net.pl/feat.png" />
      </Head>
      <ServicePageWrapper title="Usługi Księgowe" image={featuredImage} firm="ranga" serviceId="s-ks">
        <ServiceHeading>Świadczymy usługi w zakresie</ServiceHeading>
        <ul>
          <li>
            Prowadzenia ksiąg rachunkowych i podatkowej książki przychodów i rozchodów na podstawie dokumentacji
            dostarczanej przez klienta zarówno w naszej kancelarii, na naszym programie księgowym (korzystamy z programu
            ENOVA), jak i u klienta, na jego programie księgowym.
          </li>
          <li>Nadzoru nad prawidłowym obiegiem dokumentów księgowych.</li>
          <li>
            Opracowywania planu kont zgodnie ze standardami sprawozdawczymi, wymogami kontrolingu oraz prawem
            podatkowym.
          </li>
          <li>Zapewnienia prawidłowości rozliczeń podatkowych.</li>
          <li>Sporządzania deklaracji podatkowych oraz innych dokumentów i raportów wymaganych przepisami prawa.</li>
          <li>Sporządzania sprawozdań finansowych według standardów przyjętych w polityce rachunkowości.</li>
          <li>Przygotowywania sprawozdań i raportów na potrzeby zarządu, banków oraz instytucji zewnętrznych.</li>
          <li>Realizowania procedury potwierdzania sald z kontrahentami, rozliczanie inwentaryzacji aktywów firmy.</li>
          <li>Współpracy w opracowywaniu wniosków kredytowych.</li>
          <li>Udzielania porad oraz wyjaśnień księgowo-podatkowych.</li>
          <li>
            Obsługi kadrowo-płacowej - rejestracji pracodawcy i pracowników dla celów ubezpieczenia społecznego,
            przygotowywaniu list płac dla pracowników zatrudnionych na podstawie umowy o pracę i innych form
            zatrudnienia oraz odpowiadających im rozliczeń podatku dochodowego od osób fizycznych i składek na
            ubezpieczenie społeczne, sporządzaniu deklaracji miesięcznych i rocznych.
          </li>
        </ul>
      </ServicePageWrapper>
    </>
  );
};

export default UslugiKsiegowe;
