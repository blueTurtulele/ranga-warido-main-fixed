import ContactFooter from "@components/ContactFooter";
import Footer from "@components/Footer";
import Header from "@components/Header";
import Image, { StaticImageData } from "next/image";
import { FC, PropsWithChildren, ReactNode } from "react";
import styles from "./ServicePageWrapper.module.scss";
import ranga from "public/assets/ranga.min.svg";
import warido from "public/assets/warido_logo.png";
import Container from "@components/Container";
import SectionTitle from "@components/SectionTitle";
import { Media } from "utils/media";
import Head from "next/head";
import classNames from "classnames";

interface Props {
  image: StaticImageData;
  title: string;
  serviceId: "s-ks" | "s-au" | "s-zk" | "s-dok";
  firm: "ranga" | "warido" | "both";
  subtitle?: ReactNode;
  passRawSubtitle?: boolean;
}

const ServicePageWrapper: FC<PropsWithChildren<Props>> = ({
  image,
  title,
  subtitle,
  serviceId,
  passRawSubtitle,
  children,
  firm,
}) => {
  const firmLogo = firm === "ranga" ? ranga : warido;
  return (
    <>
      <Head>
        <title>{title} | Ranga &times; Warido</title>
      </Head>
      <Container>
        <Header activeMenuItem={serviceId} />
      </Container>
      <div className={styles.background} />
      <div className={classNames(styles.wrapper, "service-page-content")}>
        <Media at="xs">
          <SectionTitle passRawChild={passRawSubtitle} className={styles.title} text={title}>
            {subtitle}
          </SectionTitle>
        </Media>
        <Media greaterThan="xs">
          <h1 className={styles.title}>{title}</h1>
        </Media>
        <div className={styles.image}>
          <Image
            src={image}
            placeholder="blur"
            priority={true}
            alt={`background image - ${title}`}
            fill
            sizes="(min-width: 1200px) 960px, (max-width: 1200px) 100vw"
          />
          {firm !== "both" ? (
            <div className={styles.logo}>
              <Image
                src={firmLogo}
                alt={firm}
                sizes="100px"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </div>
          ) : (
            <div style={{ display: "flex", gap: "1.25rem" }}>
              <div className={classNames(styles.logo, styles.logo__both)}>
                <Image
                  src={ranga}
                  alt="ranga"
                  sizes="100px"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className={classNames(styles.logo, styles.logo__both)}>
                <Image
                  src={warido}
                  className={styles.warido}
                  alt="warido"
                  sizes="100px"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <Media className={styles.subtitle} greaterThan="xs">
          {subtitle}
        </Media>
        <div className={styles.content}>{children}</div>
      </div>
      <ContactFooter />
      <Footer />
    </>
  );
};

export default ServicePageWrapper;
