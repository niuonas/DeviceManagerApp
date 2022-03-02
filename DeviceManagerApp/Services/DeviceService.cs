using DeviceManagerApp.Data;
using DeviceManagerApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeviceManagerApp.Services
{
    public class DeviceService : IDeviceService
    {
        private readonly DeviceManagerAppContext _context;
        private readonly IRoomService _roomService;

        public DeviceService(DeviceManagerAppContext context, IRoomService roomService)
        {
            _context = context;
            _roomService = roomService;
        }
       
        public async Task<Device> AddDevice(Device device)
        {
            _context.Devices.Add(device);
            await _context.SaveChangesAsync();

            return device;
        }

        public async Task AssignDevice(int deviceId, int roomId)
        {
            var room = await _roomService.GetRoom(roomId);
            var device = await GetDevice(deviceId);

            if(room.Devices.Contains(device))
            {
                throw new ArgumentException("The device number: " + device.Id + " is already assigned to the room: " + room.Id);
            }
            else
            {
                room.Devices.Add(device);
                device.RoomId = room.Id;
                await _context.SaveChangesAsync();
            }
        }

        public async Task DeleteDevice(int id)
        {
            var device = await GetDevice(id);
            _context.Devices.Remove(device);
            await _context.SaveChangesAsync();
        }

        public async Task<Device> GetDevice(int id)
        {
            var searchResult = await _context.Devices.FindAsync(id);

            if(searchResult == null)
            {
                throw new KeyNotFoundException("No device exists exists with the following id: " + id);
            }
            else
            {
                return searchResult;
            }
        }

        public async Task<IEnumerable<Device>> GetDevices()
        {
            return await _context.Devices.ToListAsync();
        }

        public async Task<IEnumerable<Device>> GetUnassignedDevices()
        {
            return await _context.Devices.Where(devices => devices.RoomId == null).ToListAsync();
        }
    }
}
