import { Component, OnInit, Input } from '@angular/core';
import { ContactPoint } from 'src/app/interfaces/contact-point.interface';

@Component({
  selector: 'app-personal-contact-information',
  templateUrl: './personal-contact-information.component.html',
  styleUrls: ['./personal-contact-information.component.scss'],
})
export class PersonalContactInformationComponent implements OnInit {

  @Input() telecom: ContactPoint[];
  
  constructor() { }

  ngOnInit() {}

}
