import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.sass']
})
export class TimeTrackingComponent implements OnInit {
  
  location: String;
  database;
  databaseDump;

  constructor(parentComponent: AppComponent) 
    { this.location="somewhere predefined";
      this.database=parentComponent;
      this.databaseDump=JSON.stringify(this.database);
    }

  ngOnInit() {
    
  }

}
