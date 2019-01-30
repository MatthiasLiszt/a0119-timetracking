import { TestBed, fakeAsync } from '@angular/core/testing';
import mockup from '../assets/mockup.json';
import { DatabaseService, TimeRecord } from './database.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, Subscription } from 'rxjs';




describe('DatabaseService', () => {
  let myService: DatabaseService;
  let httpMock: HttpTestingController;
  let deleteTimeRecordRemoteValue;

  let serverData;

  const MockEntries: TimeRecord[] = [
    {
      "entry": 1,
      "user": "Sakura Mikimoto",
      "topic": "React",
      "location": "Wien",
      "category": "support",
      "start": "1970-01-01T00:33:50.111Z",
      "end": "1970-01-01T07:33:50.111Z",
      "report": "...",
      "delete": false
  },
  {
      "entry": 2,
      "user": "Sasuke Miyazaki",
      "topic": "Angular",
      "location": "Graz",
      "category": "support",
      "start": "1970-01-02T08:33:50.111Z",
      "end": "1970-01-02T19:33:50.111Z",
      "report": "...",
      "delete": false
  },
  {
      "entry": 3,
      "user": "Yoshi Takahashi",
      "topic": "Vue",
      "location": "Linz",
      "category": "engineering",
      "start": "1970-01-02T09:33:50.111Z",
      "end": "1970-01-02T14:33:50.111Z",
      "report": "...",
      "delete": false
  }
  ];


  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [DatabaseService]
  }));

  beforeEach(async () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    service.getDataRemote().subscribe( (data) => {//let value=data.tracks[0].entry;
      //let value=1;
      //alert("value "+value);
      //expect(data).toEqual(1);
      serverData=data;
     },
    (err) => {alert('wiremock not running');
      //expect(true).toBeFalsy();    
     },);
  });

  /*afterEach(()=> {httpMock.verify();
                 });*/

  it('should be created', () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    expect(service).toBeTruthy();
  });


  it(' deleteTimeRecordRemote should be executed', () => {
    let mockServer = "localhost:3000";
    const service: DatabaseService = TestBed.get(DatabaseService);
    //expect(myService.recordDeleteObservable(1,mockServer)).toBeTruthy();
    expect(service.deleteTimeRecordRemote(1, mockServer)).toBeTruthy();
  });

  it('should return three valid time records', () => {
    // Given
    const expectedURL = "/tracks";
    const service: DatabaseService = TestBed.get(DatabaseService);
    let httpMock = TestBed.get(HttpTestingController);

    // When
    service.deleteTimeRecordRemote(1, expectedURL)
      .subscribe(
        ///Then
        value => expect(value.length).toBe(3),
        (err) => expect(err).toBeFalsy()
      );

    const request = httpMock.expectOne(expectedURL);
    request.flush(MockEntries);
  });

  
  it('server data should match mockup data',() => {
     expect(serverData).toBeTruthy();
    //expect(true).toBeFalsy();                                             
  });
  
});
