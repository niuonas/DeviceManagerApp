import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PageComponent } from './page/page.component';





@NgModule({
  declarations: [
    ButtonComponent,
    InputFieldComponent,
    NavBarComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    ButtonComponent,
    InputFieldComponent,
    NavBarComponent,
    PageComponent
  ]
  
  
})
export class SharedModule { }
