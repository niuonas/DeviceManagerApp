import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthenticationService } from './shared/services/authentication.service';
import { HomepageModule } from './homepage/homepage.module';
import { DevicesModule } from './devices/devices.module';
import { RoomsModule } from './rooms/rooms.module';
import { UsersPageComponent } from './users/users-page/users-page.component';
import { UsersModule } from './users/users.module';
import { HttpAuthInterceptor } from './shared/interceptors/http-auth.interceptor';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LoginModule,
    HttpClientModule,
    HomepageModule,
    DevicesModule,
    RoomsModule,
    UsersModule
  ],
  providers:[
    AuthenticationService,
    {
        provide:HTTP_INTERCEPTORS,
        useClass: HttpAuthInterceptor,
        multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
