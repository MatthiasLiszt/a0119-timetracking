import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { LogcheckComponent } from '../logcheck/logcheck.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  logcheck;

  constructor(logcheckComponent: LogcheckComponent) { 
   this.logcheck=logcheckComponent; 
   this.errorMessage="";
  }

  ngOnInit() {
    
  }

  onSubmit(loginForm: NgForm){
   let logHash = loginForm.value.logname+loginForm.value.logpw;
   //let error=this.logcheck.checkLogin(logHash);
   let error=null;
   if(error === null)
    {this.errorMessage="username or password not found";}
   else
    {this.errorMessage="login successfull";} 
  } 
}
