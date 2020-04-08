import { Component, OnInit, Input } from '@angular/core';
import { Patient } from 'src/app/models/patient.model';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit {

  @Input() patient: Patient;

  constructor() { }

  ngOnInit() {}

}
