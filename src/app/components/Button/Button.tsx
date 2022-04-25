import * as React from "react";
import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "accent";
}

const Button: React.FunctionComponent<Props> = (props) => {
  return (
    <button
      className={`${styles.button} ${props.variant && styles[props.variant]}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
