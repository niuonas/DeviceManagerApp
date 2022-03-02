using DeviceManagerApp.DTOs;
using DeviceManagerApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DeviceManagerApp.Services
{
    public interface IRoomService
    {
        public Task<Room> AddRoom(RoomCreateDTO room);
        public Task DeleteRoom(int id);
        public Task<Room> GetRoom(int id);
        public Task<IEnumerable<Room>> GetRooms();
        public Task<IEnumerable<Room>> GetFreeRooms();
        public Task UpdateDeviceCapacity(int roomId, int maxDeviceCapacity);
    }
}
