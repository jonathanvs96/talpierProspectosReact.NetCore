import { useFormikContext } from "formik";

export default function FormGroupSelect(props: formGroupSelectProps) {
  const { values } = useFormikContext<any>();

  const setEstatus = (e: number) => {
    values[props.campo] = e;
  };
  return (
    <div className="form-group my-3" style={{ width: "150px" }}>
      <label>Estatus</label>
      <select
        className="form-control"
        defaultValue={0}
        onChange={(e) => {
          setEstatus(parseInt(e.currentTarget.value, 10));
        }}
      >
        <option value="0">Enviado</option>
        <option value="1">Autorizado</option>
        <option value="-1">Rechazado</option>
      </select>
    </div>
  );
}

interface formGroupSelectProps {
  campo: string;
}
