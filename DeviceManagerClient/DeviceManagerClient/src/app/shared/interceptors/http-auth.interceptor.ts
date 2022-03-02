import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes("Authentication/authenticate"))
    {
      return next.handle(request);
    }
    
    console.log(request);
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.authService.getUserToken()
      }
    })
  
    return next.handle(request); 
  }
}
