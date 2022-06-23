import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

export default function FormGroupDocumento(props: formGroupDocumento) {
  const [documentoBase64, setDocumentoBase64] = useState("");
  const { values } = useFormikContext<any>();

  const ManejarOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const archivo = e.currentTarget.files[0];
      aBase64(archivo)
        .then((representacionBase64: string) =>
          setDocumentoBase64(representacionBase64)
        )
        .catch((error) => console.error(error));

      values[props.campo] = archivo;
    }
  };

  const aBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className="form-group">
      <label htmlFor="">{props.label}</label>
      <div>
        <input type="file" accept=".pdf" onChange={ManejarOnChange} />
      </div>
    </div>
  );
}

interface formGroupDocumento {
  campo: string;
  label: string;
}
