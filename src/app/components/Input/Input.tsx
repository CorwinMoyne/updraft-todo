import * as React from "react";
import styles from "./Input.module.css";

interface Props {
  type?: "text"; // Add other types as required - number, password etc
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FunctionComponent<Props> = (props) => {
  return (
    <input
      className={styles.input}
      type={props.type || "text"}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default React.memo(Input);
