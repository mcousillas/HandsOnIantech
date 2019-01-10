using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Iantech.Models
{
    public class CompetidorModel
    {

        public int Id { get; set; }
        public string Codigo { get; set; }
        public string Nombre { get; set; }
        public string Direccion { get; set; }
        public string Lat { get; set; }
        public string Long { get; set; }
        public string NombreCoorporativo { get; set; }
        public int Marcador { get; set; }
        public int Observar { get; set; }
        public int Marca { get; set; }
        public int ZonaPrecios { get; set; }

    }
}
