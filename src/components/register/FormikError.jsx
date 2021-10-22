import { ErrorMessage } from "formik";

const FormikError = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(errMessage) => {
        return <div style={{ color: "red" }}>{errMessage}</div>;
      }}
    </ErrorMessage>
  );
};

export default FormikError;
