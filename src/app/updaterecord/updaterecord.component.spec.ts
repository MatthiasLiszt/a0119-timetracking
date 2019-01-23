import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterecordComponent } from './updaterecord.component';

describe('UpdaterecordComponent', () => {
  let component: UpdaterecordComponent;
  let fixture: ComponentFixture<UpdaterecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdaterecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
