using DeviceManagerApp.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace DeviceManagerApp.Services
{
    public class AuthenticateService : IAuthenticateService
    {
        private readonly IUserService _userService;

        public AuthenticateService(IUserService userService)
        {
            _userService = userService;
        }
        public async Task<User> Authenticate(string userName, string password)
        {
            var user = await _userService.GetUserByUsername(userName);

            if (await _userService.CheckIfPasswordsMatch(password, user.Id))
            {
                return user;
            }
            else
            {
                throw new ArgumentException("Wrong username or password!");
            }
        }

        public string GenerateToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("4b7da104-251f-4132-a2e0-cfe0b8575136");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { 
                    new Claim("username", user.Username.ToString()),
                    new Claim("role", user.Role.ToString()),
                    new Claim("id", user.Id.ToString()) }),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
