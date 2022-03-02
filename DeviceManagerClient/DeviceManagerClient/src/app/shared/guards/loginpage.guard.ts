import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})

export class LoginpageGuard implements CanActivate {
  constructor(private authService: AuthenticationService, private router: Router)
  {
  
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const result = this.authService.isUserLoggedIn();

    if(result)
    {
      if(state.url.includes("/login"))
      {
        this.router.navigate(["/homepage"]);
      }
    }
  

    return true;
  }
  
}
