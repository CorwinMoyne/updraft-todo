import * as React from "react";
import styles from "./Button.module.css";

interface Props {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent";
  type?: "button" | "submit";
  disabled?: boolean;
  onclick?: () => void;
}

const Button: React.FunctionComponent<Props> = (props) => {
  return (
    <button
      className={`${styles.button} ${props.variant && styles[props.variant]}`}
      type={props.type || "submit"}
      disabled={props.disabled}
      onClick={props.onclick}
    >
      {props.children}
    </button>
  );
};

export default Button;
