import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/shared/services/room.service';

@Component({
  selector: 'app-rooms-page-change-capacity',
  templateUrl: './rooms-page-change-capacity.component.html',
  styleUrls: ['./rooms-page-change-capacity.component.scss']
})
export class RoomsPageChangeCapacityComponent implements OnInit {

  constructor(private fb:FormBuilder, private router: Router, private roomService: RoomService, private route: ActivatedRoute) { }

  public form: FormGroup = new FormGroup({});
  private roomId = "";

  ngOnInit(): void {
    this.form = this.fb.group({
      newCapacity: ["", Validators.required]
    });

    this.roomId = this.route.snapshot.paramMap.get('id') ?? "";
  }

  public formControls(control: string): FormControl
  {
    return this.form.get(control) as FormControl;
  }

  onSubmit()
  {
    this.roomService.changeMaxCapacity$(+this.roomId, this.form.value.newCapacity).subscribe({
      next: value => {
        console.log(value);
        this.router.navigate(["/rooms"]);
      }
    })
    
  }
}
