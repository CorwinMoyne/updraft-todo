import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Todo from "../../components/Todo/Todo";
import TodoForm from "../../components/TodoForm/TodoForm";
import { TodoModel } from "../../models/todo";
import { addTodo, selectTodos, toggleTodo } from "../../todoSlice";

interface Props {}

const Todos: React.FunctionComponent<Props> = (props) => {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();

  const handleSubmit = (formValues: { description: string }) => {
    const { description } = formValues;
    if (description) {
      const todo: TodoModel = {
        id: uuidv4(),
        description: description,
        isDone: false,
      };
      dispatch(addTodo(todo));
    }
  };

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  return (
    <div>
      <TodoForm handleSubmit={handleSubmit} />

      {todos.map((todo, index) => (
        <Todo
          testId={`todo-${index}`}
          key={todo.id}
          todo={todo}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default Todos;
