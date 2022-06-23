using ProspectosApi.DTOs;

namespace ProspectosApi.Utilidades
{
    public static class IQueryableExtensions
    {
        public static IQueryable<T> Paginar<T>(this IQueryable<T> queryable, PaginacionDTO paginacionDTO)
        {
            return queryable.Skip((paginacionDTO.pagina - 1) * paginacionDTO.RecordsPorPagina).Take(paginacionDTO.RecordsPorPagina);
        }
    }
}