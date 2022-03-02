import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-page-change-name',
  templateUrl: './users-page-change-name.component.html',
  styleUrls: ['./users-page-change-name.component.scss']
})
export class UsersPageChangeNameComponent implements OnInit {

  constructor(private fb:FormBuilder, private router: Router, private userService: UserService, private route: ActivatedRoute) { }

  public form: FormGroup = new FormGroup({});
  private userId = "";

  ngOnInit(): void {
    this.form = this.fb.group({
      lastName: ["", Validators.required],
      firstName: ["", Validators.required]
    })

    this.userId = this.route.snapshot.paramMap.get('id') ?? "";
  }

  public formControls(control: string): FormControl
  {
    return this.form.get(control) as FormControl;
  }

  onSubmit()
  {
    this.userService.patchFirstLastName$(+this.userId, this.form.value.lastName, this.form.value.firstName).subscribe({
      next: value => {
        this.router.navigate(["/users"])
      }
    })
  }

}
