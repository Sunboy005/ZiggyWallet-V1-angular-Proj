
import { Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { IndexComponent } from "./components/index/index.component";

export const appRoutes:Routes=[
    {path:"",component:IndexComponent},
    {path:"home",component:IndexComponent},
    {path:"dashboard",component:DashboardComponent}
]