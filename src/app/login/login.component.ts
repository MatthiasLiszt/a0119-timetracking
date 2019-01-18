import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

/* //in case it does not show up again
export class LoginComponent implements OnInit{
 constructor(){}

 ngOnInit(){}
}
*/

export class LoginComponent implements OnInit {

  errorMessage: string;
  logData;

  constructor(private databaseService: DatabaseService) { 
   this.logData=this.databaseService.getLogData();
   this.errorMessage="";
  }

  ngOnInit() {
    
  }

  // returns userNumber when loginHash has been found
  // otherwise returns null
  checkLogin(logHash: string){
    let logFound: boolean=false;
    let userNumber: number; 
    this.logData.data.map(function(x){if(x.loginHash==logHash)
                                  {logFound=true;
                                   userNumber=x.userNumber;
                                   alert(x.loginHash);
                                  }
                                });
    if(logFound)
     {return userNumber;}
    else
     {return null;} 
   }

  onSubmit(loginForm: NgForm){
   
   let logHash = loginForm.value.logname+loginForm.value.logpw;
   let error=this.checkLogin(logHash);
   
   if(error === null)
    {this.errorMessage="username or password not found";}
   else
    {this.errorMessage="login successfull";} 
  } 
}
