import * as React from "react";
import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "accent";
  type?: "button" | "submit";
  disabled?: boolean;
}

const Button: React.FunctionComponent<Props> = (props) => {
  return (
    <button
      className={`${styles.button} ${props.variant && styles[props.variant]}`}
      type={props.type || "submit"}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
