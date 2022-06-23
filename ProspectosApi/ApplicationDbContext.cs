
using Microsoft.EntityFrameworkCore;

namespace ProspectosApi
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Prospecto> Prospectos { get; set; }
    }
}