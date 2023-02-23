import { Routes } from "@angular/router";
import { AboutComponent } from "./app/sidebarOptions/about/about.component";
import { ChartsComponent } from "./app/sidebarOptions/charts/charts.component";
import { DashboardComponent } from "./app/sidebarOptions/dashboard/dashboard.component";

export const appRoutes : Routes =[
    {path:'dashboard',component:DashboardComponent},
    {path:'charts',component:ChartsComponent},
    {path:'about',component:AboutComponent},
    // setting up a default path
    {path:'',redirectTo:'/dashboard',pathMatch:'full'}
]