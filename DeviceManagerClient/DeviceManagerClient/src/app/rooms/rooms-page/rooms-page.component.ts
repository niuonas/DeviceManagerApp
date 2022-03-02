import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from 'src/app/shared/models/device';
import { Room } from 'src/app/shared/models/room';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-rooms-page',
  templateUrl: './rooms-page.component.html',
  styleUrls: ['./rooms-page.component.scss']
})
export class RoomsPageComponent implements OnInit {

  constructor(private roomService: RoomService) { }

  rooms: Observable<Room[]> = new Observable();
  deviceNames: any = [];
  freeOrOccupiedMessage: string = "Free";

  ngOnInit(): void {
    this.rooms = this.roomService.retrieveRoom$();
  }

  public getDeviceNames(devices: Device[]): string
  {
    this.deviceNames = [];
    console.log(devices.length);
    for(const device of devices)
    {
      this.deviceNames.push(device.deviceInformation);
    }

    return this.deviceNames.join(",");
  }

  public getFreeRooms(): void
  {
    if(this.freeOrOccupiedMessage === "Free")
    {
      this.rooms = this.roomService.getFreeRooms$();
      this.freeOrOccupiedMessage = "All";
    }
    else
    {
      this.rooms = this.roomService.retrieveRoom$();
      this.freeOrOccupiedMessage = "Free"
    }
    
  }
}
