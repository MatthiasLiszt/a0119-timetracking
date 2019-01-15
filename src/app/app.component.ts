import { Component, OnInit } from '@angular/core';
import mockup from '../assets/mockup.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'timetracking';
  database=mockup; //currently links to a json file in ../assets
  databaseDump;
  debug: String;

  constructor(){
   this.databaseDump=JSON.stringify(this.database); 
  }

  processGetRequest(): boolean{
   let url=window.location.href; 

   let topic=parseInt(this.getArgument('topic',url)); 
   let category=parseInt(this.getArgument('category',url)); 
   //let start=this.datetimeToTimestamp(this.getArgument('start',url)); 
   let start=0;
   //let start=this.getArgument('start',url); 
   //let end=this.datetimeToTimestamp(this.getArgument('end',url)); 
   let end=3600000;
   let track={"topic": topic,"location": 0,"category": category, "start": start, "end": end, "report": "..."};
   this.database.tracks.push(track);
   
   return true; 
  }

  datetimeToTimestamp(datetime: string): Number{
    // supported format 02/13/2009 23:31:30
    return Date.parse(datetime.replace("%20"," ").replace("%2F","/").replace("%2F","/"));
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

  /*
  progState='logout'; //essential: switches between secreens
                     //possible states: login, timetracking, survey, logout
  login="LogIn";

 changeLoginState(){
  if(this.progState!='login') 
   {this.progState='logout';
    this.login="LogOut";
   }
  else
  {this.progState='login';
   this.login="LogIn";
  }
 }

 logInOutRedirect(){
   if(this.progState!="login") 
    {window.location.href="/login";}
   else
    {window.location.href="/";} 
 }
 */                   
}
