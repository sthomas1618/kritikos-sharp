using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

using Kritikos.Domain.Data;

namespace Kritikos.Domain.Migrations
{
    [DbContext(typeof(KritikosContext))]
    public partial class KritikosContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.0.0-rc2-20901");
        }
    }
}
