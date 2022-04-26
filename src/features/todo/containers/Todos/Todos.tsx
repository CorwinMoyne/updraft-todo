import { Formik } from "formik";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "../../../../app/components/Button/Button";
import Input from "../../../../app/components/Input/Input";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Todo from "../../components/Todo/Todo";
import { TodoModel } from "../../models/todo";
import { addTodo, selectTodos, toggleTodo } from "../../todoSlice";
import styles from "./Todos.module.css";

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
      <Formik
        initialValues={{ description: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.description) {
            errors.description = "Todo is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            handleSubmit(values);
            setSubmitting(false);
            resetForm();
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <Input
                id="description"
                ariaLabel="Add todo"
                name="description"
                value={values.description}
                onChange={handleChange}
                errors={errors}
                touched={touched}
              />
              <Button variant="accent" disabled={isSubmitting}>
                Create
              </Button>
            </div>
            {errors.description && touched.description && (
              <div className={styles.error}>{errors.description}</div>
            )}
          </form>
        )}
      </Formik>

      <div>
        {todos.map((todo, index) => (
          <Todo
            testId={`todo-${index}`}
            key={todo.id}
            todo={todo}
            handleToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;
