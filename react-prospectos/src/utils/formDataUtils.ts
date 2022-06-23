import { prospectoCreacionDTO } from './../prospectos/prospectos.model.d';

export function convertirProspectoAFormData(prospecto: prospectoCreacionDTO){
    const formData = new FormData();

    formData.append('nombre', prospecto.nombre);
    formData.append('primerApellido', prospecto.primerApellido);
    if(prospecto.segundoApellido)
    {
        formData.append('segundoApellido', prospecto.segundoApellido);
    }    
    formData.append('calle', prospecto.calle);
    formData.append('numeroCasa', prospecto.numeroCasa);
    formData.append('colonia', prospecto.colonia);
    formData.append('codigoPostal', prospecto.codigoPostal);
    formData.append('telefono', prospecto.telefono);
    formData.append('rfc', prospecto.colonia);
    if(prospecto.documento)
    {
    formData.append('documento', prospecto.documento);
    }    
}