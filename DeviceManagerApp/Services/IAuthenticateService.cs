using DeviceManagerApp.Models;
using System.Threading.Tasks;

namespace DeviceManagerApp.Services
{
    public interface IAuthenticateService
    {
        public Task<User> Authenticate(string userName, string password);
        public string GenerateToken(User user);
    }
}
