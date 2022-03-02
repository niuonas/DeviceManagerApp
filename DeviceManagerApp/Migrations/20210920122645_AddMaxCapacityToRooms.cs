using Microsoft.EntityFrameworkCore.Migrations;

namespace DeviceManagerApp.Migrations
{
    public partial class AddMaxCapacityToRooms : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte>(
                name: "MaxDeviceCapacity",
                table: "Rooms",
                type: "tinyint",
                nullable: false,
                defaultValue: (byte)0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MaxDeviceCapacity",
                table: "Rooms");
        }
    }
}
