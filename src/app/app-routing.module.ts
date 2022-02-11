import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './MyComponent/log-in/log-in.component';
import {  RegistrationComponent } from './MyComponent/registration/registration.component';
import { LogINNavComponent } from './MyComponent/log-innav/log-innav.component';

const routes: Routes = [{
  path : "register",
  component : RegistrationComponent
},
{
  path : "login",
  component :LogInComponent
}

];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes) 
  ]
})
export class AppRoutingModule { }
