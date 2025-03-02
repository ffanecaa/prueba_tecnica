using Microsoft.EntityFrameworkCore;
using ToDoListApi.Models;

namespace ToDoListApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Tarea> Tarea { get; set; }
    }
}
