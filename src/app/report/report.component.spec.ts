import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportComponent } from './report.component';
<<<<<<< HEAD
import { ReportfilterComponent } from '../reportfilter/reportfilter.component';
import { ReportlistComponent } from '../reportlist/reportlist.component';

import { ShortdatePipe } from '../shortdate.pipe';
import { ShortenPipe } from '../shorten.pipe';
import { ShortnamePipe } from '../shortname.pipe';

import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

import { DatabaseService } from '../database.service';

import { NO_ERRORS_SCHEMA } from '@angular/core';
=======
>>>>>>> 347c89eba3af17a32ee286050710d733a7ec1079

describe('ReportComponent', () => {
  let component: ReportComponent;
  let fixture: ComponentFixture<ReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      
      imports:[HttpClientModule],
      declarations: [
        ReportComponent,
        ReportfilterComponent,
        ReportlistComponent,
        ShortdatePipe,
        ShortenPipe,
        ShortnamePipe
        

      ],
      providers: [DatabaseService],
      schemas: [NO_ERRORS_SCHEMA]

=======
      declarations: [ ReportComponent ]
>>>>>>> 347c89eba3af17a32ee286050710d733a7ec1079
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
