using DeviceManagerApp.Constants;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.Linq;

namespace DeviceManagerApp.Helpers
{
    public class AuthorizeAttribute : Attribute, IAuthorizationFilter
    {
        public Roles Role { get; set; }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            try
            {
                var jwtService = (JWTServices)context.HttpContext.RequestServices.GetService(typeof(IJwtServices));

                var token = context.HttpContext.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

                var result = jwtService.ValidateToken(token, Role);

                if (result != null)
                {
                    return; 
                }
                else
                {
                    context.Result = result;
                    //throw new UnauthorizedAccessException();
                }
            }
            catch(Exception exception)
            {
                throw exception;
            }
            
        }
    }
}
