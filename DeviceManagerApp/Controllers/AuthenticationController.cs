using DeviceManagerApp.DTOs;
using DeviceManagerApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace DeviceManagerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticateService _authService;

        public AuthenticationController(IAuthenticateService authenticateService)
        {
            _authService = authenticateService;
        }

        [HttpPost("authenticate")]
        [AllowAnonymous]
        public async Task<ActionResult> Authenticate(UserAuthenticateDTO userAuthenticate)
        {
            try
            {
                var user = await _authService.Authenticate(userAuthenticate.Username, userAuthenticate.Password);
                var token = _authService.GenerateToken(user);
                return Ok(new
                {
                    user,
                    Token = token
                });
            }

            catch (System.ArgumentException)
            {
                return Unauthorized("Wrong username or password");
            }
        }
    }
}
