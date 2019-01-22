import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyComponent } from './survey.component';

describe('SurveyComponent', () => {
  let component: SurveyComponent;
  let fixture: ComponentFixture<SurveyComponent>;

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
/*
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a JSON',() => {
    let y=(typeof component.database === 'object');
    expect(y).toBe(true);
  });
 */
  const mockDatabase = {"topic":["Angular","React","Vue"],
  "location":["Wien","Graz","Linz"],
  "user": ["Yoshi Takahashi","Sakura Mikimoto","Sasuke Miyazaki"],
  "category":["engineering","support","consulting"],
  "tracks":[{"user": 1,"topic": 1, "location": 0, "category": 2, 
             "start": 0, "end": 3600000, "report": "..."},
             {"user": 2,"topic": 2, "location": 1, "category": 2, 
             "start": 50000, "end": 80000000, "report": "..."},
             {"user": 0,"topic": 2, "location": 2, "category": 1, 
             "start": 2000111, "end": 2030111, "report": "..."}]
};

//const mockService = <DatabaseService> {getMock: () => mockDatabase};

  /*
  it('should have mocks when SurveyComponent is created', () => {
   // Pass the mock to the constructor as the Angular injector would
   const component = new SurveyComponent(mockService);
   expect(component.database.length).toEqual(mockService.length);
  });
  */
});
