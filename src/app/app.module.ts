import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LogInComponent } from './MyComponent/log-in/log-in.component';
import { RegistrationComponent } from './MyComponent/registration/registration.component';
import { AppRoutingModule } from './app-routing.module';
import { LogINNavComponent } from './MyComponent/log-innav/log-innav.component';
import { HomeComponent } from './MyComponent/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './MyComponent/profile/dashboard/dashboard.component';
import { StartComponent } from './MyComponent/start/start.component';
import { VariablesComponent } from './shared/variables/variables.component';
import { FirstpageComponent } from './MyComponent/firstpage/firstpage.component';
import { PofilenavComponent } from './MyComponent/profile/pofilenav/pofilenav.component';
import { DasheditComponent } from './MyComponent/profile/dashedit/dashedit.component';
import { InfoComponent } from './MyComponent/profile/info/info.component';
import { FullworkComponent } from './MyComponent/profile/fullwork/fullwork.component';
import { WorkeditComponent } from './MyComponent/profile/workedit/workedit.component';
import { WorkinfoComponent } from './MyComponent/profile/workinfo/workinfo.component';
import { EdueditComponent } from './MyComponent/profile/eduedit/eduedit.component';
import { EducationComponent } from './MyComponent/profile/education/education.component';
import { VolunteereditComponent } from './MyComponent/profile/volunteeredit/volunteeredit.component';
import { VolunteerComponent } from './MyComponent/profile/volunteer/volunteer.component';
import { VolunteerinfoComponent } from './MyComponent/profile/volunteerinfo/volunteerinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegistrationComponent,
    LogINNavComponent,
    HomeComponent,
    DashboardComponent,
    StartComponent,
    VariablesComponent,
    FirstpageComponent,
    PofilenavComponent,
    DasheditComponent,
    InfoComponent,
    FullworkComponent,
    WorkeditComponent,
    WorkinfoComponent,
    EdueditComponent,
    EducationComponent,
    VolunteereditComponent,
    VolunteerComponent,
    VolunteerinfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [VariablesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
