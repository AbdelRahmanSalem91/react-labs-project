import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as yup from "yup";
import FormikField from "./FormikField";

/**
 * LoginFormikComponents Component
 */
const Register = () => {
  const initialValues = {
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    hopies: [""],
  };
  const onSubmit = (values) => console.log(values);
  const validationSchema = yup.object({
    userName: yup.string().required("User name is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("Please confirm your password"),
    gender: yup.string().required("Please select your gender"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div style={{ padding: 20 }}>
              <FormikField label="User Name:" name="userName" type="text" />
              <FormikField label="Email:" name="email" type="text" />
              <FormikField label="Password:" name="password" type="password" />
              <FormikField
                label="Confirm Password:"
                name="confirmPassword"
                type="password"
              />
              <Field name="gender">
                {(formikField) => {
                  return (
                    <>
                      <label htmlFor="gender" style={{ display: "block" }}>
                        Gender
                      </label>
                      <select id="gender" {...formikField.field}>
                        <option value="" label="Choose your gender" />
                        <option value="male" label="Male" />
                        <option value="female" label="Female" />
                      </select>
                      <ErrorMessage name="gender">
                        {(errMessage) => {
                          return (
                            <div style={{ color: "red" }}>{errMessage}</div>
                          );
                        }}
                      </ErrorMessage>
                    </>
                  );
                }}
              </Field>
              <FieldArray name="hopies">
                {(fieldArrayProps) => {
                  console.log("FieldArray", fieldArrayProps);
                  const { push, remove, form } = fieldArrayProps;
                  const { values } = form;
                  const { hopies } = values;
                  return (
                    <>
                      <label htmlFor="hopies" style={{ display: "block" }}>
                        Hoppies
                      </label>
                      {hopies.map((hopy, index) => (
                        <div key={index}>
                          <Field name={`hopies[${index}]`} />
                          {index > 0 && (
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => remove(index)}
                            >
                              -
                            </button>
                          )}
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => push("")}
                          >
                            +
                          </button>
                        </div>
                      ))}
                    </>
                  );
                }}
              </FieldArray>
              <button style={{ display: "block" }}>submit</button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
export default Register;
