using DeviceManagerApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeviceManagerApp.Services
{
    public interface IDeviceService
    {
        public Task<Device> AddDevice(Device device);
        public Task DeleteDevice(int id);
        public Task<Device> GetDevice(int id);
        public Task<IEnumerable<Device>> GetDevices();
        public Task<IEnumerable<Device>> GetUnassignedDevices();
        public Task AssignDevice(int deviceId, int roomId);
    }
}
