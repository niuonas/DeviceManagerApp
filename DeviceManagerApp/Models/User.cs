using DeviceManagerApp.Constants;
using System.ComponentModel.DataAnnotations;

namespace DeviceManagerApp.Models
{
    public class User
    { 
        public int Id { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string EmailAddress { get; set; }
        public string FirstName { get; set; } = "";
        public string LastName { get; set; } = "";
        public string Salt { get; set; }
        public Roles Role { get; set; }
    }
}
