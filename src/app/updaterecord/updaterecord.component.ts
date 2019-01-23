import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import {NgForm} from '@angular/forms';
//import { FormGroup, FormBuilder } from '@angular/forms';
import {DatabaseService} from '../database.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs';

@Component({
  selector: 'app-updaterecord',
  templateUrl: './updaterecord.component.html',
  styleUrls: ['./updaterecord.component.sass']
})
export class UpdaterecordComponent implements OnInit {

  crud: DatabaseService;
  database;
  location: string;
  entry: number;
  //updateForm: FormGroup;

  sortedTopic;

  constructor(private databaseService: DatabaseService,private route: ActivatedRoute/*private fb: FormBuilder*/) {
    
    this.database=this.databaseService.getData();
    this.crud=this.databaseService;
    this.entry=0;
    let timeRecord=this.crud.readTimeRecord(this.entry);
    //this.location=timeRecord.location;
    //this.category=timeRecord.category;

  }

  /*
  onSubmit(udform: NgForm){
    let topic=udform.value.topic;
    let category=udform.value.category;
    let start=udform.value.start;
    let end=udform.value.end;
    //this.crud.updateTimeRecord(topic,category,this.location,start,end);
    
   }
  */  

  ngOnInit() {
   //this.updateForm=this.fb.group({categoryControl: ['consulting']});
   this.route.params   
      .subscribe(p => {
         //alert(JSON.stringify(p));
         this.entry=parseInt(p.entry);
         //alert(this.entry);
      });

      
  }

  sortTopics(entry: number,dbase){
   let sorted=[];
   dbase.tracks[entry].topic;
  }
}
