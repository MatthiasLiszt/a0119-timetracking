import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportfilterComponent } from './reportfilter.component';

import { DatabaseService } from '../database.service';

import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

import { FormsModule } from '@angular/forms';

describe('ReportfilterComponent', () => {
  let component: ReportfilterComponent;
  let fixture: ComponentFixture<ReportfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule,HttpClientModule],
      declarations: [ ReportfilterComponent ],
      providers: [DatabaseService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
