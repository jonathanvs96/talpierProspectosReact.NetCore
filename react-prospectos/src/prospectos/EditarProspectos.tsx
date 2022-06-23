import confirmar from "../utils/Confirmar";
import EditarEntidad from "../utils/EditarEntidad";
import { urlProspecto } from "../utils/endpoints";
import FormularioProspectos from "./FormularioProspectos";
import { prospectoCreacionDTO, prospectoDTO } from "./prospectos.model";

export default function EditarProspectos() {
  return (
    <>
      <EditarEntidad<prospectoCreacionDTO, prospectoDTO>
        url={urlProspecto}
        urlIndice="/prospectos"
        nombreEntidad="Prospectos"
      >
        {(entidad, editar) => (
          <FormularioProspectos
            modelo={entidad}
            editar={true}
            onSubmit={async (valores) => {
              await confirmar(
                () => editar(valores),
                "¿Desea Guardar el Prospecto?",
                "Guardar",
                "info"
              );
            }}
          />
        )}
      </EditarEntidad>
    </>
  );
}
