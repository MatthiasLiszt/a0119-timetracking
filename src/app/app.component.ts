import { Component, OnInit } from '@angular/core';
import mockup from '../assets/mockup.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent implements OnInit{
  title = 'timetracking';
  database=mockup; //currently links to a json file in ../assets
  databaseDump;
  debug: String;
  username: string;

  constructor(){
   this.databaseDump=JSON.stringify(this.database);
   
   this.username="not logged in";
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
    
  }

  
}
