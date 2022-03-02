import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-rooms-page-create',
  templateUrl: './rooms-page-create.component.html',
  styleUrls: ['./rooms-page-create.component.scss']
})
export class RoomsPageCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private roomsService: RoomService) { }

  public form: FormGroup = new FormGroup({});
  public roomNameIsEmpty: boolean = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      roomName: ["",Validators.required]
    });
  }

  public formControls(control: string) : FormControl{
    return this.form.get(control) as FormControl;
  }

  onSubmit()
  {
    if(this.form.value.roomName === "")
    {
      this.roomNameIsEmpty = true;
    }
    else {
      this.roomsService.createRoom$(this.form.value.roomName).subscribe({
        next: value => {
          console.log(value);
          this.router.navigate(["/rooms"]);
        }
      }
      )
    }
  }

}
