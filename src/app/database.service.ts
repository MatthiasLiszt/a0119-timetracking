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
  writeURL;
  readURL;
  recordDelete: Observable<any>;
  recordCreate: Observable<any>;

  constructor(private http: HttpClient) { 
   this.database=mockup; 
   this.writeURL="0.0.0.0";
   this.recordDelete=this.deleteTimeRecordRemote(entry) ;
   /*
   this.recordCreate.subscribe((value) => this.myValue = value,
                               (err) => {
                                         console.log("Got an error!");
                                         console.error(err);
                                        },
                              );
   */                           
   this.recordDelete.subscribe((value) => this.myValue = value,
                              (err) => {
                                        console.log("Got an error!");
                                        console.error(err);
                                       },
                             );
  
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
    return this.database.tracks;
  }

  createTimeRecordRemote(topic: number,category: number,location: string,Start: string,End: string,user=1.0){
    let data=this.createTimeRecord(topic,category,location,Start,End,user=1.0);
    return this.http.post(this.writeURL,data);
  }

  readTimeRecord(entry: number){
   //return {input: entry, httpCode: 200 ,output: this.database.tracks[entry]};
   return this.database.tracks[entry];
  }

  updateTimeRecord(entry: number){
    //return {input: entry, httpCode: 200 , output: this.database.tracks[entry] };
    return this.database.tracks[entry];
  }

  updateTimeRecordRemote(entry: number){
    //return {input: entry, httpCode: 200 , output: this.database.tracks[entry] };
    return this.database.tracks[entry];
  }

  deleteTimeRecord(entry: number){
   //if the user number < 0 then it is not a valid user and the entry is regarded as deleted 
   this.database.tracks[entry].user=-1;
   //return {input: entry, httpCode: 200 ,output: this.database.tracks[entry]};
   return this.database.tracks[entry];
  }

  deleteTimeRecordRemote(entry: number){
   this.deleteTimeRecord(entry);
   let data=this.database.tracks;
   return this.http.post(this.writeURL,data);
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
