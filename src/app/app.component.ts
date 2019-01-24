import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import mockup from '../assets/mockup.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
  title = 'timetracking';
  database=mockup; //currently links to a json file in ../assets
  databaseDump;
  debug: String;
  username: string;

  constructor(){
   this.databaseDump=JSON.stringify(this.database);
   //alert(this.databaseDump); 
   this.username="not logged in"
  }

  processGetRequest(): boolean{
   let url=window.location.href; 

   let topic=Number(this.getArgument('topic',url)); 
   let category=Number(this.getArgument('category',url));
   let location=this.getArgument('location',url); 
   let locationValue=this.getLocationValue(location);
   //let locationValue=0.0;
   
   let start=this.datetimeToTimestamp(this.getArgument('start',url)); 
   let end=this.datetimeToTimestamp(this.getArgument('end',url)); 
   
   //alert(location+" "+locationValue);
   let track={"user": 1.0,"topic": topic,"location": locationValue,"category": category, "start": start, "end": end, "report": "..."};
   this.database.tracks.push(track);
   
   return true; 
  }

  processFormRequest(topic,category,location,Start,End,user=1.0){
    let start=this.datetimeToTimestamp(Start); 
    let end=this.datetimeToTimestamp(End);  
    let locationValue=this.getLocationValue(location);
    let track={"user": user,"topic": topic,"location": locationValue,"category": category, "start": start, "end": end, "report": "..."};
    this.database.tracks.push(track);

    this.databaseDump=JSON.stringify(this.database);
    alert(this.databaseDump); 
  }

  datetimeToTimestamp(datetime: string): number{
    
    return Date.parse(datetime.replace("T"," "));
  }

  getLocationValue(arg): number{
   let x;
   this.database.location.map((l,i)=>{
                                      if(l==arg) 
                                       {x=i;}
                                     }); 
   return x;
  }
  getArgument(arg,url): string{
   let v=url.split(arg+"=");
   let x=v[1].split('&');
   return x[0];
  }

  ngOnInit(){
    let url=window.location.href;
    if(url.indexOf('process')>0){
      this.debug="get request is being processed";
      this.processGetRequest();
     }
    else
     {this.debug="app component idle";}
  }

  greetingsFromAppComponent(){
   alert('greetings from app component'); 
  }
  
}
