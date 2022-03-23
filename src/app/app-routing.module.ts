import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './MyComponent/log-in/log-in.component';
import {  RegistrationComponent } from './MyComponent/registration/registration.component';
import { LogINNavComponent } from './MyComponent/log-innav/log-innav.component';
import { DashboardComponent } from './MyComponent/profile/dashboard/dashboard.component';
import { FirstpageComponent } from "./MyComponent/firstpage/firstpage.component";
import { YourGuardGuard } from './your-guard.guard';

const routes: Routes = [{
  path : "register",
  component : RegistrationComponent
},
{
  path : "login",
  component :LogInComponent
}
,
{
  path : "dashboard",
  component :DashboardComponent,
  canActivate: [YourGuardGuard]
}
,
{
  path :"",
  component : FirstpageComponent
}
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) 
  ]
})
export class AppRoutingModule { }
