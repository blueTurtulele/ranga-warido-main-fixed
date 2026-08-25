import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";
import { Media } from "utils/media";
import styles from "./Logos.module.scss";
import rangaSmallWhite from "public/assets/ranga_small_white.min.svg";
import rangaSmall from "public/assets/ranga_small.min.svg";
import rangaWhite from "public/assets/ranga_white.min.svg";
import ranga from "public/assets/ranga.min.svg";

interface Props {
  white?: boolean;
}

const Logos: FC<Props> = ({ white }) => {
  return (
    <div className={styles.wrapper}>
      {/* LEWE LOGO RANGA */}
      <Media at="xs">
        <Image
          width={34.72}
          height={25}
          src={white ? rangaSmallWhite : rangaSmall}
          alt="Ranga"
          priority={true}
          draggable={false} 
        />
      </Media>
      <Media at="sm">
        <Image
          width={50}
          height={36}
          src={white ? rangaSmallWhite : rangaSmall}
          alt="Ranga"
          priority={true}
          draggable={false} 
        />
      </Media>
      <Media greaterThan="sm">
        <Image
          width={162}
          height={37}
          src={white ? rangaWhite : ranga}
          alt="Ranga"
          priority={true}
          draggable={false} 
        />
      </Media>

      {/* SEPARATOR (X) */}
      <div className={classNames(styles.separator, { [styles["separator--white"]]: white })} />

      {/* PRAWE LOGO RANGA + AUDYT ASG */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
        <Media className={styles.logo_width_fix_small} at="xs">
          <Image
            width={94.4}
            height={25}
            src={white ? rangaWhite : ranga}
            priority={true}
            alt="Ranga Audyt ASG"
            draggable={false} 
          />
        </Media>
        <Media className={styles.logo_width_fix} greaterThan="xs">
          <Image
            width={162}
            height={37}
            src={white ? rangaWhite : ranga}
            priority={true}
            alt="Ranga Audyt ASG"
            draggable={false}
            sizes="162px"
            style={{
              maxWidth: "100%",
              height: "auto"
            }} 
          />
        </Media>
        <span 
          style={{ 
            fontSize: "1rem", 
            fontWeight: 800, 
            letterSpacing: "0.05em",
            whiteSpace: "nowrap",
            color: white ? "#fff" : "inherit"
          }}
        >
          AUDYT ASG
        </span>
      </div>
    </div>
  );
};

export default Logos;