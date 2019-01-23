import { Injectable } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(/*public jwtHelper: JwtHelperService*/) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('timetrackingapp');
    // Check whether the token is expired and return
    // true or false
    //return !this.jwtHelper.isTokenExpired(token); // somehow not working as expected
    if(token === 'something')
     {alert('valid token'); return true;}
    else 
     {alert('false token');return false;} 
  }
}
