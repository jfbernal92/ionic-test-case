import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from '../models/patient.model';
import { MedicationRequest } from '../models/medication-request.model';
import { ApiResponse } from '../interfaces/api-response.interface';
import { Observable } from 'rxjs';

const ID_PARAM = 'id';

@Component({
  selector: 'app-patient-details',
  templateUrl: 'patient-details.page.html',
  styleUrls: ['patient-details.page.scss']
})
export class PatientDetailsPage implements OnInit {

  patient$: Observable<Patient>;
  medicationRequest$: Observable<ApiResponse<MedicationRequest>>;

  constructor(private api: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has(ID_PARAM)) {
        const id = paramMap.get(ID_PARAM);
        this.getPatientDetails(id);
        this.getMedications(id);
      }
    });
  }

  /**
   * Gets the patient details based on the given patient id
   * @param patientId 
   */
  private getPatientDetails(patientId: string) {
    this.patient$ = this.api.getPatient(patientId);
  }

  /**
   * Gets the medication of a patient
   * @param patientId 
   */
  private getMedications(patientId: string) {
    this.medicationRequest$ = this.api.getMedications(patientId);
  }

}
