import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'timetracking';
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
                    
}
