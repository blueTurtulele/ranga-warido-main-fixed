import BlurBall from "@components/BlurBall";
import Button from "@components/Button";
import Paragraph from "@components/Paragraph";
import Image from "next/image";
import { Eye, Phone } from "phosphor-react";
import { FC } from "react";
import { Media } from "utils/media";
import styles from "./Hero.module.scss";
import dotsSvg from "public/assets/dots.svg";
import heroImage from "public/assets/hero.jpg";

const Hero: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.floating_card}>
        <h1 className={styles.heading}>
          Świadczymy
          <br />
          profesjonalne
          <br />
          usługi księgowe
        </h1>
        <Paragraph className={styles.subheading}>
          Świadczymy profesjonalne usługi księgowe i audytorskie – jako podmioty wpisane na listę uprawnionych do badania sprawozdań finansowych
        </Paragraph>
        <Media at="xs">
          <div className={styles.buttons}>
            <Button linkTo="/#services" icon={Eye} size="small">
              Nasze Usługi
            </Button>
            <Button icon={Phone} linkTo="/#contact" fillIcon variant="outline" size="small">
              Kontakt
            </Button>
          </div>
        </Media>
        <Media greaterThan="xs">
          <div className={styles.buttons}>
            <Button linkTo="/#services" icon={Eye}>
              Nasze Usługi
            </Button>
            <Button linkTo="/#contact" icon={Phone} fillIcon variant="outline">
              Kontakt
            </Button>
          </div>
        </Media>
      </div>
      <Media greaterThan="xs" className={styles.dots}>
        <Image
          src={dotsSvg}
          alt="dots, visual element"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Media>
      <Media greaterThan="xs">
        <div className={styles.image}>
          <Image
            src={heroImage}
            placeholder="blur"
            priority={true}
            alt="Background Image"
            fill
            sizes="50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </Media>
      <BlurBall className={styles.right_ball} size={300} blur={120} />
      <BlurBall className={styles.left_ball} size={250} color="#C57583" blur={100} />
    </div>
  );
};

export default Hero;
