import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit login data',() =>{
     
     expect(component.onSubmit).toHaveBeenCalled();
  }); 

  it('should login yotaka', () => {
    expect(component.checkLogin('yotaka1234')).toEqual(0);
  });

  it('should not find nor login jackson', () => {
    expect(component.checkLogin('jackson007')).toEqual(null);
  });

  it('should show error message that service is not available', () => {
    expect(component.errorMessageHandler('none',0)).toEqual('Sorry the service is currently not available');
  });
  
});
