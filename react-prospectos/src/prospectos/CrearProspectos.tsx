import axios from "axios";
import { useNavigate } from "react-router-dom";
import confirmar from "../utils/Confirmar";
import { urlProspecto } from "../utils/endpoints";
import { convertirProspectoAFormData } from "../utils/formDataUtils";
import FormularioProspectos from "./FormularioProspectos";
import { prospectoCreacionDTO } from "./prospectos.model";

export default function CrearProspectos() {
  const navigate = useNavigate();

  // async function crear(prospecto: prospectoCreacionDTO) {
  //   try {
  //     const formData = convertirProspectoAFormData(prospecto);
  //     await axios({
  //       method: "post",
  //       url: urlProspecto,
  //       data: formData,
  //       headers: { "Content-Type": "multipart/form-data" },
  //     });
  //     navigate("/prospectos");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function crear(prospecto: prospectoCreacionDTO) {
    try {
      await axios.post(urlProspecto, prospecto);
      navigate("/prospectos");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Crear Prospectos</h1>
      <div className="card  mb-3">
        <div className="card-header text-white bg-primary"></div>
        <div className="card-body">
          <FormularioProspectos
            modelo={{
              nombre: "",
              primerApellido: "",
              segundoApellido: "",
              calle: "",
              numeroCasa: "",
              colonia: "",
              codigoPostal: "",
              telefono: "",
              rfc: "",
            }}
            onSubmit={async (valores) => {
              await confirmar(
                () => crear(valores),
                "¿Desea Guardar el Prospecto?",
                "Guardar",
                "info"
              );
            }}
          />
        </div>
      </div>
    </>
  );
}
