import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page/users-page.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UsersPageCreateComponent } from './users-page-create/users-page-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersPageDeleteComponent } from './users-page-delete/users-page-delete.component';
import { UsersPageInfoComponent } from './users-page-info/users-page-info.component';
import { UsersPageChangeNameComponent } from './users-page-change-name/users-page-change-name.component';
import { UsersPageChangePasswordComponent } from './users-page-change-password/users-page-change-password.component';



@NgModule({
  declarations: [
    UsersPageComponent,
    UsersPageCreateComponent,
    UsersPageDeleteComponent,
    UsersPageInfoComponent,
    UsersPageChangeNameComponent,
    UsersPageChangePasswordComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersPageComponent
  ]
})
export class UsersModule { }
