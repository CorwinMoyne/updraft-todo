import { Formik } from "formik";
import * as React from "react";
import Button from "../../../../app/components/Button/Button";
import Input from "../../../../app/components/Input/Input";
import styles from "./Todo.module.css";

interface Props {}

const Todo: React.FunctionComponent<Props> = (props) => {
  const handleSubmit = (formValues: { todo: string }) => {
    console.log("formValues", formValues);
  };

  return (
    <div className={styles.todo}>
      <Formik
        initialValues={{ todo: "" }}
        validate={(values) => {
          const errors: any = {};
          if (!values.todo) {
            errors.todo = "Todo is required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            handleSubmit(values);
            setSubmitting(false);
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
                name="todo"
                value={values.todo}
                onChange={handleChange}
                errors={errors}
                touched={touched}
              />

              <Button variant="accent" disabled={isSubmitting}>
                Create
              </Button>
            </div>
            {errors.todo && touched.todo && errors.todo && (
              <div className={styles.error}>{errors.todo}</div>
            )}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Todo;
