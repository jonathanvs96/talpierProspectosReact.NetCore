namespace ProspectosApi.DTOs
{
    public class PaginacionDTO
    {
        public int pagina { get; set; } = 1;
        private int recordsPorPagina = 10;
        private readonly int cantidadMaximaRecordPorPagina = 50;

        public int RecordsPorPagina
        {
            get
            {
                return recordsPorPagina;
            }
            set
            {
                recordsPorPagina = (value > cantidadMaximaRecordPorPagina) ? cantidadMaximaRecordPorPagina : value;
            }
        }
    }
}