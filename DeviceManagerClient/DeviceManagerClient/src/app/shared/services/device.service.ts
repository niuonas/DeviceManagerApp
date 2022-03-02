import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device } from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  public retrieveDevices$(): Observable<Device[]>
  {
    return this.http.get<Device[]>("http://localhost:39531/api/Devices");
  }

  public createDevice$(deviceName: string): Observable<any>
  {
    return this.http.post<any>("http://localhost:39531/api/Devices", {deviceInformation: deviceName})
  }

  public deleteDevice$(deviceId: number): Observable<any>
  {
    return this.http.delete<any>("http://localhost:39531/api/Devices/" + deviceId)
  }
  
  public getDeviceInfo$(deviceId: number): Observable<Device>
  {
    return this.http.get<Device>("http://localhost:39531/api/Devices/" + deviceId);
  }

  public assignDeviceToRoom$(deviceId: number, roomId: number): Observable<any>
  {
    return this.http.patch<any>("http://localhost:39531/api/Devices/device/"+ deviceId +"/room/" + roomId, {})
  }

  public getFreeDevices$(): Observable<Device[]>
  {
    return this.http.get<Device[]>("http://localhost:39531/api/Devices/free");
  }

  public getDevice$(deviceId: number): Observable<Device>
  {
    return this.http.get<Device>("http://localhost:39531/api/Devices/" + deviceId);
  }
}
