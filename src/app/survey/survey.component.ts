import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { DatabaseService } from '../database.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.sass']
})
export class SurveyComponent implements OnInit {



  database;
  reportlist;
  offFilter: number;
  categoryFilter: number;
  locationFilter: number;
  topicFilter: number;
  userFilter: number;
  datetimeFilter: number;
  crud: DatabaseService;
  refreshed: number;

  constructor(private databaseService: DatabaseService, public router: Router/*parentComponent: AppComponent*/) {
    //this.database=parentComponent; 
    this.database = this.databaseService.getData();
    this.crud = this.databaseService;
    this.offFilter = 999;
    let off = this.offFilter;
    this.categoryFilter = off;
    this.userFilter = off;
    this.topicFilter = off;
    this.locationFilter = off;
    this.datetimeFilter = off;
    this.refreshed = 1;
  }

  ngOnInit() {
    let off = this.offFilter;
    //alert(JSON.stringify(this.database.tracks));
    this.reportlist = this.generateReportList(off, off, off, off, off);
  }

  setCategoryFilter(x) {
    //alert('category changed to '+x);
    this.categoryFilter = x;
    this.reportlist = this.generateReportList(x, this.userFilter, this.topicFilter, this.locationFilter, this.datetimeFilter);
  }

  setTopicFilter(x) {
    this.topicFilter = x;
    this.reportlist = this.generateReportList(this.categoryFilter, this.userFilter, x, this.locationFilter, this.datetimeFilter);
  }

  setLocationFilter(x) {
    this.locationFilter = x;
    this.reportlist = this.generateReportList(this.categoryFilter, this.userFilter, this.topicFilter, x, this.datetimeFilter);
  }

  setUserFilter(x) {
    this.userFilter = x;
    this.reportlist = this.generateReportList(this.categoryFilter, x, this.topicFilter, this.locationFilter, this.datetimeFilter);
  }

  setDatetimeFilter(x) {
    let daylength = 3600 * 24 * 1000;
    this.datetimeFilter = Date.parse(x) - (Date.parse(x) % daylength);
    //alert("datetime "+this.datetimeFilter);
    this.reportlist = this.generateReportList(this.categoryFilter, this.userFilter, this.topicFilter, this.locationFilter, this.datetimeFilter);
  }

  getDatetimeString(v): string {
    let d = new Date(v);

    //return d.toISOString().replace("T"," ").replace("Z"," ");
    let dateOnly = d.toISOString().split("T")[0];
    let rest = d.toISOString().split("T")[1];
    let hour = rest.split(":")[0];
    let minutes = rest.split(":")[1];
    return dateOnly + "T" + hour + ":" + minutes;
  }

  generateReportList(Ctgy: number, User: number, Topic: number, Place: number, Datetime: number) {
    let list = [];

    for (let i = 0; i < this.database.tracks.length; ++i) {
      let e = this.database.tracks[i];

      let user = this.database.user[e.user];
      let category = this.database.category[e.category];
      let location = this.database.location[e.location];
      let topic = this.database.topic[e.topic];
      let entryStart = this.getDatetimeString(e.start);
      let entryEnd = this.getDatetimeString(e.end);

      let daylength = 3600 * 24 * 1000;
      let day = e.start - (e.start % daylength);

      let readableEntry = [i, user, category, location, topic, e.report, entryStart, entryEnd];
      let off = this.offFilter;
      let catFullFilled = (Ctgy == e.category) || (Ctgy == off);
      let userFullFilled = (User == e.user) || (User == off);
      let locationFullFilled = (Place == e.location) || (Place == off);
      let topicFullFilled = (Topic == e.topic) || (Topic == off);
      let datetimeFullFilled = (Datetime == day) || (Datetime == off);

      let userValid = (e.user >= 0);

      if (catFullFilled && userFullFilled && locationFullFilled && topicFullFilled && datetimeFullFilled && userValid) { list.push(readableEntry); }

    }

    return list;
  }

  deleteTimeRecord(entry: number) {
    if (confirm('Are you sure you want to delete entry ' + entry + ' ?')) {
      this.crud.deleteTimeRecord(entry);
      alert('your entry has been deleted');
    }
    else { alert('entry has not been changed'); }
  }

  getIndexFromArray(field, arg: string) {
    let value: number;
    field.map((x, i) => { if (x == arg) value = i; });
    return value;
  }

  updateTimeRecord(entry: number) {
    this.router.navigate(['update', entry]);
  }

  onUserChange(entry: number, value: number) {
    //alert("e "+entry+" "+value);
    this.database.tracks[entry].user = value;
  }

  onCategoryChange(entry: number, value: number) {

    this.database.tracks[entry].category = value;
  }
  onLocationChange(entry: number, value: number) {

    this.database.tracks[entry].location = value;
  }
  onTopicChange(entry: number, value: number) {

    this.database.tracks[entry].topic = value;
  }
  onReportChange(entry: number, value: string) {
    //alert(value);
    this.database.tracks[entry].report = value;
  }
  onStartDateChange(entry: number, value: string) {
    let timestamp = Date.parse(value.replace("T", " "));
    //alert(value+" "+timestamp);
    this.database.tracks[entry].start = timestamp;
  }
  onEndDateChange(entry: number, value: string) {
    let timestamp = Date.parse(value.replace("T", " "));

    this.database.tracks[entry].end = timestamp;
  }

  isDeleted(entry: number){
    if (this.database.tracks[entry].user < 0){ return false;}
    else {return true;}

  }
}
