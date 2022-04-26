import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../../../../app/components/Button/Button";
import ButtonGroup from "../../../../app/components/ButtonGroup/ButtonGroup";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Todo from "../../components/Todo/Todo";
import TodoForm from "../../components/TodoForm/TodoForm";
import { TodoFilters } from "../../enums/todoFilters";
import { TodoModel } from "../../models/todo";
import {
  addTodo,
  selectFilter,
  selectTodos,
  setFilter,
  toggleTodo,
} from "../../todoSlice";

interface Props {}

const Todos: React.FunctionComponent<Props> = (props) => {
  const filter = useAppSelector(selectFilter);

  const todos = useAppSelector(selectTodos).filter((todo) => {
    if (filter === TodoFilters.Complete) {
      return todo.isDone;
    } else if (filter === TodoFilters.Incomplete) {
      return !todo.isDone;
    }
    return todo;
  });

  console.log("todos", todos);

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

  const handleFilter = (filter: TodoFilters) => {
    dispatch(setFilter(filter));
  };

  return (
    <div>
      <ButtonGroup>
        <Button
          onclick={() => handleFilter(TodoFilters.All)}
          variant={filter === TodoFilters.All ? "accent" : "default"}
        >
          {TodoFilters.All}
        </Button>
        <Button
          onclick={() => handleFilter(TodoFilters.Incomplete)}
          variant={filter === TodoFilters.Incomplete ? "accent" : "default"}
        >
          {TodoFilters.Incomplete}
        </Button>
        <Button
          onclick={() => handleFilter(TodoFilters.Complete)}
          variant={filter === TodoFilters.Complete ? "accent" : "default"}
        >
          {TodoFilters.Complete}
        </Button>
      </ButtonGroup>

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
