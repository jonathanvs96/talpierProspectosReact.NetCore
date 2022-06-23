using AutoMapper;
using ProspectosApi.DTOs;

namespace ProspectosApi.Utilidades
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Prospecto, ProspectoDTO>().ReverseMap();
            CreateMap<ProspectoCreacionDTO, Prospecto>();
        }
    }
}