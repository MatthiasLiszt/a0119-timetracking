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
  offFilter;
  categoryFilter;
  locationFilter;
  topicFilter;
  userFilter;
  datetimeFilter;

  constructor(parentComponent: AppComponent) { 
    this.database=parentComponent; 
    this.offFilter=999;
    let off=this.offFilter;
    this.categoryFilter=off;
    this.userFilter=off;
    this.topicFilter=off;
    this.locationFilter=off;
    this.datetimeFilter=off;
  }
 
  ngOnInit() {
   let off=this.offFilter;
   this.reportlist=this.generateReportList(off,off,off,off,off); 
  }

  setCategoryFilter(x){
   //alert('category changed to '+x);
   this.categoryFilter=x;
   this.reportlist=this.generateReportList(x,this.userFilter,this.topicFilter,this.locationFilter,this.datetimeFilter);
  }

  setTopicFilter(x){
    this.topicFilter=x; 
    this.reportlist=this.generateReportList(this.categoryFilter,this.userFilter,x,this.locationFilter,this.datetimeFilter);
  }

  setLocationFilter(x){
    this.locationFilter=x;
    this.reportlist=this.generateReportList(this.categoryFilter,this.userFilter,this.topicFilter,x,this.datetimeFilter);
  }

  setUserFilter(x){
    this.userFilter=x;
    this.reportlist=this.generateReportList(this.categoryFilter,x,this.topicFilter,this.locationFilter,this.datetimeFilter);
  }

  setDatetimeFilter(x){
    let daylength=3600*24*1000;
    this.datetimeFilter=Date.parse(x) - (Date.parse(x)%daylength);
    //alert("datetime "+this.datetimeFilter);
    this.reportlist=this.generateReportList(this.categoryFilter,this.userFilter,this.topicFilter,this.locationFilter,this.datetimeFilter);
  }

  getDatetimeString(v): string{
   let d=new Date(v);

   return d.toISOString().replace("T"," ").replace("Z"," ");
  }

  generateReportList(Ctgy,User,Topic,Place,Datetime){ 
   //let tracks=this.database.tracks;
   let list=[];
   //alert('param '+Ctgy+' '+User+' '+Topic+' '+Place);
   //alert('generate report');                        
   //alert(this.database.database.tracks[0].user);
   //alert(this.database.database.tracks.length);
   for(let i=0;i<this.database.database.tracks.length;++i)
    {let e=this.database.database.tracks[i];
     
     let user=this.database.database.user[e.user];
     let category=this.database.database.category[e.category];
     let location=this.database.database.location[e.location];
     let topic=this.database.database.topic[e.topic];
     let entryStart=this.getDatetimeString(e.start);
     let entryEnd=this.getDatetimeString(e.end);
     
     let daylength=3600*24*1000;
     let day=e.start-(e.start%daylength);

     let readableEntry=[i,user,category,location,topic,e.report,entryStart,entryEnd];
     let off=this.offFilter;
     let catFullFilled=(Ctgy==e.category)||(Ctgy==off);
     let userFullFilled=(User==e.user)||(User==off);
     let locationFullFilled=(Place==e.location)||(Place==off);
     let topicFullFilled=(Topic==e.topic)||(Topic==off);
     let datetimeFullFilled=(Datetime==day)||(Datetime==off);
     
     //alert(Datetime+"-"+day);

     let c=catFullFilled.toString();
     let u=userFullFilled.toString();
     let l=locationFullFilled.toString();
     let t=topicFullFilled.toString(); 
     //alert('filter '+c+u+l+t);
     if(catFullFilled&&userFullFilled&&locationFullFilled&&topicFullFilled/*&&datetimeFullFilled*/)
      {list.push(readableEntry);}
     else
      {/*alert('entry not matching ctgy '+Ctgy+' ...');*/}      
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
