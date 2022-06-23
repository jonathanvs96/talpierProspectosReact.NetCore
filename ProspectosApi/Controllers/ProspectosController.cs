using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProspectosApi.DTOs;
using ProspectosApi.Utilidades;

namespace ProspectosApi
{


    [ApiController]
    [Route("api/prospectos")]
    public class ProspectosController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;
        private readonly IAlmacenadorArchivos almacenadorArchivo;
        private readonly string contenedor = "prospectos";

        public ProspectosController(ApplicationDbContext context, IMapper mapper, IAlmacenadorArchivos almacenadorArchivo)
        {
            this.context = context;
            this.mapper = mapper;
            this.almacenadorArchivo = almacenadorArchivo;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProspectoDTO>>> Get([FromQuery] PaginacionDTO paginacionDTO)
        {
            var queryable = context.Prospectos.AsQueryable();
            await HttpContext.InsertarParametrosPaginacionEnCabecera(queryable);
            var prospectos = await queryable.OrderBy(x => x.Nombre).Paginar(paginacionDTO).ToListAsync();


            return mapper.Map<List<ProspectoDTO>>(prospectos);
        }

        [HttpGet("{Id:int}")]
        public async Task<ActionResult<ProspectoDTO>> Get(int Id)
        {
            var prospecto = await context.Prospectos.FirstOrDefaultAsync(x => x.Id == Id);

            if (prospecto == null)
            {
                return NotFound();
            }

            return mapper.Map<ProspectoDTO>(prospecto);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] ProspectoCreacionDTO prospectoCreacionDTO)
        {
            var prospecto = mapper.Map<Prospecto>(prospectoCreacionDTO);

            if (prospectoCreacionDTO.Documento != null)
            {
                prospecto.Documento = await almacenadorArchivo.GuardarArchivo(contenedor, prospectoCreacionDTO.Documento);
            }

            context.Add(prospecto);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] ProspectoCreacionDTO prospectoCreacionDTO)
        {
            var prospecto = await context.Prospectos.FirstOrDefaultAsync(x => x.Id == id);

            if (prospecto == null)
            {
                return NotFound();
            }

            prospecto = mapper.Map(prospectoCreacionDTO, prospecto);
            await context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var existe = await context.Prospectos.AnyAsync(x => x.Id == id);

            if (!existe)
            {
                return NotFound();
            }

            context.Remove(new Prospecto() { Id = id });
            await context.SaveChangesAsync();
            return NoContent();
        }



    }
}