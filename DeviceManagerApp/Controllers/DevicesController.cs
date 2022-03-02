using DeviceManagerApp.Helpers;
using DeviceManagerApp.Models;
using DeviceManagerApp.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using DeviceManagerApp.Constants;

namespace DeviceManagerApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Role = Roles.Admin)]
    public class DevicesController : ControllerBase
    {
        private readonly IDeviceService _deviceService;

        public DevicesController(IDeviceService deviceService)
        {
            _deviceService = deviceService;
        }

        [HttpPost]
        public async Task<ActionResult<Device>> PostDevice(Device device)
        {
            await _deviceService.AddDevice(device);
            return Ok(device);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteRoom(int id)
        {
            await _deviceService.DeleteDevice(id);
            return Ok();
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Device>>> GetDevices()
        {
            var devices = await _deviceService.GetDevices();
            return Ok(devices);
        }

        [HttpGet("free")]
        public async Task<ActionResult<List<Room>>> GetUnassignedDevices()
        {
            var devices = await _deviceService.GetUnassignedDevices();
            return Ok(devices);
        }

        [HttpPatch("device/{deviceId}/room/{roomId}")]
        public async Task<ActionResult> AssignDeviceToRoom(int deviceId, int roomId)
        {
            await _deviceService.AssignDevice(deviceId, roomId);
            return Ok();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Device>> GetDevice(int id)
        {
            var device = await _deviceService.GetDevice(id);
            return device;
        }
    }
 
        
}
