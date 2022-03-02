import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient) { }

  public retrieveRoom$(): Observable<Room[]>
  {
    return this.http.get<Room[]>("http://localhost:39531/api/Rooms");
  }

  public createRoom$(roomName: string): Observable<any>
  {
    return this.http.post<any>("http://localhost:39531/api/Rooms", {name: roomName});
  }

  public deleteRoom$(roomId: number): Observable<any>
  {
    return this.http.delete<any>("http://localhost:39531/api/Rooms/" + roomId);
  }

  public getFreeRooms$(): Observable<Room[]>
  {
    return this.http.get<Room[]>("http://localhost:39531/api/Rooms/free");
  }

  public getRoom$(roomId: number): Observable<Room>
  {
    return this.http.get<Room>("http://localhost:39531/api/Rooms/" + roomId)
  }

  public changeMaxCapacity$(roomId: number, maxCapacity: number): Observable<any>
  {
    return this.http.patch<any>("http://localhost:39531/api/Rooms/room"+roomId+"/capacity" + maxCapacity,{})
  }
}
