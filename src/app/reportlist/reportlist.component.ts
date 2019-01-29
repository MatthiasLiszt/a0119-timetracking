import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
//import { ShortdatePipe } from '../shortdate.pipe';

@Component({
  selector: 'app-reportlist',
  templateUrl: './reportlist.component.html',
  styleUrls: ['./reportlist.component.scss']
})
export class ReportlistComponent implements OnInit {

  database;
  crud: DatabaseService;
  dummy; // just for testing


  constructor(private databaseService: DatabaseService) { 
    this.database = this.databaseService.getData();  
    this.crud = this.databaseService;
  }

  ngOnInit() {

  }

  deleteTimeRecord(entry: number) {
    if (confirm('Are you sure you want to delete entry ' + entry + ' ?')) {
      this.database.tracks[entry]=this.crud.deleteTimeRecord(entry);
      alert('your entry has been deleted');
    }
    else { alert('entry has not been changed'); }
  }

  isDeleted(entry: number){
   return !this.database.tracks[entry].delete;
  }
}
