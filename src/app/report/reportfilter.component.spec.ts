import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportfilterComponent } from './reportfilter.component';

describe('ReportfilterComponent', () => {
  let component: ReportfilterComponent;
  let fixture: ComponentFixture<ReportfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportfilterComponent ]
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
