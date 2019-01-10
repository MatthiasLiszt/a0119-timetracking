import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { SurveyComponent } from './survey/survey.component';
import { LogoutComponent } from './logout/logout.component';
import { LogcheckComponent } from './logcheck/logcheck.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimeTrackingComponent,
    SurveyComponent,
    LogoutComponent,
    LogcheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
    //RouterModule //.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }

