import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import { ReportlistComponent } from './reportlist.component';

import { ShortdatePipe } from '../shortdate.pipe';
import { ShortenPipe } from '../shorten.pipe';
import { ShortnamePipe } from '../shortname.pipe';
import { DatabaseService } from '../database.service';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

import { FormsModule } from '@angular/forms';

describe('ReportlistComponent', () => {
  let component: ReportlistComponent;
  let fixture: ComponentFixture<ReportlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule,
                MatButtonModule,
                MatMenuModule,
                MatCardModule,
                MatTabsModule,
                MatSidenavModule,
                MatListModule,
                MatToolbarModule,
                HttpClientModule,
                FormsModule
               ],
      declarations: [ ReportlistComponent,
                      ShortdatePipe,
                      ShortenPipe,
                      ShortnamePipe
                    ],
      providers: [DatabaseService]              
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show deleted entry',()=>{
    
    let numberOfEntries=fixture.debugElement.queryAll(By.css('tr')).length;
    component.deleteTimeRecord(2);
    let currentEntries=fixture.debugElement.queryAll(By.css('tr')).length;
    fixture.detectChanges();
    expect(currentEntries).toEqual(numberOfEntries);
  });

  it('should start the delete dialog',()=>{
    
    expect(component.deleteTimeRecord(1)).toBeTruthy();
  });

  
  
});
