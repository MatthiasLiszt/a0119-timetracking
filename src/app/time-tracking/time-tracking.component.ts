import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.sass']
})
export class TimeTrackingComponent implements OnInit {
  
  location: String;
  constructor() { this.location="somewhere predefined";}

  ngOnInit() {
  }

}
