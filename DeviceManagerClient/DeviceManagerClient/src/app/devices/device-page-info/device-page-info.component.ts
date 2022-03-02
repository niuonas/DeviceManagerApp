import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { Device } from 'src/app/shared/models/device';
import { DeviceService } from 'src/app/shared/services/device.service';

@Component({
  selector: 'app-device-page-info',
  templateUrl: './device-page-info.component.html',
  styleUrls: ['./device-page-info.component.scss']
})
export class DevicePageInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private deviceService: DeviceService) { }

  device$ = new Observable<Device>();
  private deviceId = "";

  ngOnInit(): void {
    this.deviceId = this.route.snapshot.paramMap.get('id') ?? "";

    this.device$ = this.deviceService.getDevice$(+this.deviceId);
  }

}
