import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.debugElement.componentInstance;
  let debug: DebugElement;
  let element: HTMLElement;

  it('should create the app', () => {

    expect(app).toBeTruthy();
  });

  it('should have a title', () => {
    this.fixture.detectChanges();
    expect(element.textContent).toContain(this.fixture.title);
  });

  it('should contain appbar', () => {
    this.fixture.detectChanges();
    expect(element.innerHTML).toContain("appbar");
  });

  it('should contain router-outlet', () => {
    this.fixture.detectChanges();
    expect(element.innerHTML).toContain("router-outlet");
  });




});
