import Button from "@components/Button";
import ContactForm from "@components/ContactForm";
import ContactInfo from "@components/ContactInfo";
import Container from "@components/Container";
import Footer from "@components/Footer";
// ISO gallery removed from homepage
import Header from "@components/Header";
import Hero from "@components/Hero";
import Paragraph from "@components/Paragraph";
import SectionTitle from "@components/SectionTitle";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  ArrowRight,
  At,
  BookBookmark,
  Checks,
  CurrencyCircleDollar,
  IconContext,
  MapPin,
  Phone,
  PhoneCall,
  UserCirclePlus,
} from "phosphor-react";
import { CSSProperties, useEffect, useState } from "react";
import styles from "styles/Home.module.scss";
import { Media } from "utils/media";
import Image from "next/image";

const Home: NextPage = () => {
  const [showAfterHours, setShowAfterHours] = useState(false);

  useEffect(() => {
    // Show once per day after 15:00 (local browser time)
    const now = new Date();
    if (now.getHours() < 15) return;

    const key = "after_hours_popup_date";
    const today = now.toISOString().slice(0, 10);
    const shown = typeof window !== "undefined" ? localStorage.getItem(key) : null;

    if (shown === today) return;
    if (typeof window !== "undefined") localStorage.setItem(key, today);

    setShowAfterHours(true);
  }, []);

  return (
    <>
      <Head>
        <title>Strona Główna | Ranga × Warido</title>
        <meta
          name="description"
          content="Firmy Usługi Księgowe i Audytorskie „RANGA” oraz Warido Audyt ASG Sp. z o.o. z siedzibą w Bielsku-Białej"
        />

        <meta property="og:url" content="https://ranga.net.pl/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Strona Główna | Ranga × Warido" />
        <meta
          property="og:description"
          content="Firmy Usługi Księgowe i Audytorskie „RANGA” oraz Warido Audyt ASG Sp. z o.o. z siedzibą w Bielsku-Białej"
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
        <meta name="twitter:title" content="Strona Główna | Ranga × Warido" />
        <meta
          name="twitter:description"
          content="Firmy Usługi Księgowe i Audytorskie „RANGA” oraz Warido Audyt ASG Sp. z o.o. z siedzibą w Bielsku-Białej"
        />
        <meta name="twitter:image" content="https://ranga.net.pl/feat.png" />
      </Head>
      {showAfterHours && (
        <div className={styles.popupOverlay} onClick={() => setShowAfterHours(false)}>
          <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
            <h3>Po godzinach pracy</h3>
            <p>Nasze biuro jest już nieczynne. Napisz do nas mailowo — odpowiemy najszybciej jak to możliwe.</p>
            <p className={styles.popupEmails}>
              <a href="mailto:info@ranga.net.pl">info@ranga.net.pl</a>
              <span>•</span>
              <a href="mailto:info@audytasg.pl">info@audytasg.pl</a>
            </p>
            <button className={styles.popupBtn} onClick={() => setShowAfterHours(false)}>
              Rozumiem
            </button>
          </div>
        </div>
      )}
      <Container className={styles.wrapper}>
        <Header activeMenuItem="home" />
        <Hero />

        <section className={styles.about} id="about">
          <SectionTitle passRawChild style={{ "--ch-limit": "150ch" } as CSSProperties} text="O Nas">
            <Paragraph>
              Od 2006 r. posiadamy doświadczenie w prowadzeniu ksiąg rachunkowych oraz spraw kadrowych zarówno w podmiotach krajowych, jak i o kapitale zagranicznym.
            </Paragraph>
            <Paragraph>
             Od 2013 r. zajmujemy się badaniem sprawozdań finansowych.
            </Paragraph>
            <Paragraph>
              Nasze usługi świadczymy z zachowaniem tajemnicy informacji, zgodnie z ustawą o
              biegłych rewidentach oraz ustawą o ochronie danych osobowych.
              </Paragraph>
              <Paragraph>
              Przestrzegamy Kodeksu etyki zawodowych księgowych Międzynarodowej Federacji Księgowych
              („Kodeks IFAC”).
            </Paragraph>

            
          </SectionTitle>
         
         
         
          <div className={styles.about__who}>
  <div className={styles.about__imageWrapper}>
    <Image
      src="/assets/_DSC3221 kopia.jpg" // <- podaj dokładną nazwę pliku z folderu public (np. /angelika.jpg)
      alt="Angelika Sadłoń-Grabska"
      width={400}
      height={500}
      className={styles.about__image}
    />
  </div>

  <div className={styles.about__textContent}>
    <h3 className={styles.item__title}>Kim jesteśmy?</h3>

    <Paragraph>
      Firmy Usługi Księgowe i Audytorskie „RANGA” oraz Ranga Audyt ASG Sp. z o.o.
      z siedzibą w Bielsku-Białej zostały założone przez biegłego rewidenta -
      Angelikę Sadłoń-Grabską - w rejestrze biegłych rewidentów nr 12610.
    </Paragraph>

    <Paragraph>
      Z dniem 9 lipca 2026 r. nasza firma, dotychczas działająca pod nazwą
      Warido Audyt ASG Sp. z o.o. officially zmieniła nazwę na Ranga Audyt ASG
      Sp. z o.o.
    </Paragraph>

    <Paragraph>
      To dla nas wyjątkowy moment i ważny krok w rozwoju naszej firmy. Nowa nazwa
      otwiera kolejny rozdział, który z dumą rozpoczynamy i z którym w pełni się
      utożsamiamy. Jest symbolem naszych ambicji, konsekwencji w działaniu oraz
      gotowości do dalszego budowania marki opartej na doświadczeniu, wiedzy,
      rzetelności, niezależności, odpowiedzialności i najwyższych standardach
      zawodowych.
    </Paragraph>

    <Paragraph>
      Zmienia się nasza nazwa, jednak niezmienne pozostają wartości, które od lat
      stanowią fundament naszej działalności. Nadal pozostajemy Państwa zaufanym
      partnerem w zakresie usług audytorskich i doradczych.
    </Paragraph>

    <Paragraph>
      Dziękujemy za zaufanie, którym obdarzają nas Państwo od lat.
    </Paragraph>

    <Paragraph>
      Pragniemy jednocześnie podkreślić, że zmiana nazwy firmy pozostaje bez
      wpływu na ciągłość naszej współpracy oraz wszelkie prawa i obowiązki
      wynikające z zawartych umów.
    </Paragraph>
  </div>
</div>


          <div className={styles.about__grid}>
           
            <div className={styles.item}>
              <h3 className={styles.item__title}>Co robimy?</h3>
              <Paragraph>
                Specjalizujemy się w obsłudze księgowej i kadrowej podmiotów gospodarczych.
                Świadczymy usługi zastrzeżone w Kodeksie Spółek Handlowych dla biegłego
                rewidenta. Sporządzamy dokumentację cen transferowych. Świadczymy usługi w
                zakresie analiz finansowych. Specjalizujemy się również w badaniach sprawozdań
                finansowych oraz w audytach projektów unijnych.
              </Paragraph>
             
            </div>
            <div className={styles.item}>
              <h3 className={styles.item__title}>Jak możemy pomóc?</h3>
              <Paragraph>
               Staramy się służyć naszym klientom wiedzą i doświadczeniem. System ciągłego
              podnoszenia kompetencji kadry księgowej, wdrażanie systemu ISO 9001, pozwala
              nam zapewnić wysoką jakość świadczonych przez nas usług.
              </Paragraph>
            </div>
          </div>
          <Button size="small" linkTo="/about" icon={ArrowRight}>
            Dowiedz się więcęj
          </Button>
        </section>

        {/* ISO certificates section removed from homepage */}

        <section className={styles.services} id="services">
          <SectionTitle text="Usługi">Jesteśmy dla Państwa w następujących obszarach:</SectionTitle>
          <IconContext.Provider value={{ size: 36, color: "var(--clr-accent)" }}>
            <div className={styles.services__grid}>
              <Link href="/uslugi-audytorskie" draggable="false" className={styles.item}>
                <BookBookmark />
                <div>
                  <h2 className={styles.item__title}>Usługi Audytorskie</h2>
                  <Paragraph>Świadczymy usługi w zakresie:</Paragraph>
                  <ul>
                    <li>Badanie sprawozdań finansowych</li>
                    <li>Badanie planów przekształcenia</li>
                    <li>Badanie planów połączenia</li>
                    <li>Audyt projektów unijnych</li>
                    <li>Analizy finansowe</li>
                  </ul>
                  <Button className={styles.item__button} size="small" icon={ArrowRight}>
                    Dowiedz się więcej
                  </Button>
                </div>
              </Link>
              <Link href="/uslugi-ksiegowe" draggable="false" className={styles.item}>
                <Checks />
                <div>
                  <h2 className={styles.item__title}>Usługi Księgowe</h2>
                  <Paragraph>Prowadzenia ksiąg rachunkowych, ewidencji podatkowej oraz obsługi kadrowej.</Paragraph>
                  <Button className={styles.item__button} size="small" icon={ArrowRight}>
                    Dowiedz się więcej
                  </Button>
                </div>
              </Link>
              <Link href="/zakladanie-spolek" draggable="false" className={styles.item}>
                <UserCirclePlus />
                <div>
                  <h2 className={styles.item__title}>Zakładanie firm</h2>
                  <Paragraph>
                    Dla klientów naszego biura rachunkowego nieodpłatnie służymy wiedzą i pomocą w założeniu firmy w CEIDG oraz spółki w
                    portalu S24.
                  </Paragraph>
                  <Button className={styles.item__button} size="small" icon={ArrowRight}>
                    Dowiedz się więcej
                  </Button>
                </div>
              </Link>
              <Link href="/dokumentacja-cen-transferowych" draggable="false" className={styles.item}>
                <CurrencyCircleDollar />
                <div>
                  <h2 className={styles.item__title}>Dokumentacja cen transferowych</h2>
                  <Paragraph>
                    Posiadamy wieloletnie w zakresie sporządzania lokalnej dokumentacji cen transferowych oraz analiz
                    porównawczych (benchmarkingów).
                  </Paragraph>
                  <Button className={styles.item__button} size="small" icon={ArrowRight}>
                    Dowiedz się więcej
                  </Button>
                </div>
              </Link>
            </div>
          </IconContext.Provider>
        </section>
      </Container>
      <section className={styles.stats}>
        <Container>
          <SectionTitle text="Możesz nam zaufać" forceColor="white" />
          <div className={styles.stats__grid}>
            <div className={styles.item}>
              <div className={styles.number}>
                15<span>+</span>
              </div>
              <div className={styles.text}>Lat Doświadczenia</div>
            </div>

            <div className={styles.item}>
              <div className={styles.number}>
                100<span>+</span>
              </div>
              <div className={styles.text}>Zadowolonych Klientów</div>
            </div>

            <div className={styles.item}>
              <div className={styles.number}>8</div>
              <div className={styles.text}>Dyplomów</div>
            </div>

            <div className={styles.item}>
              <div className={styles.number}>10<span>+</span></div>
              <div className={styles.text}>Wykształconych Pracowników</div>
            </div>

            <div className={styles.item}>
              <div className={styles.number}>
                50<span>+</span>
              </div>
              <div className={styles.text}>Certyfikatów</div>
            </div>
          </div>
        </Container>
      </section>
      <Container>
        <section className={styles.contact} id="contact">
          <Media greaterThanOrEqual="md">
            <div className={styles.watermark}>
              <PhoneCall size={330} color="var(--clr-accent)" />
            </div>
          </Media>
          <SectionTitle className={styles.contact__title} text="Skontaktuj się z nami">
            Jesteś zainteresowany naszymi usługami? Możesz skontaktować się z nami za pomocą formularza lub danych
            poniżej
          </SectionTitle>
          <div className={styles.info}>
            <h3 className={styles.info__title}>Nasze dane kontaktowe</h3>
            <div className={styles.info__grid}>
              <div className={styles.companyCard}>
                <h4 className={styles.companyTitle}>RANGA</h4>
                <ContactInfo icon={At} data={[{ text: "info@ranga.net.pl", link: "mailto:info@ranga.net.pl" }]} />
                <ContactInfo
                  icon={Phone}
                  data={[
                    { text: "+(48) 33 818 43 17", link: "tel:+48338184317" },
                  ]}
                />
                <ContactInfo
                  icon={MapPin}
                  data={[
                    {
                      text: "ul. Tadeusza 8, Bielsko-Biała 43-382",
                      link: "https://maps.app.goo.gl/wwZq5dZJBRmnQPcu8",
                    },
                  ]}
                />
              </div>

              <div className={styles.companyCard}>
                <h4 className={styles.companyTitle}>RANGA AUDYT ASG</h4>
                <ContactInfo icon={At} data={[{ text: "info@audytasg.pl", link: "mailto:info@audytasg.pl" }]} />
                <ContactInfo icon={Phone} data={[{ text: "+(48) 33 818 43 27", link: "tel:+48338184327" }]} />
                <ContactInfo
                  icon={MapPin}
                  data={[
                    {
                      text: "ul. Tadeusza 8, Bielsko-Biała 43-382",
                      link: "https://maps.app.goo.gl/wwZq5dZJBRmnQPcu8",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          <ContactForm />
        </section>
      </Container>

      {/* Mapa jako osobna sekcja full-width */}
      <section className={styles.mapSection} aria-label="Mapa dojazdu">
        <iframe
          title="Mapa - ul. Tadeusza 8, Bielsko-Biała"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3124.9901458912886!2d18.9819228!3d49.803001699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716a1a0f57b621b%3A0xe7b0c2cb6e148705!2sUs%C5%82ugi%20Ksi%C4%99gowe%20i%20Audytorskie%20%22Ranga%22%20Angelika%20Sad%C5%82o%C5%84-Grabska!5e1!3m2!1spl!2spl!4v1775590105770!5m2!1spl!2spl" 
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      <Footer />
    </>
  );
};

export default Home;
