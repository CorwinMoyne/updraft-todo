import { createSlice } from "@reduxjs/toolkit";
import { TodoFilters } from "./enums/todoFilters";
import { Todo } from "./models/todo";

export interface TodoState {
  filter: TodoFilters;
  todos: Todo[];
}

const initialState: TodoState = {
  filter: TodoFilters.All,
  todos: [],
};

export const todoReducer = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {},
});
