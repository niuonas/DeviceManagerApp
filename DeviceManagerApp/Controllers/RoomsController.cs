using Microsoft.AspNetCore.Mvc;
using DeviceManagerApp.Models;
using System.Threading.Tasks;
using DeviceManagerApp.Services;
using System.Collections.Generic;
using DeviceManagerApp.DTOs;
using DeviceManagerApp.Helpers;
using DeviceManagerApp.Constants;

namespace DeviceManagerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Role = Roles.Admin)]
    public class RoomsController : ControllerBase
    {
        private readonly IRoomService _roomService;

        public RoomsController(IRoomService roomService)
        {
            _roomService = roomService;
        }

        [HttpPost]
        public async Task<ActionResult<Room>> PostRoom(RoomCreateDTO room)
        {
            await _roomService.AddRoom(room);
            return Ok(room);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteRoom(int id)
        {
            await _roomService.DeleteRoom(id);
            return Ok(id);
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Room>>> GetRooms()
        {
            var rooms = await _roomService.GetRooms();
            return Ok(rooms);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Room>> GetRoom(int id)
        {
            var room = await _roomService.GetRoom(id);
            return room;
        }

        [HttpGet("name/{id}")]
        public async Task<ActionResult<string>> GetRoomName(int id)
        {
            var room = await _roomService.GetRoom(id);
            return room.Name;
        }

        [HttpGet("free")]
        public async Task<ActionResult<List<Room>>> GetFreeRooms()
        {
            var freeRooms = await _roomService.GetFreeRooms();
            return Ok(freeRooms);
        }

        [HttpPatch("room{roomId}/capacity{maxDeviceCapacity}")]
        public async Task<ActionResult> SetMaxDeviceCapacity(int roomId, int maxDeviceCapacity)
        {
            await _roomService.UpdateDeviceCapacity(roomId, maxDeviceCapacity);
            return Ok();
        }
    }
}
