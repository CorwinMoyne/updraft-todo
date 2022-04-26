import * as React from "react";
import styles from "./ButtonGroup.module.css";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

const ButtonGroup: React.FunctionComponent<Props> = (props) => {
  return <div className={styles.buttonGroup}>{props.children}</div>;
};

export default ButtonGroup;
