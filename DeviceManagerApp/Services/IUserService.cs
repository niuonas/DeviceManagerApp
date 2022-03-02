using DeviceManagerApp.DTOs;
using DeviceManagerApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeviceManagerApp.Services
{
    public interface IUserService
    {
        public Task<User> AddUser(User user);
        public Task DeleteUser(int id);
        public Task<User> GetUser(int id);
        public Task<User> UpdateUserDetails(UserUpdateDTO user, int id);
        public Task<IEnumerable<User>> GetUsers();
        public Task<User> UpdatePassword(UserUpdatePasswordDTO userPassword, int userId);
        public Task<User> UpdateEmailAdress(UserUpdateEmailDTO userEmail, int userId);
        public string HashPassword(string password, out string salt);
        public Task<User> GetUserByUsername(string username);
        public Task<bool> CheckIfPasswordsMatch(string password, int userId);
        public string HashPassword(string salt, string password);
    }
}
