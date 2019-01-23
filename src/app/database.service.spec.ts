import { TestBed } from '@angular/core/testing';
import { DatabaseService } from './database.service';
import { HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing';
import { Observable, Subscription } from 'rxjs';

interface Post{
  "user": number,
  "topic": number,
  "location": number,
  "category": number,
  "start": number,
  "end": number,
  "report": string
}

describe('DatabaseService', () => {
  let myService: DatabaseService;
  let httpMock:  HttpTestingController;
  let deleteTimeRecordRemoteValue;

  const MockEntries: Post[] = [
    {
      "user": 1,
      "topic": 1,
      "location": 0,
      "category": 2,
      "start": 0,
      "end": 3600000,
      "report": "..."
    },
    {
      "user": 2,
      "topic": 2,
      "location": 1,
      "category": 2,
      "start": 50000,
      "end": 80000000,
      "report": "..."
    },
    {
      "user": 0,
      "topic": 2,
      "location": 2,
      "category": 1,
      "start": 2000111,
      "end": 2030111,
      "report": "..."
    }
  ];
  

  beforeEach(() => TestBed.configureTestingModule({
                                                   imports: [HttpClientTestingModule],
                                                   providers: [DatabaseService]
                                                  }));

  beforeEach(async() => {
    
  });

  /*afterEach(()=> {httpMock.verify();
                 });*/
                                                   
  it('should be created', () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    expect(service).toBeTruthy();
  });

  
  it(' deleteTimeRecordRemote should be executed', () => {
    let mockServer="localhost:3000";
    const service: DatabaseService = TestBed.get(DatabaseService);
    //expect(myService.recordDeleteObservable(1,mockServer)).toBeTruthy();
    expect(service.deleteTimeRecordRemote(1,mockServer)).toBeTruthy();
  });
  
  it('should return three valid time records', () => {
    let mockServer="localhost:3000/tracks";
    const service: DatabaseService = TestBed.get(DatabaseService);
    let recordDelete: Observable<any>;        
    let httpMock = TestBed.get(HttpTestingController);

    recordDelete=service.deleteTimeRecordRemote(1,mockServer);

    recordDelete.subscribe( value => { expect(value.length).toBe(3); } );
                           
    const request = httpMock.expectOne(mockServer);

    request.flush(MockEntries);
  });  
  
});
