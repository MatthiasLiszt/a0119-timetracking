import { Injectable } from '@angular/core';
import mockup from '../assets/mockup.json';
import logData from '../assets/logdata.json';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
   
  constructor() { }

  getData(){
   return mockup;
  }

  getLogData(){
   return logData;
  }

}
