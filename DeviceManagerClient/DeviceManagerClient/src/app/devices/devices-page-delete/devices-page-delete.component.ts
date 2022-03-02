import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeviceService } from 'src/app/shared/services/device.service';

@Component({
  selector: 'app-devices-page-delete',
  templateUrl: './devices-page-delete.component.html',
  styleUrls: ['./devices-page-delete.component.scss']
})
export class DevicesPageDeleteComponent implements OnInit, OnDestroy {
  sub!: Subscription;


  constructor(private fb: FormBuilder, private router: Router, private deviceService: DeviceService) { }

  public form: FormGroup = new FormGroup({});
  public deviceIdIsEmpty: boolean = false;


  ngOnInit(): void {
    this.form = this.fb.group({
      deviceId: ["",Validators.required]
    });
  }

  public formControls(control: string): FormControl{
    return this.form.get(control) as FormControl;
  }

  onSubmit()
  {
    console.log(this.form.value.deviceInformation);

    this.sub = this.deviceService.deleteDevice$(this.form.value.deviceId).subscribe({
      next: value => {
        this.router.navigate(["/devices"]);
      },
      error: error => {
        this.deviceIdIsEmpty = true;
      }
    })
  }

  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

}
