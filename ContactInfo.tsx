import { IconProps } from "phosphor-react";
import { FC, ForwardRefExoticComponent } from "react";
import styles from "./ContactInfo.module.scss";

type Entry = {
  text: string;
  link?: string;
};

interface Props {
  icon: ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>;
  data: Entry[];
}

const ContactInfo: FC<Props> = ({ icon: Icon, data }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <Icon weight="bold" color="var(--clr-text-light)" size={24} />
      </div>
      <div className={styles.text}>
        {data.map(({ text, link }, entryIdx) => {
          const id = `${text}_${entryIdx}`;
          if (link != null) {
            const isMailOrTel = link.startsWith("mailto:") || link.startsWith("tel:");
            return (
              <a
                href={link}
                key={id}
                {...(isMailOrTel ? {} : { target: "_blank", rel: "noreferrer" })}
              >
                {text}
              </a>
            );
          }
          return <span key={id}>{text}</span>;
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
