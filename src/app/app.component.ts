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

  ngOnInit(){
    
  }

  
}
