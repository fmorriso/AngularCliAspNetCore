using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AngularCliAspNetCore.Controllers
{
  public class HomeController : Controller
  {

    [HttpPost]
    public async Task<IActionResult> MyTest()
    {
      string result = string.Empty;
      await Task.Run(() =>
      {
        result = "Your post worked";

      });
      return Json(result);
    }

    [HttpPost]
    public async Task<IActionResult> MyTestAsync()
    {
      string test;
      string result = string.Empty;
      await Task.Run(()=>
      {
        result = "Your post worked, asynchronously";

      });
      return Json(result);
    }
  }
}
