import { TestBed } from '@angular/core/testing';
import { DatabaseService, TimeRecord } from './database.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, Subscription } from 'rxjs';



describe('DatabaseService', () => {
  let myService: DatabaseService;
  let httpMock: HttpTestingController;
  let deleteTimeRecordRemoteValue;

  const MockEntries: TimeRecord[] = [
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

  beforeEach(async () => {

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

});
