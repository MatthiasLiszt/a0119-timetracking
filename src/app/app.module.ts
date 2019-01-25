import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';
import { SurveyComponent } from './survey/survey.component';
import { LogoutComponent } from './logout/logout.component';


import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { UpdaterecordComponent } from './updaterecord/updaterecord.component';
import { AppbarComponent } from './appbar/appbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TimeTrackingComponent,
    SurveyComponent,
    LogoutComponent,
    
    UpdaterecordComponent,
    AppbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
  
    MatIconModule,
    MatCardModule,
    MatTabsModule,
  
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    RouterModule.forRoot([]),
    FormsModule
  ],
  exports: [AppbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


