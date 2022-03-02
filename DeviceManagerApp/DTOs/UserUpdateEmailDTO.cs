using System.ComponentModel.DataAnnotations;

namespace DeviceManagerApp.DTOs
{
    public class UserUpdateEmailDTO
    {
        [Required]
        public string EmailAddress { get; set; }
    }
}
