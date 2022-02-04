import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogInComponent } from './MyComponent/log-in/log-in.component';
import { RegistrationComponent } from './MyComponent/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
