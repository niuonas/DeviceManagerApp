import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DevicePageInfoComponent } from "./device-page-info/device-page-info.component";
import { DevicesPageAssignComponent } from "./devices-page-assign/devices-page-assign.component";
import { DevicesPageCreateComponent } from "./devices-page-create/devices-page-create.component";
import { DevicesPageDeleteComponent } from "./devices-page-delete/devices-page-delete.component";
import { DevicesPageComponent } from "./devices-page/devices-page.component";

const routes: Routes = [
    {path : "", component : DevicesPageComponent},
    {path: "create", component: DevicesPageCreateComponent},
    {path: "delete", component: DevicesPageDeleteComponent},
    {path: "assign", component: DevicesPageAssignComponent},
    {path: ":id", component: DevicePageInfoComponent}
];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class DeviceRoutingModule { }
  