using System;

using Microsoft.EntityFrameworkCore.Migrations;

namespace Kritikos.Domain.Migrations
{
    public partial class InitialSchema : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
//            migrationBuilder.CreateTable(
//                name: "Users",
//                columns: table => new
//                {
//                    Id = table.Column<int>(nullable: false)
//                        .Annotation("Npgsql:Serial", true),
//                    Username = table.Column<string>(nullable: false),
//                    Email = table.Column<string>(nullable: false),
//                    CreatedAt = table.Column<DateTime>(nullable: false),
//                    UpdatedAt = table.Column<DateTime>(nullable: false)
//                },
//                constraints: table =>
//                {
//                    table.PrimaryKey("PK_Order", x => x.Id);
//                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
