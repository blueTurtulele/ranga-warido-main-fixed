import Container from "@components/Container";
import Header from "@components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import { Media } from "utils/media";
import styles from "styles/About.module.scss";
import Paragraph from "@components/Paragraph";
import { At, Files, MapPin, Phone } from "phosphor-react";
import Button from "@components/Button";
import Image from "next/image";
import BlurBall from "@components/BlurBall";
import SectionTitle from "@components/SectionTitle";
import FirmInfoTag from "@components/FirmInfoTag";
import ContactInfo from "@components/ContactInfo";
import { Gallery, GalleryImage } from "@components/Gallery";
import Footer from "@components/Footer";
import waridoLogo from "public/assets/warido_logo.png";
import rangaLogo from "public/assets/ranga.min.svg";
import cert1_thumb from "public/assets/certificates/1_t.jpg";
import cert2_thumb from "public/assets/certificates/2_t.jpg";
import cert3_thumb from "public/assets/certificates/3_t.jpg";
import cert4_thumb from "public/assets/certificates/4_t.jpg";
import cert5_thumb from "public/assets/certificates/5_t.png";
import cert6_thumb from "public/assets/certificates/6_t.jpg";
import cert7_thumb from "public/assets/certificates/7_t.jpg";
import cert8_thumb from "public/assets/certificates/8_t.jpg";

const certificates: GalleryImage[] = [
  {
    id: 1,
    thumbnailData: cert1_thumb,
    thumbnailUrl: "/assets/certificates/1_t.jpg",
    fullUrl: "/assets/certificates/1.jpg",
    fullWidth: 2356,
    fullHeight: 3084,
    altText: "Certyfikat Księgowy",
  },
  {
    id: 2,
    thumbnailData: cert2_thumb,
    thumbnailUrl: "/assets/certificates/2_t.jpg",
    fullUrl: "/assets/certificates/2.jpg",
    fullWidth: 2418,
    fullHeight: 1728,
    altText: "Dyplom Studia Magisterskie",
  },
  {
    id: 3,
    thumbnailData: cert3_thumb,
    thumbnailUrl: "/assets/certificates/3_t.jpg",
    fullUrl: "/assets/certificates/3.jpg",
    fullWidth: 1841,
    fullHeight: 1222,
    altText: "Członkostwo SKwP",
  },
  {
    id: 4,
    thumbnailData: cert4_thumb,
    thumbnailUrl: "/assets/certificates/4_t.jpg",
    fullUrl: "/assets/certificates/4.jpg",
    fullWidth: 1817,
    fullHeight: 2527,
    altText: "Świadectwo Studia Doktoranckie",
  },
  {
    id: 5,
    thumbnailData: cert5_thumb,
    thumbnailUrl: "/assets/certificates/5_t.png",
    fullUrl: "/assets/certificates/5.png",
    fullWidth: 1157,
    fullHeight: 1637,
    altText: "Świadectwo MBA",
  },
  {
    id: 6,
    thumbnailData: cert6_thumb,
    thumbnailUrl: "/assets/certificates/6_t.jpg",
    fullUrl: "/assets/certificates/6.jpg",
    fullWidth: 2464,
    fullHeight: 3440,
    altText: "Wpis na listę Biegłych Sądowych",
  },
  {
    id: 7,
    thumbnailData: cert7_thumb,
    thumbnailUrl: "/assets/certificates/7_t.jpg",
    fullUrl: "/assets/certificates/7.jpg",
    fullWidth: 2464,
    fullHeight: 3440,
    altText: "Wpis na listę podmiotów uprawnionych do badania RANGA",
  },
  {
    id: 8,
    thumbnailData: cert8_thumb,
    thumbnailUrl: "/assets/certificates/8_t.jpg",
    fullUrl: "/assets/certificates/8.jpg",
    fullWidth: 2480,
    fullHeight: 3508,
    altText: "Wpis na listę podmiotów uprawnionych do badania WARIDO",
  },
];

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>O Nas | Ranga × Ranga AUDYT ASG</title>
        <meta
          name="description"
          content="Dbamy o wysoką jakość świadczonych usług, zachowanie tajemnicy informacji, obiektywizm i uczciwość. Staramy się wykonywać swoją pracę z należytą starannością i profesjonalizmem, nieustannie podnosząc wiedzę i kompetencje."
        />

        <meta property="og:url" content="https://ranga.net.pl/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="O Nas | Ranga × Warido" />
        <meta
          property="og:description"
          content="Dbamy o wysoką jakość świadczonych usług, zachowanie tajemnicy informacji, obiektywizm i uczciwość. Staramy się wykonywać swoją pracę z należytą starannością i profesjonalizmem, nieustannie podnosząc wiedzę i kompetencje."
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
        <meta name="twitter:title" content="O Nas | Ranga × Warido" />
        <meta
          name="twitter:description"
          content="Dbamy o wysoką jakość świadczonych usług, zachowanie tajemnicy informacji, obiektywizm i uczciwość. Staramy się wykonywać swoją pracę z należytą starannością i profesjonalizmem, nieustannie podnosząc wiedzę i kompetencje."
        />
        <meta name="twitter:image" content="https://ranga.net.pl/feat.png" />
      </Head>
      <Container className={styles.wrapper}>
        <Header activeMenuItem="about" />
        <section className={styles.hero}>
          <div className={styles.content}>
            <h1 className={styles.heading}>O Nas</h1>
            <Paragraph>
              Dbamy o wysoką jakość świadczonych usług, zachowanie tajemnicy informacji, obiektywizm i uczciwość.
              Staramy się wykonywać swoją pracę z należytą starannością i profesjonalizmem, nieustannie podnosząc wiedzę
              i kompetencje.
            </Paragraph>
            <Media at="xs">
              <div className={styles.buttons}>
                <Button icon={Files} size="small" linkTo="/about#certificates">
                  Certyfikaty
                </Button>
</div>
            </Media>
            <Media greaterThan="xs">
              <div className={styles.buttons}>
                <Button icon={Files} linkTo="/about#certificates">
                  Certyfikaty
                </Button>
</div>
            </Media>
          </div>
    <Media greaterThan="xs" className={styles.art}>
  <Image
    width={758.6}
    priority={true}
    height={615.3}
    alt={"background art"}
    src={"/assets/_DSC3254 kopia.jpg"}
    sizes="50vw"
    style={{
      width: "75%",
      height: "auto",
      borderRadius: "180px 180px 0 0",
      marginLeft: "auto",      // przesuwa zdjęcie do prawej strony
      marginRight: "40px",     // odsuwa od samej krawędzi ekranu/menu
      objectFit: "cover",
      objectPosition: "left",  // wyrównuje kadrowanie zdjęcia do lewej
    }}
  />
</Media>
          <BlurBall className={styles.left_ball} blur={300} size={300} color="#C57583" />
          <BlurBall className={styles.right_ball} blur={500} size={300} />
        </section>
        <section className={styles.firm_info}>
          <SectionTitle text="Informacje o firmach" />
          <div className={styles.warido}>
  {/* Nowy blok logo: RANGA + AUDYT ASG */}
  <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem", marginBottom: "1rem" }}>
  <Image
    width={306.48}
    height={70}
    src={rangaLogo}
    alt="RANGA AUDYT ASG"
    priority={true}
    draggable={false}
    style={{
      maxWidth: "100%",
      height: "auto",
    }}
  />
  <span
    style={{
      fontSize: "1.75rem",
      fontWeight: 800,
      letterSpacing: "0.05em",
      color: "var(--clr-text-dark)",
    }}
  >
    AUDYT ASG
  </span>
</div>

  <div className={styles.tags}>
    <FirmInfoTag tag="REGON" value="364663997" />
    <FirmInfoTag tag="NIP" value="547-216-16-12" />
    <FirmInfoTag tag="KRS" value="0000622267" />
    <FirmInfoTag tag="Kapitał zakładowy" value="5.000,00 PLN" />
  </div>

  <div className={styles.contact}>
    <ContactInfo icon={At} data={[{ text: "info@audytasg.pl", link: "mailto:info@audytasg.pl" }]} />
    <Media at="xs">
      <ContactInfo icon={Phone} data={[{ text: "+(48) 515 096 788", link: "tel:+(48) 515 096 788" }]} />
    </Media>
    <Media at="xs">
      <ContactInfo icon={Phone} data={[{ text: "+(48) 33 818 43 17", link: "tel:+(48) 33 818 43 17" }]} />
    </Media>
    <Media greaterThan="xs">
      <ContactInfo icon={Phone} data={[{ text: "+(48) 515 096 788" }, { text: "+(48) 33 818 43 17" }]} />
    </Media>
    <ContactInfo
      icon={MapPin}
      data={[
        {
          text: "ul. Tadeusza 8, Bielsko-Biała 43-382",
          link: "https://www.google.com/maps/place/Tadeusza+8,+43-316+Bielsko-Bia%C5%82a/@49.8030029,18.9797157,17z/data=!3m1!4b1!4m5!3m4!1s0x4716a05b90acf3a3:0x380c4df0dd8259b3!8m2!3d49.8030029!4d18.9819044",
        },
      ]}
    />
  </div>

  <div className={styles.content}>
    <h1 className={styles.content__title}>
      RANGA AUDYT ASG Sp. z o.o.<span>Podmiot uprawniony do badania sprawozdań finansowych nr 4077</span>
    </h1>
    <Paragraph>
      Kancelaria Biegłych Rewidentów RANGA AUDYT ASG SP. z o.o. świadczy usługi w zakresie badania sprawozdań
      finansowych oraz audytu projektów unijnych.
    </Paragraph>
    <Paragraph>
      Dbamy o wysoką jakość świadczonych usług, zachowanie tajemnicy informacji, obiektywizm i uczciwość.
      Staramy się wykonywać swoją pracę z należytą starannością i profesjonalizmem, nieustannie podnosząc
      wiedzę i kompetencje.
    </Paragraph>
  </div>
</div>
          <div className={styles.ranga}>
            <Image
              width={306.48}
              height={70}
              src={rangaLogo}
              alt="Ranga"
              priority={true}
              draggable={false}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
            <div className={styles.tags}>
              <FirmInfoTag tag="REGON" value="070868416" />
              <FirmInfoTag tag="NIP" value="937-139-95-21" />
            </div>
            <div className={styles.contact}>
              <ContactInfo icon={At} data={[{ text: "info@ranga.net.pl", link: "mailto:info@ranga.net.pl" }]} />
              <Media at="xs">
                <ContactInfo icon={Phone} data={[{ text: "+(48) 515 096 788", link: "tel:+(48) 515 096 788" }]} />
              </Media>
              <Media at="xs">
                <ContactInfo icon={Phone} data={[{ text: "+(48) 33 818 43 17", link: "tel:+(48) 33 818 43 17" }]} />
              </Media>
              <Media greaterThan="xs">
                <ContactInfo icon={Phone} data={[{ text: "+(48) 515 096 788" }, { text: "+(48) 33 818 43 17" }]} />
              </Media>
              <ContactInfo
                icon={MapPin}
                data={[
                  {
                    text: "ul. Tadeusza 8, Bielsko-Biała 43-382",
                    link: "https://www.google.com/maps/place/Tadeusza+8,+43-316+Bielsko-Bia%C5%82a/@49.8030029,18.9797157,17z/data=!3m1!4b1!4m5!3m4!1s0x4716a05b90acf3a3:0x380c4df0dd8259b3!8m2!3d49.8030029!4d18.9819044",
                  },
                ]}
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.content__title}>
                Usługi Księgowe i Audytorskie „RANGA” Angelika Sadłoń-Grabska
                <span>Podmiot uprawniony do badania sprawozdań finansowych nr 4020</span>
              </h1>
              <Paragraph>
                Od 2006 r. posiadamy doświadczenie w prowadzeniu ksiąg rachunkowych oraz spraw kadrowych zarówno w
                podmiotach krajowych, jak i o kapitale zagranicznym. W tym samym roku rozpoczęliśmy również proces
                zdobywania wiedzy praktycznej i teoretycznej z dziedziny rewizji finansowej oraz innych usług
                świadczonych przez biegłego rewidenta. Posiadamy wieloletnie doświadczenie w zakresie badania planów
                przekształcenia, przeglądzie ksiąg rachunkowych oraz w sporządzaniu dokumentacji cen transferowych.
                Świadczymy usługi doradcze w sprawach ekonomiczno-finansowych i podatkowych.
              </Paragraph>
            </div>
          </div>
        </section>
        <section className={styles.certificates} id="certificates">
          <SectionTitle text="Certyfikaty" />
          <Gallery images={certificates} />
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default About;
