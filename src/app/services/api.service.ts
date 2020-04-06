import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Gets a list of patients from the web server
   */
  getPatients(): Observable<any> {
    return this.http.get(`${environment.apiHost}/${environment.patientPath}`);
  }

  /**
   * Gets the information of a specific patient
   * @param patientId The patient ID
   */
  getPatient(patientId: string): Observable<any> {
    return this.http.get(`${environment.apiHost}/${environment.patientPath}/${patientId}`);
  }

  /**
   * Gets a list of medications of a specific patient
   * @param patient The patient ID
   */
  getMedications(patient: string): Observable<any> {
    const  urlParams = new  HttpParams({fromObject:  {patient}});
    return this.http.get(`${environment.apiHost}/${environment.medicationRequestPath}`,  {params: urlParams});
  }

}
