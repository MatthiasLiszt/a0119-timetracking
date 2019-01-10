import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogcheckComponent } from './logcheck.component';

describe('LogcheckComponent', () => {
  let component: LogcheckComponent;
  let fixture: ComponentFixture<LogcheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogcheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
