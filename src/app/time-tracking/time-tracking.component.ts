import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {NgForm} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import {DatabaseService} from '../database.service';

@Component({
  selector: 'app-time-tracking',
  templateUrl: './time-tracking.component.html',
  styleUrls: ['./time-tracking.component.sass']
})
export class TimeTrackingComponent implements OnInit {
  
  location: string;
  database;
  crud;
  
  //parent;
  
  constructor(private databaseService: DatabaseService) 
    { this.location="Wien";
      this.database=this.databaseService.getData();
      this.crud=this.databaseService;
    }
  
  
 onSubmit(ttform: NgForm){
  let topic=ttform.value.topic;
  let category=ttform.value.category;
  let start=ttform.value.start;
  let end=ttform.value.end;
  this.crud.createTimeRecord(topic,category,this.location,start,end);

 } 

  ngOnInit() {
    
  }

}
