import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { TodoModel } from "../../models/todo";
import styles from "./Todo.module.css";

interface Props {
  testId: string;
  todo: TodoModel;
  handleToggle: (id: string) => void;
}

const Todo: React.FunctionComponent<Props> = (props) => {
  return (
    <button
      data-testid={props.testId}
      className={styles.todo}
      onClick={() => props.handleToggle(props.todo.id)}
    >
      <div>
        <FontAwesomeIcon
          className={`${styles.icon} ${props.todo.isDone ? styles.active : ""}`}
          icon={props.todo.isDone ? faSquareCheck : faSquare}
          size="2x"
        />
      </div>
      <div
        className={`${styles.description} ${
          props.todo.isDone ? styles.active : ""
        }`}
      >
        {props.todo.description}
      </div>
    </button>
  );
};

export default Todo;
