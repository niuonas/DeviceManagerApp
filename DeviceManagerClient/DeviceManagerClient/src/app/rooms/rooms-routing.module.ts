import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoomsPageChangeCapacityComponent } from "./rooms-page-change-capacity/rooms-page-change-capacity.component";
import { RoomsPageCreateComponent } from "./rooms-page-create/rooms-page-create.component";
import { RoomsPageDeleteComponent } from "./rooms-page-delete/rooms-page-delete.component";
import { RoomsPageInfoComponent } from "./rooms-page-info/rooms-page-info.component";
import { RoomsPageComponent } from "./rooms-page/rooms-page.component";

const routes: Routes = [
    {path : "", component : RoomsPageComponent},
    {path : "create", component:RoomsPageCreateComponent},
    {path : "delete", component:RoomsPageDeleteComponent},
    {path : ":id/capacity", component: RoomsPageChangeCapacityComponent},
    {path : ":id", component:RoomsPageInfoComponent}
  
];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class RoomsRoutingModule { }
  