using System.ComponentModel.DataAnnotations;

namespace DeviceManagerApp.DTOs
{
    public class UserUpdatePasswordDTO
    {
        [Required]
        public string Password { get; set; }
    }
}
