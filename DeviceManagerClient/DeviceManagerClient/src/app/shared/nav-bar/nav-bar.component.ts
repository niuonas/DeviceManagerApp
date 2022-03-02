import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logOff(): void{
    if(this.authService.isUserLoggedIn())
    {
      console.log(this.authService.isUserLoggedIn());
      
      localStorage.removeItem("user");
    }
  }

}
