import classNames from "classnames";
import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.scss";

interface Props {
  className?: string;
}

const Container: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  const classes = classNames(styles.wrapper, {
    [className as string]: className != null,
  });
  return <div className={classes}>{children}</div>;
};

export default Container;
