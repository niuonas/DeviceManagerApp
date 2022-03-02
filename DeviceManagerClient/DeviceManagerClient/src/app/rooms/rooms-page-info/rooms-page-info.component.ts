import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Device } from 'src/app/shared/models/device';
import { Room } from 'src/app/shared/models/room';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-rooms-page-info',
  templateUrl: './rooms-page-info.component.html',
  styleUrls: ['./rooms-page-info.component.scss']
})
export class RoomsPageInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private roomService: RoomService) { }

  room$ = new Observable<Room>();
  deviceNames: any = [];
  private roomId = "";

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('id') ?? "";

    this.room$ = this.roomService.getRoom$(+this.roomId);
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

}
