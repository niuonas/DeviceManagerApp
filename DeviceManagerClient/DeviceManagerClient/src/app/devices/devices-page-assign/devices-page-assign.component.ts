import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/shared/services/device.service';

@Component({
  selector: 'app-devices-page-assign',
  templateUrl: './devices-page-assign.component.html',
  styleUrls: ['./devices-page-assign.component.scss']
})
export class DevicesPageAssignComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private deviceService: DeviceService) { }

  public form: FormGroup = new FormGroup({});
  public assignError: boolean = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      deviceId: ["", Validators.required],
      roomId: ["",Validators.required]
    })
  }

  public formControls(control: string): FormControl{
    return this.form.get(control) as FormControl;
  }

  onSubmit()
  {
    return this.deviceService.assignDeviceToRoom$(this.form.value.deviceId, this.form.value.roomId).subscribe({
      next: value =>{
        this.router.navigate(["/devices"]);
      },
      error: value =>{
        this.assignError = true;
      }
    })
  }

}
