import { urlProspecto } from "../utils/endpoints";
import IndiceEntidad from "../utils/IndiceEntidad";
import { prospectoDTO } from "./prospectos.model";

export default function IndicePropsectos() {
  return (
    <>
      <IndiceEntidad<prospectoDTO>
        url={urlProspecto}
        urlCrear="/prospectos/crear"
        titulo="Prospectos"
        nombreEntidad="Prospectos"
      >
        {(prospectos, botones) => (
          <>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Calle</th>
                <th>Colonia</th>
                <th>Codigo Postal</th>
                <th>Num. Teléfono</th>
                <th>RFC</th>
                <th>Estatus</th>
                <th>Observaciones</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {prospectos?.map((prospecto) => (
                <tr key={prospecto.id}>
                  <td>
                    {`${prospecto.nombre} ${prospecto.primerApellido} ${prospecto.segundoApellido}`}
                  </td>
                  <td>{`${prospecto.calle} #${prospecto.numeroCasa}`}</td>
                  <td>{prospecto.colonia}</td>
                  <td>{prospecto.codigoPostal}</td>
                  <td>{prospecto.telefono}</td>
                  <td>{prospecto.rfc}</td>

                  {prospecto.estatus === 0 ? <td>Enviado</td> : null}
                  {prospecto.estatus === 1 ? <td>Autorizado</td> : null}
                  {prospecto.estatus === -1 ? <td>Rechazado</td> : null}

                  <td>
                    {prospecto.estatus === -1 ? prospecto.observacion : null}
                  </td>

                  <td>
                    {botones(
                      `/prospectos/editar/${prospecto.id}`,
                      prospecto.id
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </IndiceEntidad>
    </>
  );
}
