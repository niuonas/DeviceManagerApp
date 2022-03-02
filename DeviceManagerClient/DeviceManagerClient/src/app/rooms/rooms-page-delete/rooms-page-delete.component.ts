import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-rooms-page-delete',
  templateUrl: './rooms-page-delete.component.html',
  styleUrls: ['./rooms-page-delete.component.scss']
})
export class RoomsPageDeleteComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private roomService: RoomService) { }

  public form: FormGroup = new FormGroup({});
  public roomIdIsEmpty: boolean = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      roomId: ["",Validators.required]
    })
  }

  public formControls(control: string): FormControl{
    return this.form.get(control) as FormControl;
  }

  onSubmit()
  {
    return this.roomService.deleteRoom$(this.form.value.roomId).subscribe({
      next: value => {
        this.router.navigate(["/rooms"]);
      },

      error: error => {
        this.roomIdIsEmpty = true;
      }
    })
  }

}
