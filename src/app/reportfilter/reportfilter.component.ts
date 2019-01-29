import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';



@Component({
  selector: 'app-reportfilter',
  templateUrl: './reportfilter.component.html',
  styleUrls: ['./reportfilter.component.scss']
})
export class ReportfilterComponent implements OnInit {

  database: Object;
  datetime: string;
  category: string;
  user: string;
  topic: string;
  location: string;

  /*
  constructor(datetime: string, category: string, user: string, topic: string, location: string,private databaseService: DatabaseService) { 
    this.database = this.databaseService.getData(); 
    this.datetime=datetime;
    this.category=category;
    this.user=user;
    this.topic=topic;
    this.location=location;
  }*/

  constructor(private databaseService: DatabaseService) { 
    this.database = this.databaseService.getData(); 
    
  }

  ngOnInit() {
    //this.category="category";
  }

  popup(x){
   alert(this.category);
  }
}
