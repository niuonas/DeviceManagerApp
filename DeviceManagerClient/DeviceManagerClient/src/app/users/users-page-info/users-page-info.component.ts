import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/users';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users-page-info',
  templateUrl: './users-page-info.component.html',
  styleUrls: ['./users-page-info.component.scss']
})
export class UsersPageInfoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  user$ = new Observable<User>();
  private userId = "";
  userRole = ""
  
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id') ?? "";

    this.user$ = this.userService.getUser$(+this.userId);
  }

  public getUserRoleName(user: User): string
  {
    this.userRole = "";
    
    if(user.role == "0")
    {
      this.userRole = "Admin";
    }
    else
    {
      this.userRole = "User"
    }

    return this.userRole;
  }

}
