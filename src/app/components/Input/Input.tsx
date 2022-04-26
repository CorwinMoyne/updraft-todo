import * as React from "react";
import styles from "./Input.module.css";

interface Props {
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
      <input
        className={styles.input}
        name={props.name}
        type={props.type || "text"}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default React.memo(Input);
