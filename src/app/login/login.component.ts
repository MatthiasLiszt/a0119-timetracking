import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { DatabaseService } from '../database.service';
//import { AppComponent } from '../app.component';


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
                                   //alert(x.loginHash);
                                  }
                                });
    if(logFound)
     {localStorage.setItem('timetrackingapp', JSON.stringify(userNumber));
      return userNumber;}
    else
     {return null;} 
   }

  
   errorMessageHandler(error,logdata): string{
    let message: string; 
    if(logdata.length>0)
     {if(error === null)
       {message=this.errorMessage="wrong username or password";}
      else
       {message=this.errorMessage="login successfull";} 
     }
    else
     {message=this.errorMessage="Sorry the service is currently not available";}   
    return message; 
   }

  onSubmit(loginForm: NgForm){
   let logHash = loginForm.value.logname+loginForm.value.logpw;
   this.errorMessageHandler(this.checkLogin(logHash),this.logData.data);
   
   
  } 
}
