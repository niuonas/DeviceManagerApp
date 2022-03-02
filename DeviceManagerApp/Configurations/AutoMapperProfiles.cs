using AutoMapper;
using DeviceManagerApp.DTOs;
using DeviceManagerApp.Models;

namespace DeviceManagerApp.Configurations
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<RoomCreateDTO, Room>().ReverseMap();
            CreateMap<User, UserUpdateDTO>().ReverseMap();
        }
    }
}
