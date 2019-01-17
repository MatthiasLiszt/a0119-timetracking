import { Component, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-logcheck',
  templateUrl: './logcheck.component.html',
  styleUrls: ['./logcheck.component.sass']
})
export class LogcheckComponent implements OnInit {
  
  logData;

  constructor(private databaseService: DatabaseService) { 
   this.logData=this.databaseService.getLogData();
  }

  /*
  ngOnInit() {
    //alert(this.route.params['logname'].jwt);
    var w=window.location.href;
    var p=w.split('=');
    var n=p[1].split('&'); 
    //alert(n[0]);
    this.username=n[0];
  }
  */
  ngOnInit(){
    
  }

  // returns userNumber when loginHash has been found
  // otherwise returns null
  checkLogin(logHash: string){
   let logFound: boolean=false;
   let userNumber: number; 
   this.logData.map(function(x){if(x.loginHash==logHash)
                                 {logFound=true;
                                  userNumber=x.userNumber;
                                 }
                               });
   if(logFound)
    {return userNumber;}
   else
    {return null;} 
  }
}
