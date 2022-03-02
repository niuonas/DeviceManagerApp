using DeviceManagerApp.Constants;
using Microsoft.AspNetCore.Mvc;

namespace DeviceManagerApp.Helpers
{
    public interface IJwtServices
    {
        public JsonResult ValidateToken(string token, Roles Role);
    }
}
