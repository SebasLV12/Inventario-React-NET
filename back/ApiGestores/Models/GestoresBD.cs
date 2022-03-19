using System.ComponentModel.DataAnnotations;

namespace ApiGestores.Models
{
    public class GestoresBD
    {
        [Key]
        public int id { get; set; }
        public string codigo { get; set; }
        public string nombre { get; set; }
        public string descripcion { get; set; }
        public int cantidad { get; set; }
    }
}
