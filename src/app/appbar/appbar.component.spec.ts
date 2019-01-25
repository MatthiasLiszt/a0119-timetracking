import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppbarComponent } from './appbar.component';
import { DebugElement } from '@angular/core';
import { By }              from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';

describe('AppbarComponent', () => {
  let component: AppbarComponent;
  let fixture: ComponentFixture<AppbarComponent>;
  let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain mat-menu', () => {
    this.componet.detectChanges();
    expect(element.innerHTML).toContain("mat-menu");
  });

  it('burgerbar should be clickable',()=>{
    let burgerbar = this.component.debugElement.query(By.css("burgermenu"));
    expect(burgerbar.triggerEventHandler("click",null)).toBeTruthy();
  });

  it('should contain /report', () => {
    this.componet.detectChanges();
    expect(element.innerHTML).toContain("/report");
  });

  it('should contain /login', () => {
    this.componet.detectChanges();
    expect(element.innerHTML).toContain("/login");
  });

  it('should contain /logout', () => {
    this.componet.detectChanges();
    expect(element.innerHTML).toContain("/logout");
  });

  it('should contain /timetracking', () => {
    this.componet.detectChanges();
    expect(element.innerHTML).toContain("/timetracking");
  });
});
