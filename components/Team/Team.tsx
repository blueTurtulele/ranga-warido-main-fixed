import SectionTitle from "@components/SectionTitle";
import { FC } from "react";
import styles from "./Team.module.scss";

import angelika from "public/assets/team/Angelika_Sadon-Grabska.jpg";
import cezary from "public/assets/team/Cezary_Gaka.jpg";
import joanna from "public/assets/team/Joanna_Suchodolska.jpg";
import biaas from "public/assets/team/Małgorzata_Biaas.jpg";
import budny from "public/assets/team/Władysaw_Budny.jpg";
import woloszczak from "public/assets/team/Bernadeta_Wołoszczak.jpg";
import kruczek from "public/assets/team/Agnieszka_Kruczek.jpg";
import rylko from "public/assets/team/Agnieszka_Ryłko.jpg";
import smolinska from "public/assets/team/Katarzyna_Smolińska.jpg";
import Image, { StaticImageData } from "next/image";

interface Team {
  featured: {
    image: StaticImageData;
    name: string;
    title: string;
    info: string[];
  }[];
  members: {
    image: StaticImageData;
    name: string;
    titles: string[];
  }[];
}

const team: Team = {
  featured: [
    {
      image: angelika,
      name: "mgr Angelika Sadłoń-Grabska, MBA",
      title: "Biegła Rewident nr 12610",
      info: [
        `Biegła Sądowa z zakresu rachunkowości Sądu Okręgowego w Bielsku-Białej`,
        `Współpracowniczka Akademii Wyższej Szkoły Biznesu w Dąbrowie Górniczej, na Wydziale Zamiejscowym w Cieszynie`,
      ],
    },
    {
      image: biaas,
      name: "dr. Małgorzata Białas, MBA",
      title: "Biegła Rewident nr 13534",
      info: ["Wykładowczyni Akademii Górniczo-Hutniczej w Krakowie"],
    },
  ],
  members: [
    {
      image: cezary,
      name: "mgr Cezary Gałka",
      titles: ["Asystent Biegłego Rewidenta"],
    },
    {
      image: budny,
      name: "mgr inż. Władysław Budny",
      titles: ["Asystent Biegłego Rewidenta"],
    },
    {
      image: woloszczak,
      name: "mgr Bernadeta Wołoszczak",
      titles: ["Asystent Biegłego Rewidenta"],
    },
    {
      image: rylko,
      name: "lic. Agnieszka Ryłko",
      titles: ["Asystent Biegłego Rewidenta"],
    },
    {
      image: kruczek,
      name: "mgr Agnieszka Kruczek",
      titles: ["Specjalistka ds. księgowości", "Specjalistka ds. kadr i płac"],
    },
    {
      image: joanna,
      name: "mgr Joanna Suchodolska",
      titles: ["Specjalistka ds. księgowości", "Specjalistka ds. kadr i płac"],
    },
    {
      image: smolinska,
      name: "Tech. ekonomista Katarzyna Smolińska",
      titles: ["Specjalistka ds. księgowości", "Specjalistka ds. kadr i płac"],
    },
  ],
};

const Team: FC = () => {
  return (
    <section id="team" className={styles.wrapper}>
      <SectionTitle text="Nasz zespół" />
      <div className={styles.featured}>
        {team.featured.map((member, memberIdx) => {
          return (
            <div className={styles.member} key={`${member.name}_${memberIdx}`}>
              <div className={styles.member__image}>
                <Image
                  src={member.image}
                  placeholder="blur"
                  alt={member.name}
                  sizes="500px"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
              <div className={styles.member__content}>
                <p className={styles.name}>{member.name}</p>
                <p className={styles.footnote}>{member.title}</p>
                {member.info.map((i) => {
                  return (
                    <p key={i} className={styles.info}>
                      {i}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.members}>
        {team.members.map((member, memberIdx) => {
          return (
            <div className={styles.member} key={`${member.name}_${memberIdx}`}>
              <div className={styles.member__image}>
                <Image
                  src={member.image}
                  placeholder="blur"
                  alt={member.name}
                  sizes="(max-width: 550px) 100vw, (max-width: 768px) 50vw, (min-width: 768px) 280px"
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
              <div className={styles.member__content}>
                <p className={styles.name}>{member.name}</p>
                {member.titles.map((t) => {
                  return (
                    <p key={t} className={styles.title}>
                      {t}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Team;
