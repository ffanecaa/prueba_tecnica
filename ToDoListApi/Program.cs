using Microsoft.EntityFrameworkCore;
using ToDoListApi.Data;


namespace ToDoListApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);
            builder.WebHost.UseUrls("https://localhost:5001");

            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowReactApp", policy =>
                {
                    policy.WithOrigins("http://localhost:5173") 
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                });
            });

            builder.Services.AddDbContext<AppDbContext>(options =>
                options.UseInMemoryDatabase("ToDoListDb"));
            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "ToDoList API v1");
                    c.RoutePrefix = string.Empty; 
                });
            }

           
            app.Urls.Add("https://localhost:5001");

            app.UseHttpsRedirection();

           
            app.UseCors("AllowReactApp");

            app.MapControllers();

            app.Run();
        }
    }
}
