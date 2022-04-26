import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import ButtonFilters from "../../components/ButtonFilters";
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
      <ButtonFilters filter={filter} handleFilter={handleFilter} />

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
