import * as React from "react";
import Button from "../../../../app/components/Button/Button";
import Input from "../../../../app/components/Input/Input";
import styles from "./Todo.module.css";

interface Props {}

const Todo: React.FunctionComponent<Props> = (props) => {
  const [todo, setTodo] = React.useState("");

  return (
    <div className={styles.todo}>
      <div className={styles.inputGroup}>
        <Input value={todo} onChange={(event) => setTodo(event.target.value)} />
        <Button variant="accent">Create</Button>
      </div>
    </div>
  );
};

export default Todo;
