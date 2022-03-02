import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public retrieveUser$(): Observable<User[]>
  {
    return this.http.get<User[]>("http://localhost:39531/api/Users");
  }

  public createUser$(username: string, password: string, emailAddress: string): Observable<any>
  {
    return this.http.post<any>("http://localhost:39531/api/Users",{username: username, password: password, emailAddress: emailAddress})
  }

  public deleteUser$(userId: number): Observable<any>
  {
    return this.http.delete<any>("http://localhost:39531/api/Users/" + userId);
  }

  public getUser$(userId: number): Observable<User>
  {
    return this.http.get<User>("http://localhost:39531/api/Users/" + userId);
  }

  public patchFirstLastName$(userId: number, lastName: string, firstName: string): Observable<any>
  {
    return this.http.patch<any>("http://localhost:39531/api/Users/user/" + userId, {lastName: lastName, firstName: firstName})
  }

  public patchPassword$(userId: number, password: string): Observable<any>
  {
    return this.http.patch<any>("http://localhost:39531/api/Users/password/" + userId,{password: password})
  }
}
