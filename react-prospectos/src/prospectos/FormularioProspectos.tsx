import { Form, Formik, FormikHelpers, useFormikContext } from "formik";
import { prospectoCreacionDTO } from "./prospectos.model";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import Button from "../utils/Button";
import FormGroupDocumento from "../utils/FormGroupDocumento";
import FormGroupSelect from "../utils/FormGroupSelect";

export default function FormularioProspectos(props: formularioGenerosProps) {
  return (
    <Formik
      initialValues={props.modelo}
      onSubmit={props.onSubmit}
      //   validationSchema={Yup.object({

      //   })}
    >
      {(formikProps) => (
        <Form>
          <div className="row mb-3">
            <FormGroupText campo="nombre" label="Nombre" placeholder="Nombre" />
            <FormGroupText
              campo="primerApellido"
              label="Apellido Paterno"
              placeholder="Apellido Paterno"
            />
            <FormGroupText
              campo="segundoApellido"
              label="Apellido Materno"
              placeholder="Apellido Materno"
            />
          </div>
          <div className="row mb-3">
            <FormGroupText campo="calle" label="Calle" placeholder="Calle" />
            <FormGroupText
              campo="numeroCasa"
              label="Num. Casa"
              placeholder="Num. Casa"
            />
            <FormGroupText
              campo="colonia"
              label="Colonia"
              placeholder="Colonia"
            />
          </div>
          <div className="row mb-3">
            <FormGroupText
              campo="codigoPostal"
              label="Codigo Postal"
              placeholder="Codigo Postal"
            />
            <FormGroupText
              campo="telefono"
              label="Num. Telefono"
              placeholder="Num. Telefono"
            />
            <FormGroupText campo="rfc" label="RFC" placeholder="RFC" />
          </div>

          {/* <div className="row">
            <FormGroupDocumento campo="documento" label="Documento" />
          </div> */}

          {props.editar ? (
            <>
              <FormGroupSelect campo="estatus" />{" "}
              <div className="my-4">
                <FormGroupText campo="observacion" label="Observaciones" />
              </div>
            </>
          ) : null}

          <Button disabled={formikProps.isSubmitting} type="submit">
            Guardar
          </Button>
        </Form>
      )}
    </Formik>
  );
}

interface formularioGenerosProps {
  modelo: prospectoCreacionDTO;
  onSubmit(
    valores: prospectoCreacionDTO,
    accion: FormikHelpers<prospectoCreacionDTO>
  ): void;
  editar: boolean;
}

FormularioProspectos.defaultProps = {
  editar: false,
};
