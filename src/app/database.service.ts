import { Injectable } from '@angular/core';
import mockup from '../assets/mockup.json';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  
  database: Object;

  constructor() { }

  getData(){
   this.database=mockup;
   return mockup;
  }

}
