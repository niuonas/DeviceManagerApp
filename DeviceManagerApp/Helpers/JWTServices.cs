using DeviceManagerApp.Constants;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;

namespace DeviceManagerApp.Helpers
{
    public class JWTServices : IJwtServices
    {
        private readonly IConfiguration _configuration;
        private string tokenSecret;

        public JWTServices(IConfiguration configuration)
        {
            _configuration = configuration;
            tokenSecret = _configuration.GetValue<string>("AppSettings:TokenKey");
        }

        public JsonResult ValidateToken(string token, Roles Role)
        {
            if(string.IsNullOrEmpty(token))
            {
                return null;
            }

            var tokenHandler = new JwtSecurityTokenHandler();

            var key = Encoding.ASCII.GetBytes(tokenSecret);

            tokenHandler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
            }, out SecurityToken validatedToken);



            var jwtToken = (JwtSecurityToken)validatedToken;
            var tokenRole = jwtToken.Claims.First(c => c.Type.Equals("role")).Value;
            var claimedRole = Enum.Parse(typeof(Roles), tokenRole);

            if (!claimedRole.Equals(Role))
            {
                return new JsonResult(new { message = "Unauthorized" }) { StatusCode = StatusCodes.Status401Unauthorized };
            }
            else
            {
                return null;
            }
        }
    }
}
