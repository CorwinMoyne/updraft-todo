import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup";
import React from "react";
import { store } from "../../../../app/store";
import { cleanup, render, screen, waitFor } from "../../../../testUtils";
import { TodoFilters } from "../../enums/todoFilters";
import { resetTodoSlice } from "../../todoSlice";
import Todos from "./Todos";

let user: UserEvent;

beforeEach(() => {
  store.dispatch(resetTodoSlice());
  render(<Todos />);
  user = userEvent.setup();
});

afterEach(() => {
  cleanup();
});

test("should display a todo", async () => {
  await user.type(screen.getByLabelText("description"), "Todo 1");
  await user.click(screen.getByText("Create"));

  await waitFor(() => {
    expect(screen.queryByText("Todo 1")).toBeInTheDocument();
  });
});

test("should change the item to done", async () => {
  await user.type(screen.getByLabelText("description"), "Todo 1");
  await user.click(screen.getByText("Create"));

  await waitFor(async () => {
    await user.click(screen.getByTestId("todo-0"));
  });

  await waitFor(() => {
    const svg = screen.getByTestId("todo-0").querySelector("svg");
    expect(svg).toHaveStyle("color: ##ee544e");
  });
});

test("should filter by complete items", async () => {
  await user.type(screen.getByLabelText("description"), "Todo 1");
  await user.click(screen.getByText("Create"));

  await new Promise((r) => setTimeout(r, 1000));

  await user.type(screen.getByLabelText("description"), "Todo 2");
  await user.click(screen.getByText("Create"));

  await user.click(screen.getByTestId("todo-0"));

  await new Promise((r) => setTimeout(r, 1000));

  await user.click(screen.getByText(TodoFilters.Complete));

  await waitFor(() => {
    expect(screen.getByText("Todo 1")).toBeInTheDocument();
    expect(screen.queryByText("Todo 2")).toBeNull();
  });
});

test("should filter by incomplete items", async () => {
  await user.type(screen.getByLabelText("description"), "Todo 1");
  await user.click(screen.getByText("Create"));

  await new Promise((r) => setTimeout(r, 1000));

  await user.type(screen.getByLabelText("description"), "Todo 2");
  await user.click(screen.getByText("Create"));

  await user.click(screen.getByTestId("todo-0"));

  await new Promise((r) => setTimeout(r, 1000));

  await user.click(screen.getByText(TodoFilters.Incomplete));

  await waitFor(() => {
    expect(screen.queryByText("Todo 1")).toBeNull();
    expect(screen.getByText("Todo 2")).toBeInTheDocument();
  });
});
