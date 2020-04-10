import { Component, OnInit, Input } from '@angular/core';
import { MedicationRequest } from 'src/app/models/medication-request.model';
import { CodeableConcept } from 'src/app/interfaces/codeable-concept.interface';

@Component({
  selector: 'app-medication-request',
  templateUrl: './medication-request.component.html',
  styleUrls: ['./medication-request.component.scss'],
})
export class MedicationRequestComponent implements OnInit {

  @Input() medicationRequest: MedicationRequest;

  constructor() { }

  ngOnInit() {}

}
