import { Field } from "formik";

export default function FormGroupText(props: formGroupTextProps) {
  return (
    <div className="col">
      {props.label ? <label htmlFor={props.campo}>{props.label}</label> : null}

      <Field
        name={props.campo}
        className="form-control"
        placeholder={props.placeholder}
        autoComplete="off"
      />
    </div>
  );
}

interface formGroupTextProps {
  campo: string;
  label?: string;
  placeholder?: string;
}
