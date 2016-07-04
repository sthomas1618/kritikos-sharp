using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;

using Kritikos.Domain.Data;

namespace Kritikos.Domain.Migrations
{
    [DbContext(typeof(KritikosContext))]
    [Migration("20160621032647_InitialSchema")]
    partial class InitialSchema
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rc2-20901");
        }
    }
}
