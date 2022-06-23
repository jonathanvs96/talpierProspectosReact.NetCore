export interface prospectoCreacionDTO {
    nombre: string;
    primerApellido: string;
    segundoApellido?: string;
    calle: string;
    numeroCasa: string;
    colonia: string;
    codigoPostal: string;
    telefono: string;
    rfc: string;    
    documento?: File;
    estatus?: number;
    observacion?: string;
}

export interface prospectoDTO{
    id: number;
    nombre: string;
    primerApellido: string;
    segundoApellido?: string;
    calle: string;
    numeroCasa: string;
    colonia: string;
    codigoPostal: string;
    telefono: string;
    rfc: string;   
    documento: string;
    estatus: number;
    observacion: string;
}