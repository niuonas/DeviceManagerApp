using DeviceManagerApp.Constants;
using DeviceManagerApp.DTOs;
using DeviceManagerApp.Helpers;
using DeviceManagerApp.Models;
using DeviceManagerApp.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeviceManagerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Role = Roles.Admin)]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _userService;

        public UsersController(IUserService userService)
        {
            _userService = userService;
        }


        [HttpPost]
        public async Task<ActionResult<User>> PostUser(User user)
        {
            await _userService.AddUser(user);
            return Ok(user);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            var users = await _userService.GetUsers();
            return Ok(users);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = await _userService.GetUser(id);
            return Ok(user);
        }

        [HttpPatch("user/{id}")]
        public async Task<ActionResult<User>> PatchName(UserUpdateDTO user, int id)
        {
            var _user = await _userService.UpdateUserDetails(user, id);
            return Ok(_user);
        }

        [HttpPatch("password/{userId}")]
        public async Task<ActionResult<User>> PatchPassword(UserUpdatePasswordDTO userPassword, int userId)
        {
            var user = await _userService.UpdatePassword(userPassword, userId);
            return Ok(user);
        }

        [HttpPatch("email/{userId}")]
        public async Task<ActionResult<User>> PatchEmail(UserUpdateEmailDTO userEmail, int userId)
        {
            var user = await _userService.UpdateEmailAdress(userEmail, userId);
            return Ok(user);
        }

        [HttpDelete("{userId}")]
        public async Task<ActionResult> DeleteUser(int userId)
        {
            await _userService.DeleteUser(userId);
            return Ok(userId);
        }
    }
}
