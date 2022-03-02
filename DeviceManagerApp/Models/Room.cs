using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DeviceManagerApp.Models
{
    public class Room
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public List<Device> Devices { get; set; } = new List<Device>();
        public int MaxDeviceCapacity { get; set; }
    }
}
