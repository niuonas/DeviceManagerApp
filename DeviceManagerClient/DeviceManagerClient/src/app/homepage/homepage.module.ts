import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
