import React from "react";
import { fireEvent, render, screen, waitFor } from "../../../../testUtils";
import Todos from "./Todos";

function addTodo(inputText: string) {
  const input = screen.getByLabelText("description");
  fireEvent.change(input, { target: { value: inputText } });
  fireEvent.click(screen.getByText("Create"));
}

test("should display a todo", async () => {
  render(<Todos />);
  const inputText = "My first todo";
  addTodo(inputText);

  await waitFor(() => {
    const todo = screen.getByText(inputText);
    expect(todo).toBeInTheDocument();
  });
});

test("should change the item to done", async () => {
  render(<Todos />);
  const inputText = "My first todo";
  addTodo(inputText);
  let todo: any;

  await waitFor(() => {
    todo = screen.getByText(inputText);
    fireEvent.click(todo);
  });

  await waitFor(() => {
    const description = screen.getByTestId("todo-0");
    expect(description).toHaveClass("active");
  });
});
