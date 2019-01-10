import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.sass']
})
export class SurveyComponent implements OnInit {

  category;
  user;
  topic;
  location;  
  test: string;

  constructor() { 
    //this.category=`<select><option value=0>category</option></select>`;
    this.category=['category','',''];
    this.user=['user','',''];
    this.topic=['topic','',''];
    this.location=['location','',''];
   this.test=`<h1>hollaradio</h1>`;
  }

  ngOnInit() {
   
  }

}