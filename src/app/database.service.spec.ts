import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  let myService: DatabaseService;
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    expect(service).toBeTruthy();
  });

  
  it('should return a valid time record', () => {
    expect(myService.recordDeleteObservable(1)).toBeTruthy();
  });
  /*
  it('should return a valid time record', () => {
    //expect(myService.deleteTimeRecordRemote(1)).toBe(!undefined);

  });
  */
});
