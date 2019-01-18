import { Injectable } from '@angular/core';
import mockup from '../assets/mockup.json';
import logData from '../assets/logdata.json';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
   
  database;

  constructor() { 
   this.database=mockup; 
  }

  getData(){
   return mockup;
  }

  getLogData(){
   return logData;
  }

  createTimeRecord(topic,category,location,Start,End,user=1.0){
    let start=this.datetimeToTimestamp(Start); 
    let end=this.datetimeToTimestamp(End);  
    let locationValue=this.getLocationValue(location);
    let track={"user": user,"topic": topic,"location": locationValue,"category": category, "start": start, "end": end, "report": "..."};
    this.database.tracks.push(track); 

  }

  readTimeRecord(){

  }

  updateTimeRecord(){

  }

  deleteTimeRecord(){

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

}
