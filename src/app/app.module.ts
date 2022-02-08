import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInComponent } from './MyComponent/log-in/log-in.component';
import { RegistrationComponent } from './MyComponent/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { LogINNavComponent } from './MyComponent/log-innav/log-innav.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrationComponent,
    LogINNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
