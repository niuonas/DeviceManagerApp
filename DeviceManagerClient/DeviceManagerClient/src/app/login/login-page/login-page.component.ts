import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) {}

  public form: FormGroup = new FormGroup({});
  isWrong = false;

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ["",Validators.required],
      password: ["",Validators.required]
    });
  }
  

  public formControls(control: string) : FormControl{
    return this.form.get(control) as FormControl;
  }

  public onSubmit()
  {
    this.authService.login$(this.form.value.username, this.form.value.password).subscribe({
      next: value => {
        localStorage.setItem("user", JSON.stringify(value));
        this.router.navigate(["/homepage"]);
      },
      error: error => {
        this.isWrong = true;
      }
    })
  }
}
