using Microsoft.EntityFrameworkCore;
using ToDoListApi.Data;

namespace ToDoListApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
builder.WebHost.UseUrls( "https://localhost:5001");
            
            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseInMemoryDatabase("ToDoListDb"));
            builder.Services.AddControllers(); 
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

           
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

           

            app.MapControllers(); 

            app.Run();
        }
    }
}
