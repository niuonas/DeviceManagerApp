import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesPageComponent } from './devices-page/devices-page.component';
import { DeviceRoutingModule } from './devices-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DevicesPageCreateComponent } from './devices-page-create/devices-page-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DevicesPageDeleteComponent } from './devices-page-delete/devices-page-delete.component';
import { DevicePageInfoComponent } from './device-page-info/device-page-info.component';
import { DevicesPageAssignComponent } from './devices-page-assign/devices-page-assign.component';




@NgModule({
  declarations: [
    DevicesPageComponent,
    DevicesPageCreateComponent,
    DevicesPageDeleteComponent,
    DevicePageInfoComponent,
    DevicesPageAssignComponent
  ],
  imports: [
    CommonModule,
    DeviceRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DevicesPageComponent
  ]
})
export class DevicesModule { }
