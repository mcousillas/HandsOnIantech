using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Iantech.Migrations
{
    public partial class CompetidorModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Competidores",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: true),
                    Codigo = table.Column<string>(nullable: true),
                    Nombre = table.Column<string>(nullable: true),
                    Direccion = table.Column<string>(nullable: true),
                    Lat = table.Column<string>(nullable: true),
                    Long = table.Column<string>(nullable: true),
                    NombreCoorporativo = table.Column<string>(nullable: true),
                    Marcador = table.Column<int>(nullable: false),
                    Observar = table.Column<int>(nullable: false),
                    Marca = table.Column<int>(nullable: false),
                    ZonaPrecios = table.Column<int>(nullable: false)
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Competidores");
        }
    }
}
