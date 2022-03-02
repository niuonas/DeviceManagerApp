import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/shared/services/device.service';

@Component({
  selector: 'app-devices-page-create',
  templateUrl: './devices-page-create.component.html',
  styleUrls: ['./devices-page-create.component.scss']
})
export class DevicesPageCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private deviceService: DeviceService) { }

  public form: FormGroup = new FormGroup({});
  public deviceNameIsEmpty: boolean = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      deviceInformation: ["",Validators.required]
    });
  }

  public formControls(control: string) : FormControl{
    return this.form.get(control) as FormControl;
  }

  onSubmit()
  {
    console.log(this.form.value.deviceInformation);
    
    if(this.form.value.deviceInformation === "")
    {
      this.deviceNameIsEmpty = true;
    }
    else
    {
      this.deviceService.createDevice$(this.form.value.deviceInformation).subscribe(value => {
        console.log(value);
          this.router.navigate(["/devices"]);
      })
    }
    
  }

}
