import { HttpClient } from '@angular/common/http';
import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public login$(username: string, password: string)
  {
    return this.http.post("http://localhost:39531/api/Authentication/authenticate", {username,password});
  }

  public isUserLoggedIn(): boolean{
    const result = localStorage.getItem("user");

    if(result)
    {
      return true;
    }

    return false;
  }

  public getUserToken(): string{

    const token = JSON.parse(localStorage.getItem("user")?? '').token;

    console.log(token);
    return token;
  }
}
