import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { LoginGuard } from './shared/guards/login.guard';
import { LoginpageGuard } from './shared/guards/loginpage.guard';

const routes: Routes = [
  {path : "login", component : LoginPageComponent, canActivate: [LoginpageGuard]},
  {path: "homepage", loadChildren: () => import("./homepage/homepage.module").then(m => m.HomepageModule), canActivate: [LoginGuard]},
  {path: "rooms", loadChildren: () => import("./rooms/rooms.module").then(m => m.RoomsModule), canActivate: [LoginGuard]},
  {path: "devices", loadChildren: () => import("./devices/devices.module").then(m => m.DevicesModule), canActivate: [LoginGuard]},
  {path: "users", loadChildren: () => import("./users/users.module").then(m => m.UsersModule), canActivate: [LoginGuard]},
  {path : "", redirectTo : "login", pathMatch: "full"},
  {path:"**", redirectTo: "homepage", pathMatch: "full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
