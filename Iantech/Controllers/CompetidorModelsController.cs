using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Iantech.Models;

namespace Iantech.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompetidorModelsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public CompetidorModelsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/CompetidorModels
        [HttpGet]
        public IEnumerable<CompetidorModel> GetCompetidores()
        {

            //return new List<CompetidorModel>()
            //{
            //    new CompetidorModel(){Id=1, Codigo="22340", Nombre = "ksdañlda", Direccion="dire", Lat="21123", Long="213123.2", Marca=1, Marcador=1, NombreCoorporativo="Nombre Coorp", Observar=1, ZonaPrecios=1}
            //};

            return _context.Competidores;
        }

        // GET: api/CompetidorModels/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompetidorModel([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var competidorModel = await _context.Competidores.FindAsync(id);

            if (competidorModel == null)
            {
                return NotFound();
            }

            return Ok(competidorModel);
        }

        // PUT: api/CompetidorModels/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompetidorModel([FromRoute] int id, [FromBody] CompetidorModel competidorModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != competidorModel.Id)
            {
                return BadRequest();
            }

            _context.Entry(competidorModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CompetidorModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CompetidorModels
        [HttpPost]
        public async Task<IActionResult> PostCompetidorModel([FromBody] CompetidorModel competidorModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Competidores.Add(competidorModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCompetidorModel", new { id = competidorModel.Id }, competidorModel);
        }

        // DELETE: api/CompetidorModels/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCompetidorModel([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var competidorModel = await _context.Competidores.FindAsync(id);
            if (competidorModel == null)
            {
                return NotFound();
            }

            _context.Competidores.Remove(competidorModel);
            await _context.SaveChangesAsync();

            return Ok(competidorModel);
        }

        private bool CompetidorModelExists(int id)
        {
            return _context.Competidores.Any(e => e.Id == id);
        }
    }
}