import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TodoFilters } from "./enums/todoFilters";
import { TodoModel } from "./models/todo";

export interface TodoState {
  filter: TodoFilters;
  todos: TodoModel[];
}

const initialState: TodoState = {
  filter: TodoFilters.All,
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      if (!state.todos.includes(action.payload)) {
        const todo = action.payload;
        state.todos.push(todo);
      }
    },
    toggleTodo: (state, action) => {
      console.log(action);
      const foundTodo = state.todos.find((todo) => todo.id === action.payload);
      if (foundTodo) {
        foundTodo.isDone = !foundTodo.isDone;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
