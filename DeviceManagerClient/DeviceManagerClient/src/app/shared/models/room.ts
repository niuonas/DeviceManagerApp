import { Device } from '../models/device';

export interface Room{
    id: number;
    name: string;
    devices: Device[];
    maxDeviceCapacity: number;
}