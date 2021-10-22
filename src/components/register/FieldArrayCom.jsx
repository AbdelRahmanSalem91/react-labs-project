import { Field, FieldArray } from "formik";

const FieldArrayCom = (name) => {
  return (
    <FieldArray name={name}>
      {(fieldArrayProps) => {
        console.log("FieldArray", fieldArrayProps);
        const { push, remove, form } = fieldArrayProps;
        const { values } = form;
        const { hopies } = values;
        return (
          <>
            <label htmlFor={name} style={{ display: "block" }}>
              {name}
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
  );
};

export default FieldArrayCom;
