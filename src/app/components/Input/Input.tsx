import * as React from "react";
import styles from "./Input.module.css";

interface Props {
  id: string;
  ariaLabel?: string;
  type?: "text"; // Add other types as required - number, password etc
  name?: string;
  value: string;
  errors?: any;
  touched?: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={styles.container}>
      <label hidden htmlFor={props.id}>
        {props.name}
      </label>
      <input
        id={props.id}
        aria-label={props.ariaLabel}
        className={styles.input}
        name={props.name}
        type={props.type || "text"}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
