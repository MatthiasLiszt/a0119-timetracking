import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppbarComponent } from './appbar.component';
//import { DebugElement } from '@angular/core';
import { By }              from '@angular/platform-browser';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';

//import { NoopAnimationsModule } from '@angular/platform-browser/animations';



describe('AppbarComponent', () => {
  let component: AppbarComponent;
  let fixture: ComponentFixture<AppbarComponent>;
  //let debug: DebugElement;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppbarComponent/*, DebugElement*/ ],
      imports: [MatIconModule,
                MatButtonModule,
                MatMenuModule,
                MatCardModule,
                MatTabsModule,
                MatSidenavModule,
                MatListModule,
                MatToolbarModule,
                //NoopAnimationsModule
              ]
    })
    .compileComponents();
  }));
  /*
  beforeEach(() => {
    fixture = TestBed.createComponent(AppbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  */
  it('should create', () => {
    let fixture = TestBed.createComponent(AppbarComponent);
    expect(fixture).toBeTruthy();
  });

  
  it('mat-toolbar should be created',()=>{
    let fixture = TestBed.createComponent(AppbarComponent);
    //let component = fixture.componentInstance;
    //let burgerbar = fixture.debugElement.query(By.css("burgermenu"));
    let matToolbar = fixture.debugElement.nativeElement.querySelector('mat-toolbar');
    //burgerbar.triggerEventHandler("click",null);
    fixture.detectChanges();
    expect(matToolbar).not.toBe(null);
  });

  it('mat-toolbar should contain local_cafe as logo',()=>{
    let fixture = TestBed.createComponent(AppbarComponent);
    //let component = fixture.componentInstance;
    //let burgerbar = fixture.debugElement.query(By.css("burgermenu"));
    let matToolbar = fixture.debugElement.nativeElement.querySelector('mat-toolbar');
    //burgerbar.triggerEventHandler("click",null);
    fixture.detectChanges();
    expect(matToolbar.textContent).toContain('local_cafe');
  });

  it('burgerbar should contain icon menu (=burgerbar)',()=>{
    let fixture = TestBed.createComponent(AppbarComponent);
    //let component = fixture.componentInstance;
    //let burgerbar = fixture.debugElement.query(By.css("burgermenu"));
    let matIcon = fixture.debugElement.nativeElement.querySelectorAll('mat-icon');
    //burgerbar.triggerEventHandler("click",null);
    fixture.detectChanges();
    expect(matIcon[1].textContent).toContain('menu');
  });

  it('mat-menu (=burgermenu) should not be open',()=>{
    let fixture = TestBed.createComponent(AppbarComponent);
    //let component = fixture.componentInstance;
    //let burgerbar = fixture.debugElement.query(By.css("burgermenu"));
    let dom = fixture.nativeElement;
    let matMenu = dom.querySelector('#menu');
    //let matMenu = fixture.debugElement.nativeElement.querySelectorAll('mat-menu');
    //burgerbar.triggerEventHandler("click",null);
    //fixture.detectChanges();
    expect(matMenu).toBeFalsy;
  });
  
  it('should have a menu with 4 options (native click)', async () => {
    let fixture = TestBed.createComponent(AppbarComponent);
    const compiledDom = fixture.debugElement.nativeElement;
    compiledDom.querySelector('button').click();
    
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('.menu-item')).length).toEqual(4);
    //expect(compiledDom.querySelectorAll('mat-menu-item').length).toEqual(4);
  });
  
  /*
  it('burgermenu should be clickable', async () => {
    let fixture = TestBed.createComponent(AppbarComponent);
    let dom = fixture.nativeElement;
    let matMenu = dom.querySelector('#menu mat-icon');
    let reportLink = fixture.debugElement.query(By.css("logocafe"));
    //matMenu.click();
    const menu = dom.querySelectorAll('mat-icon');
    expect(matMenu.textContent).toBe('dashboard');
  });
  */
  /* 
  it('should create matSubmenu', async( () => {
    let fixture = TestBed.createComponent(AppbarComponent);
    //let matSubmenu = fixture.debugElement.query(By.css("matSubmenu"));
    let matSubmenu = fixture.debugElement.nativeElement.querySelector('matSubmenu');
    //let element=matSubmenu.nativeElement;
    fixture.detectChanges();
    //expect(fixture.debugElement.nativeElement.innerHTML).toContain("report");
    //expect(matSubmenu.textContent).toContain('report');
    expect(matSubmenu).not.toBe(null);
  }));
 */
  /*
  it('should contain /login', () => {
    this.component.detectChanges();
    expect(element.innerHTML).toContain("/login");
  });

  it('should contain /logout', () => {
    this.component.detectChanges();
    expect(element.innerHTML).toContain("/logout");
  });

  it('should contain /timetracking', () => {
    this.component.detectChanges();
    expect(element.innerHTML).toContain("/timetracking");
  });
  */
});
