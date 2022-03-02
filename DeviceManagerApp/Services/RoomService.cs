using AutoMapper;
using DeviceManagerApp.Data;
using DeviceManagerApp.DTOs;
using DeviceManagerApp.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DeviceManagerApp.Services
{
    public class RoomService : IRoomService
    {
        private readonly DeviceManagerAppContext _context;
        private readonly IMapper _mapper;
        
        public RoomService(DeviceManagerAppContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<Room> AddRoom(RoomCreateDTO roomDTO)
        {   
            var room = _mapper.Map<Room>(roomDTO);
            _context.Rooms.Add(room);
            await _context.SaveChangesAsync();
            
            return room;
        }

        public async Task DeleteRoom(int id)
        {
            var room = await GetRoom(id);
            _context.Rooms.Remove(room);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Room>> GetFreeRooms()
        {
            return await _context.Rooms.Where(room => room.Devices.Any() == false).ToListAsync();
        }

        public async Task<Room> GetRoom(int id)
        {
            var searchResult = await _context.Rooms.Include(room => room.Devices).FirstOrDefaultAsync(r => r.Id == id);

            if(searchResult == null)
            {
                throw new KeyNotFoundException("No room exists with the following id: " + id);
            }
            else
            {
                return searchResult;
            }
        }

        public async Task<IEnumerable<Room>> GetRooms()
        {
            return await _context.Rooms.Include(room => room.Devices).ToListAsync();
        }

        public async Task UpdateDeviceCapacity(int roomId, int maxDeviceCapacity)
        {
            var room = await GetRoom(roomId);
            room.MaxDeviceCapacity = maxDeviceCapacity;
            await _context.SaveChangesAsync();
        }
    }
}
