import { Formik } from "formik";
import * as React from "react";
import Button from "../../../../app/components/Button/Button";
import Input from "../../../../app/components/Input/Input";
import styles from "./TodoForm.module.css";

interface Props {
  handleSubmit: (values: { description: string }) => void;
}

const TodoForm: React.FunctionComponent<Props> = (props) => {
  return (
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
          props.handleSubmit(values);
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
  );
};

export default TodoForm;
