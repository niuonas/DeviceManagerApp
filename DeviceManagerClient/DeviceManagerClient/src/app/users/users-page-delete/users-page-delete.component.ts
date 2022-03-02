import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-page-delete',
  templateUrl: './users-page-delete.component.html',
  styleUrls: ['./users-page-delete.component.scss']
})
export class UsersPageDeleteComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  public form: FormGroup = new FormGroup({});
  public userDeleteError: boolean = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      userId: ["", Validators.required]
    })
  }

  public formControls(control: string): FormControl{
    return this.form.get(control) as FormControl;
  }

  onSubmit()
  {
    this.userService.deleteUser$(this.form.value.userId).subscribe({
      next: value => {
        this.router.navigate(["/users"])
      },

      error: value => {
        this.userDeleteError = true;
      }
    });
  }

}
