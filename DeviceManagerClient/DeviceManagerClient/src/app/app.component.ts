import { Component } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DeviceManagerClient';

  /**
   *
   */
  constructor(private authService: AuthenticationService) {
    
    
  }

  public isLoggedIn()
  {
    return this.authService.isUserLoggedIn();
  }
}
