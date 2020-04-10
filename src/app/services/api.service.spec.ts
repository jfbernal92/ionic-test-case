import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, RequestMatch } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { TestUtil } from '../utils/test/test.util';
import { Patient } from '../models/patient.model';
import { ApiResponse } from '../interfaces/api-response.interface';
import { ApiRelation } from '../enums/api-relation.enum';
import { MedicationRequest } from '../models/medication-request.model';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    })
    apiService = TestBed.get(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(()=>{
    httpMock.verify();
  })

  it('should retrieve patients from the API using GET method', () => {
    // Given
    const patient = TestUtil.getMockPatient();
    const apiResponse = TestUtil.getMockApiResponse<Patient>(patient);

    // When / Then
    apiService.getPatients().subscribe(response => {
      expect(response.entry.length).toBe(apiResponse.entry.length);
      expect(response.entry).toEqual(apiResponse.entry)
    })

    const request = httpMock.expectOne(`${environment.apiHost}/${environment.patientPath}`);
    expect(request.request.method).toBe('GET');
    
    request.flush(apiResponse)

  });


  it('should retrieve a patient by its id from the API using GET method', () => {
    // Given
    const patient = TestUtil.getMockPatient();

    // When / Then
    apiService.getPatient(patient.id).subscribe(response => {
      expect(response).toEqual(patient);
    })

    const request = httpMock.expectOne(`${environment.apiHost}/${environment.patientPath}/${patient.id}`);
    expect(request.request.method).toBe('GET');
    
    request.flush(patient)
  });


  it('should retrieve a diferent page using the given url, from the API using GET method', () => {
    // Given
    const patient = TestUtil.getMockPatient();
    const apiResponse = TestUtil.getMockApiResponse<Patient>(patient);
    const nextPageUrl = apiResponse.link.find(l => l.relation === ApiRelation.NEXT);

    // When / Then
    apiService.getPage<Patient>(nextPageUrl.url).subscribe(response => {
      expect(response.entry.length).toBe(apiResponse.entry.length);
      expect(response.entry).toEqual(apiResponse.entry)
    })

    const request = httpMock.expectOne(nextPageUrl.url);
    expect(request.request.method).toBe('GET');
    
    request.flush(apiResponse)
  });

  it('should retrieve medications of a patient from the API using GET method', () => {
    // Given
    const patient = TestUtil.getMockPatient();
    const medication = TestUtil.getMockMedication();
    const apiResponse = TestUtil.getMockApiResponse<MedicationRequest>(medication);

    // When / Then
    apiService.getMedications(patient.id).subscribe(response => {
      expect(response.entry.length).toBe(apiResponse.entry.length);
      expect(response.entry).toEqual(apiResponse.entry)
    })

    const request = httpMock.expectOne(`${environment.apiHost}/${environment.medicationRequestPath}?patient=${patient.id}`);
    expect(request.request.method).toBe('GET');
    
    request.flush(apiResponse)
  });
});
