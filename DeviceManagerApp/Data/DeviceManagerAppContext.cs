using DeviceManagerApp.Constants;
using DeviceManagerApp.Models;
using Microsoft.EntityFrameworkCore;

namespace DeviceManagerApp.Data
{
    public class DeviceManagerAppContext : DbContext
    {
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Device> Devices { get; set; }
        public DbSet<User> Users { get; set; }

        public DeviceManagerAppContext (DbContextOptions<DeviceManagerAppContext> options)
            : base(options)
        {
        }

        
        protected override void OnModelCreating(ModelBuilder builder)
        {
            //sets the username column to be unique
            builder.Entity<User>()
                .HasIndex(u => u.Username)
                .IsUnique();

            //creates a new entry every time the database is created
            builder.Entity<User>().HasData(new User { FirstName = "nicu", EmailAddress = "asdsa", LastName = "mihai", Password = "sdsd", Username = "sadd", Role = Roles.Admin,Id=1 });
        }
       
    }
}
