using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoListApi.Data;
using ToDoListApi.Models;

namespace ToDoListApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TareasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TareasController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/tareas
        [HttpGet]
        public async Task<IActionResult> GetTareas()
        {
            var tareas = await _context.Tarea.ToListAsync();
            return Ok(tareas);
        }

        // POST: api/tareas
        [HttpPost]
        public async Task<IActionResult> CreateTarea([FromBody] Tarea nuevaTarea)
        {
            if (nuevaTarea == null)
                return BadRequest("El cuerpo de la solicitud no contiene una tarea válida.");

            _context.Tarea.Add(nuevaTarea);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetTareas), new { id = nuevaTarea.Id }, nuevaTarea);
        }

        // PUT: api/tareas/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTarea(int id, [FromBody] Tarea tareaActualizada)
        {
            var tareaExistente = await _context.Tarea.FindAsync(id);
            if (tareaExistente == null)
                return NotFound();

            tareaExistente.Title = tareaActualizada.Title;
            tareaExistente.Description = tareaActualizada.Description;
            tareaExistente.IsCompleted = tareaActualizada.IsCompleted;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // DELETE: api/tareas/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTarea(int id)
        {
            var tareaExistente = await _context.Tarea.FindAsync(id);
            if (tareaExistente == null)
                return NotFound();

            _context.Tarea.Remove(tareaExistente);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
