import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.sass']
})
export class SurveyComponent implements OnInit {

 
  
  database;
  reportlist;
  categoryFilter=999;// 999 means filter turned off
  userFilter=999;
  locationFilter=999;
  topicFilter=999;

  constructor(parentComponent: AppComponent) { 
    this.database=parentComponent; 
   
  }

  ngOnInit() {
   
   this.reportlist=this.generateReportList(0,0,0,0); 
  }

  setCategoryFilter(x){
   alert('category changed to '+x);
   this.categoryFilter=x;
  }

  setTopicFilter(x){
    this.topicFilter=x; 
  }

  setLocationFilter(x){
    this.locationFilter=x;
  }

  setUserFilter(x){
    this.userFilter=x;
  }

  generateReportList(category,user,topic,location){ 
   //let tracks=this.database.tracks;
   let list=[];
   
   //alert('generate report');                        
   //alert(this.database.database.tracks[0].user);
   //alert(this.database.database.tracks.length);
   for(let i=0;i<this.database.database.tracks.length;++i)
    {let e=this.database.database.tracks[i];
     //let entry=[i,e.user,e.category,e.location,e.topic,e.report];
     let user=this.database.database.user[e.user];
     let category=this.database.database.category[e.category];
     let location=this.database.database.location[e.location];
     let topic=this.database.database.topic[e.topic];
     let readableEntry=[i,user,category,location,topic,e.report];
     list.push(readableEntry);     
    } 
   /*
   this.database.database.tracks.map(function(e,i){let entry={entry: i, user: e.user, category: e.category, 
                                       location: e.location, topic: e.topic, 
                                       report: e.report};
                            list.push(entry);
                           });
    */                                              
   
   
   return list;
  } 

}
