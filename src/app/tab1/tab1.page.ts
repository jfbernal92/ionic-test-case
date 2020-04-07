import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient.model';
import { ApiResponse } from '../interfaces/api-response.interface';
import { Resource } from '../interfaces/resource.interface';
import { ApiRelation } from '../enums/api-relation.enum';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  apiResponse: ApiResponse<Patient>;
  patientList: Array<Resource<Patient>>;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getPatients().subscribe(response => {
      this.apiResponse = response;
      this.patientList = response.entry;
    });
  }

  /**
   * Gets the next page of the patient list
   */
  getNextPage(event) {
    let nextPageLink = this.apiResponse.link.find(link => link.relation === ApiRelation.NEXT).url;
    console.log(nextPageLink)
    if (nextPageLink) {
      this.api.getPage<Patient>(nextPageLink).subscribe(response => {
        this.apiResponse = response;
        this.patientList = [].concat(this.patientList, response.entry);
        event.target.complete();
      });
    } else {
      event.target.complete();
    }
  }

}
