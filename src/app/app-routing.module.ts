import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { SurveyComponent } from './survey/survey.component';
import { AppComponent } from './app.component';
import { LogoutComponent } from './logout/logout.component';
import { LogcheckComponent } from './logcheck/logcheck.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logcheck', component: LogcheckComponent },
  { path: 'timetracking', component: TimeTrackingComponent },
  { path: 'survey', component: SurveyComponent},
  { path: 'process', component: AppComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
