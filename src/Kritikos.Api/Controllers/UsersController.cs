using System.Threading.Tasks;

using Kritikos.Api.Models;

using Kritikos.Domain.Data;
using Kritikos.Domain.Models;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Kritikos.Api.Controllers
{
    [Authorize]
    [Route("[controller]")]
    public class UsersController : Controller
    {
        private KritikosContext context;
        private readonly UserManager<ApplicationUser> userManager;

        public UsersController(KritikosContext context, UserManager<ApplicationUser> userManager)
        {
            this.context = context;
            this.userManager = userManager;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IdentityResult> Register([FromBody] UserDto dto)
        {
            var user = new ApplicationUser { UserName = dto.Username, Email = dto.Email };
            var result = await userManager.CreateAsync(user, dto.Password);
            return result;
        }
    }
}
