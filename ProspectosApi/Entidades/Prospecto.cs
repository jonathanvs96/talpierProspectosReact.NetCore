using System.ComponentModel.DataAnnotations;

namespace ProspectosApi
{
    public class Prospecto
    {
        public int Id { get; set; }
        [Required]
        [StringLength(maximumLength: 50)]
        public string Nombre { get; set; }
        [Required]
        [StringLength(maximumLength: 30)]
        public string PrimerApellido { get; set; }
        [StringLength(maximumLength: 30)]
        public string SegundoApellido { get; set; }
        [Required]
        public string Calle { get; set; }
        [Required]
        public string NumeroCasa { get; set; }
        [Required]
        [StringLength(maximumLength: 50)]
        public string Colonia { get; set; }
        [Required]
        [StringLength(maximumLength: 5)]
        [MinLength(5)]
        public string CodigoPostal { get; set; }
        [Required]
        [StringLength(maximumLength: 10)]
        [MinLength(10)]
        public string Telefono { get; set; }
        [Required]
        [StringLength(maximumLength: 20)]
        public string RFC { get; set; }

        public string Documento { get; set; }

        public int estatus { get; set; } = 0;

        public string observacion { get; set; }
    }
}