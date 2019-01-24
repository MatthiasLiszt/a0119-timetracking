import { NgModule } from '@angular/core';
import { Routes, RouterModule , CanActivate } from '@angular/router';

import {AuthguardService as Authguard } from './authguard.service';

import { LoginComponent } from './login/login.component';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { SurveyComponent } from './survey/survey.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdaterecordComponent } from './updaterecord/updaterecord.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'timetracking', component: TimeTrackingComponent,/*canActivate: [Authguard]*/  },
  { path: 'report', component: SurveyComponent, /*canActivate: [Authguard]*/ },
  { path: 'report/:refreshed', component: SurveyComponent, /*canActivate: [Authguard]*/ },
  { path: 'logout', component: LogoutComponent},
  { path: 'update/:entry', component: UpdaterecordComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
