import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  let myService: DatabaseService;
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    expect(service).toBeTruthy();
  });

  it('should return a valid time record or track', () => {
    
    expect(myService.readTimeRecord(1)).toBeTruthy();
  });

});
