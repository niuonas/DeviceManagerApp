import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/users';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: Observable<User[]> = new Observable();

  ngOnInit(): void {
    this.users = this.userService.retrieveUser$();
  }

}
