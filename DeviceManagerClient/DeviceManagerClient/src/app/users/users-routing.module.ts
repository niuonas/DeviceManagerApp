import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersPageChangeNameComponent } from "./users-page-change-name/users-page-change-name.component";
import { UsersPageChangePasswordComponent } from "./users-page-change-password/users-page-change-password.component";
import { UsersPageCreateComponent } from "./users-page-create/users-page-create.component";
import { UsersPageDeleteComponent } from "./users-page-delete/users-page-delete.component";
import { UsersPageInfoComponent } from "./users-page-info/users-page-info.component";
import { UsersPageComponent } from "./users-page/users-page.component";

const routes: Routes = [
    {path : "", component : UsersPageComponent},
    {path : "create", component: UsersPageCreateComponent},
    {path : "delete", component: UsersPageDeleteComponent},
    {path: ":id/name", component: UsersPageChangeNameComponent},
    {path: ":id/pass", component: UsersPageChangePasswordComponent},
    {path: ":id", component: UsersPageInfoComponent}
  
];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class UsersRoutingModule { }
  