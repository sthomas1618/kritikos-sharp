using Microsoft.AspNetCore.Mvc;

namespace Kritikos.UI.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
