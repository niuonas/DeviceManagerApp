using Microsoft.EntityFrameworkCore.Migrations;

namespace DeviceManagerApp.Migrations
{
    public partial class UserDefault : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "EmailAddress", "FirstName", "LastName", "Password", "Role", "Salt", "Username" },
                values: new object[] { 1, "asdsa", "nicu", "mihai", "sdsd", 0, null, "sadd" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
