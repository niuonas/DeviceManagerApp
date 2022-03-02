import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Device } from 'src/app/shared/models/device';
import { DeviceService } from 'src/app/shared/services/device.service';

@Component({
  selector: 'app-devices-page',
  templateUrl: './devices-page.component.html',
  styleUrls: ['./devices-page.component.scss']
})
export class DevicesPageComponent implements OnInit {

  constructor(private deviceService: DeviceService, private router: Router) { }

  devices: Observable<Device[]> = new Observable();
  hideShowText: string = "Free";

  ngOnInit(): void {
    this.devices = this.deviceService.retrieveDevices$();
  }


  freeDevices(): void
  {
    if(this.hideShowText === "Free")
    {
      this.devices = this.deviceService.getFreeDevices$();
      this.hideShowText = "All";
    }
    else
    {
      this.devices = this.deviceService.retrieveDevices$();
      this.hideShowText = "Free";
    }
    
  }
}
