import { Patient } from './../models/patient.model';
import { Resource } from '../interfaces/resource.interface';
import { ApiResponse } from './../interfaces/api-response.interface';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MedicationRequest } from '../models/medication-request.model';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  /**
   * Gets a list of patients from the web server
   */
  getPatients(): Observable<ApiResponse<Patient>> {
    return this.http.get<ApiResponse<Patient>>(`${environment.apiHost}/${environment.patientPath}`);
  }

  /**
   * Gets the information of a specific patient
   * @param patientId The patient ID
   */
  getPatient(patientId: string): Observable<Patient> {
    return this.http.get<Patient>(`${environment.apiHost}/${environment.patientPath}/${patientId}`);
  }

  /**
   * Gets a list of medications of a specific patient
   * @param patient The patient ID
   */
  getMedications(patient: string): Observable<ApiResponse<MedicationRequest>> {
    const  urlParams = new  HttpParams({fromObject:  {patient}});
    return this.http.get<ApiResponse<any>>(`${environment.apiHost}/${environment.medicationRequestPath}`,  {params: urlParams});
  }

  /**
   * Gets the given page of a  from the web server
   * @param url 
   */
  getPage<T>(url: string): Observable<ApiResponse<T>> {
    return this.http.get<ApiResponse<T>>(url);
  }

}
