import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact.interface';

@Component({
  selector: 'app-contact-party-information',
  templateUrl: './contact-party-information.component.html',
  styleUrls: ['./contact-party-information.component.scss'],
})
export class ContactPartyInformationComponent implements OnInit {

  @Input() contact: Contact[];

  constructor() { }

  ngOnInit() { }

}
