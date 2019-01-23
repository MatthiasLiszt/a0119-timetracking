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
  

//const mockService = <DatabaseService> {getMock: () => mockDatabase};

  /*
  it('should have mocks when SurveyComponent is created', () => {
   // Pass the mock to the constructor as the Angular injector would
   const component = new SurveyComponent(mockService);
   expect(component.database.length).toEqual(mockService.length);
  });
  */
});
