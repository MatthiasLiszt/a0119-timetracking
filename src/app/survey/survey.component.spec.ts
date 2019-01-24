import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyComponent } from './survey.component';
import { DatabaseService } from '../database.service';

describe('SurveyComponent', () => {
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;
  const service: DatabaseService = TestBed.get(DatabaseService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should ',()=>{
    expect(1).toBe(1);
  });
 
 
});
