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
    <div
      data-testid={props.testId}
      className={`${styles.todo} ${props.todo.isDone && styles.active}`}
      onClick={() => props.handleToggle(props.todo.id)}
    >
      <div>
        <FontAwesomeIcon icon={props.todo.isDone ? faSquareCheck : faSquare} />
      </div>
      <div>{props.todo.description}</div>
    </div>
  );
};

export default Todo;
