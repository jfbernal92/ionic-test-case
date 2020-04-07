import { ApiService } from './../services/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  constructor(private api: ApiService) {
    console.log(this.api.getPatients().toPromise());
    console.log(this.api.getPatient('9f3e509f-46cc-4cb9-8504-fcf82471ea3f').toPromise());
    console.log(this.api.getMedications('9f3e509f-46cc-4cb9-8504-fcf82471ea3f').toPromise());
  }

}
