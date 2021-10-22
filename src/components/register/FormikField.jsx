import { Field } from "formik";
import FormikError from "./FormikError";

/**
 * FormikField Component
 */
const FormikField = ({ name, type, label }) => {
  return (
    <Field name={name}>
      {(formikField) => {
        return (
          <>
            <label htmlFor={name} style={{ display: "block" }}>
              {label}
            </label>
            <input
              type={type}
              id={name}
              {...formikField.field}
              defaultChecked={formikField.field.value}
            />
            <FormikError name={name} />
          </>
        );
      }}
    </Field>
  );
};

export default FormikField;
