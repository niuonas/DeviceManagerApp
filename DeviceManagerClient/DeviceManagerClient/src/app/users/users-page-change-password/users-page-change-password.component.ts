import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-page-change-password',
  templateUrl: './users-page-change-password.component.html',
  styleUrls: ['./users-page-change-password.component.scss']
})
export class UsersPageChangePasswordComponent implements OnInit {

  constructor(private fb:FormBuilder, private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  public form: FormGroup = new FormGroup({});
  public userId = "";
  private activeUserId = "";
  public canChange: boolean = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      newPassword: ["", Validators.required]
    })

    this.userId = this.route.snapshot.paramMap.get('id') ?? "";
    this.activeUserId = JSON.parse(localStorage.getItem('user') ?? '').user.id;

    if(this.activeUserId == this.userId)
    {
      this.canChange = true;
    }
    else
    {
      this.canChange = false;
    }
  }

  public formControls(control: string): FormControl{
    return this.form.get(control) as FormControl;
  }

  onSubmit()
  {
    this.userService.patchPassword$(+this.userId, this.form.value.newPassword).subscribe({
      next: value => {
        this.router.navigate(["users/" + this.userId])
      }
    })
  }

}
