import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsPageComponent } from './rooms-page/rooms-page.component';
import { RoomsRoutingModule } from './rooms-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RoomsPageCreateComponent } from './rooms-page-create/rooms-page-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoomsPageDeleteComponent } from './rooms-page-delete/rooms-page-delete.component';
import { RoomsPageInfoComponent } from './rooms-page-info/rooms-page-info.component';
import { RoomsPageChangeCapacityComponent } from './rooms-page-change-capacity/rooms-page-change-capacity.component';



@NgModule({
  declarations: [
    RoomsPageComponent,
    RoomsPageCreateComponent,
    RoomsPageDeleteComponent,
    RoomsPageInfoComponent,
    RoomsPageChangeCapacityComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RoomsPageComponent
  ]
})
export class RoomsModule { }
