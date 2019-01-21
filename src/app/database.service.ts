import { Injectable } from '@angular/core';
import mockup from '../assets/mockup.json';
import logData from '../assets/logdata.json';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';



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

  createTimeRecord(topic: number,category: number,location: string,Start: string,End: string,user=1.0){
    let start=this.datetimeToTimestamp(Start); 
    let end=this.datetimeToTimestamp(End);  
    let locationValue=this.getLocationValue(location);
    let track={"user": user,"topic": topic,"location": locationValue,"category": category, "start": start, "end": end, "report": "..."};
    this.database.tracks.push(track); 
    //return {input: track, httpCode: 200, output: this.database.tracks[this.database.tracks.length] };  
    return true;
  }

  readTimeRecord(entry: number){
   //return {input: entry, httpCode: 200 ,output: this.database.tracks[entry]};
   return this.database.tracks[entry];
  }

  updateTimeRecord(entry: number){
    //return {input: entry, httpCode: 200 , output: this.database.tracks[entry] };
    return this.database.tracks[entry];
  }

  deleteTimeRecord(entry: number){
   //if the user number < 0 then it is not a valid user and the entry is regarded as deleted 
   this.database.tracks[entry].user=-1;
   //return {input: entry, httpCode: 200 ,output: this.database.tracks[entry]};
   return this.database.tracks[entry];
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
