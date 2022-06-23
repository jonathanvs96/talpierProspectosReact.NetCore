namespace ProspectosApi.DTOs
{
    public class ProspectoDTO
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string PrimerApellido { get; set; }
        public string SegundoApellido { get; set; }
        public string Calle { get; set; }
        public string NumeroCasa { get; set; }
        public string Colonia { get; set; }
        public string CodigoPostal { get; set; }
        public string Telefono { get; set; }
        public string RFC { get; set; }
        public string Documento { get; set; }
        public int estatus { get; set; }
        public string observacion { get; set; }
    }
}