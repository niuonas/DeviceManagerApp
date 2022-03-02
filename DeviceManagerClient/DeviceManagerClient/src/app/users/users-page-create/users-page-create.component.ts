import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-page-create',
  templateUrl: './users-page-create.component.html',
  styleUrls: ['./users-page-create.component.scss']
})
export class UsersPageCreateComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private userService: UserService) { }

  public form: FormGroup = new FormGroup({});
  public usernameEmpty: boolean = false;
  public passwordEmpty: boolean = false;
  public emailAddressEmpty: boolean = false;
  public errorAddingUser: boolean = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ["",Validators.required],
      password: ["", Validators.required],
      emailAddress: ["", Validators.required]
    });
  }

  public formControls(control: string): FormControl{
    return this.form.get(control) as FormControl;
  }

  onSubmit()
  {
    this.usernameEmpty = false;
    this.passwordEmpty = false;
    this.emailAddressEmpty = false;
    
    if(this.form.value.username === "")
    {
      this.usernameEmpty = true;
    }
    else if(this.form.value.password === "")
    {
      this.passwordEmpty = true;
    }
    else if(this.form.value.emailAddress === "")
    {
      this.emailAddressEmpty = true
    }
    else
    {
      this.userService.createUser$(this.form.value.username, this.form.value.password, this.form.value.emailAddress).subscribe({
        next: value => {
          this.router.navigate(["/users"]);
        },
        error: value => {
          this.errorAddingUser = true;
        }
      })
    }
  }

}
