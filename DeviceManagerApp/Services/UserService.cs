using DeviceManagerApp.Data;
using DeviceManagerApp.DTOs;
using DeviceManagerApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace DeviceManagerApp.Services
{
    public class UserService : IUserService
    {
        private readonly DeviceManagerAppContext _context;

        public UserService(DeviceManagerAppContext context)
        {
            _context = context;
        }

        public async Task<User> AddUser(User user)
        {
            var isUsernameUnique = await _context.Users.FirstOrDefaultAsync(u => u.Username.Equals(user.Username));

            if(isUsernameUnique == null)
            {
                string saltPassword = HashPassword(user.Password, out string saltString);

                user.Salt = saltString;
                user.Password = saltPassword;
                _context.Users.Add(user);

                await _context.SaveChangesAsync();
                return user;
            }
            else
            {
                throw new ArgumentException("Username or password already used. Try another combination!");
            }
        }

        public async Task DeleteUser(int id)
        {
            var user = await GetUser(id);
            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> GetUser(int id)
        {
            var searchResult = await _context.Users.FindAsync(id);

            if(searchResult == null)
            {
                throw new KeyNotFoundException("No user exists exists with the following id: " + id);
            }
            else
            {
                return searchResult;
            }
        }

        public async Task<User> GetUserByUsername(string username)
        {
            var searchResult = await _context.Users.FirstOrDefaultAsync(u => u.Username.Equals(username));

            if (searchResult == null)
            {
                throw new KeyNotFoundException("No user exists exists with the following username: " + username);
            }
            else
            {
                return searchResult;
            }
        }

        public async Task<User> UpdateUserDetails(UserUpdateDTO user, int id)
        {

            var _user = await GetUser(id);
            _user.FirstName = user.FirstName;
            _user.LastName = user.LastName;
            await _context.SaveChangesAsync();

            return _user;
        }

        public async Task<User> UpdatePassword(UserUpdatePasswordDTO userPassword, int userId)
        {
            var userToBeUpdated = await GetUser(userId);

            string saltPassword = HashPassword(userPassword.Password, out string saltString);

            bool passwordCheck = await CheckIfPasswordsMatch(userPassword.Password, userToBeUpdated.Id);

            if (passwordCheck == false)
            {
                userToBeUpdated.Salt = saltString;
                userToBeUpdated.Password = saltPassword;
            }
            else
            {
                throw new ArgumentException("This password was used in the past. Pick another one!");
            }

            await _context.SaveChangesAsync();
            return userToBeUpdated;
        }

        public string HashPassword(string password, out string saltString)
        { 
            byte[] salt;
            new RNGCryptoServiceProvider().GetBytes(salt = new byte[16]);

            var pbkdf2 = new Rfc2898DeriveBytes(password, salt, 10000);
            byte[] hash = pbkdf2.GetBytes(20);

            var passwordString = Convert.ToBase64String(hash);
            saltString = Convert.ToBase64String(salt);

            return passwordString;
        }

        public string HashPassword(string salt, string password)
        {
            byte[] _salt = Convert.FromBase64String(salt);

            var pbkdf2 = new Rfc2898DeriveBytes(password, _salt, 10000);
            byte[] hash = pbkdf2.GetBytes(20);

            var hashTest = Convert.ToBase64String(hash);

            return hashTest;
        }

        public async Task<User> UpdateEmailAdress(UserUpdateEmailDTO userEmail, int userId)
        {
            var userToBeUpdated = await GetUser(userId);

            userToBeUpdated.EmailAddress = userEmail.EmailAddress;

            await _context.SaveChangesAsync();

            return userToBeUpdated;
        }

        public async Task<bool> CheckIfPasswordsMatch(string password, int userId)
        {
            var user = await GetUser(userId);

            var userEnteredPassword = HashPassword(user.Salt, password);

            if(user.Password.Equals(userEnteredPassword))
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
