using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace Kritikos.Domain.Data
{
    public class TemporaryDbContextFactory : IDbContextFactory<KritikosContext>
    {
        public KritikosContext Create(DbContextFactoryOptions options)
        {
            var builder = new DbContextOptionsBuilder<KritikosContext>();
            builder.UseNpgsql("Host=localhost;Username=kritikos;Password=kritikos_hit;Database=kritikos");
            return new KritikosContext(builder.Options);
        }
    }
}
