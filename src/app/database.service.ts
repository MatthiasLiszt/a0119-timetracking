import { Injectable } from '@angular/core';
import mockup from '../assets/mockup.json';
import logData from '../assets/logdata.json';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

export interface TimeRecord {
  "entry": number,
  "user": string,
  "topic": string,
  "location": string,
  "category": string,
  "start": string,
  "end": string,
  "report": string,
  "delete": boolean
}

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
    this.database = mockup;
    this.writeURL = "0.0.0.0";
    this.readURL = "127.0.0.1:8080/mockup.json";
  }

  
  getData() {
    return mockup;
  }
  
  getDataRemote() {
   return this.http.get(this.readURL);
  }
  /*
  fetchRemoteData(){
   let fetch=this.getDataRemote(); 
   fetch.subscribe((data) => this.database = data
                  );
  }*/
  
  getLogData() {
    return logData;
  }

  recordDeleteObservable(entry: number, url: string) {
    this.recordDelete = this.deleteTimeRecordRemote(entry, url);
    this.recordDelete.subscribe((value) => this.database = value,
      (err) => {
        console.log("Got an error!");
        console.error(err);
      },
    );
  }

  recordCreateObservable(topic: number, category: number, location: string, Start: string, End: string, user = 1.0, url: string) {
    this.recordCreate = this.createTimeRecordRemote(topic, category, location, Start, End, user, url);
    this.recordCreate.subscribe((value) => this.database = value,
      (err) => {
        console.error(err);
      },
    );
  }

  createTimeRecord(topic: number, category: number, location: string, Start: string, End: string, user = 1.0, url: string) {
    let start = this.datetimeToTimestamp(Start);
    let end = this.datetimeToTimestamp(End);
    let locationValue = this.getLocationValue(location);
    let track = { "user": user, "topic": topic, "location": locationValue, "category": category, "start": start, "end": end, "report": "..." };
    this.database.tracks.push(track);
    //return {input: track, httpCode: 200, output: this.database.tracks[this.database.tracks.length] };  
    return this.database.tracks;
  }

  createTimeRecordRemote(topic: number, category: number, location: string, Start: string, End: string, user = 1.0, url: string) {
    let data = this.createTimeRecord(topic, category, location, Start, End, user = 1.0, url);
    return this.http.post(url, data);
  }

  readTimeRecord(entry: number) {
    //return {input: entry, httpCode: 200 ,output: this.database.tracks[entry]};
    return this.database.tracks[entry];
  }

  updateTimeRecord(entry: number) {
    //return {input: entry, httpCode: 200 , output: this.database.tracks[entry] };
    return this.database.tracks[entry];
  }

  updateTimeRecordRemote(entry: number) {
    //return {input: entry, httpCode: 200 , output: this.database.tracks[entry] };
    return this.database.tracks[entry];
  }

  deleteTimeRecord(entry: number) { // changed in T10 !!! review
    //if the user number < 0 then it is not a valid user and the entry is regarded as deleted 
    //this.database.tracks[entry].user = -1;
    this.database.tracks[entry].delete=true;
    //return {input: entry, httpCode: 200 ,output: this.database.tracks[entry]};
    return this.database.tracks[entry];
  }

  deleteTimeRecordRemote(entry: number, url: string): Observable<TimeRecord[]> {
    this.deleteTimeRecord(entry);
    let data = this.database.tracks;
    return this.http.post<TimeRecord[]>(url, data);
  }

  datetimeToTimestamp(datetime: string): number {

    return Date.parse(datetime.replace("T", " "));
  }

  getLocationValue(arg): number {
    let x;
    this.database.location.map((l, i) => {
      if (l == arg) { x = i; }
    });
    return x;
  }

}
