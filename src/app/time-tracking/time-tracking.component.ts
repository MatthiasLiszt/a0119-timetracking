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
  
  location: String;
  database;
  
  //parent;
  
  constructor(private databaseService: DatabaseService/*parentComponent: AppComponent*/) 
    { this.location="Wien";
      //this.parent=this.database=parentComponent;
      this.database=this.databaseService.getData();
    }
  
  /*
  onSubmit(ttform: NgForm){
    //alert(JSON.stringify(ttform));
    //alert(ttform.value.topic);
    //this.parent.greetingsFromAppComponent();
    
    let topic=ttform.value.topic;
    let category=ttform.value.category;
    let location=ttform.value.location;
    let start=ttform.value.start;
    let end=ttform.value.end;

    this.parent.processFormRequest(topic,category,location,start,end);
   }
  */
 onSubmit(ttform: NgForm){
   //let topic=ttform.value.topic;
 } 

  ngOnInit() {
    
  }

}
