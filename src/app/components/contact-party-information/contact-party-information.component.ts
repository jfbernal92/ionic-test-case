import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact.interface';
import { CodeableConcept } from 'src/app/interfaces/codeable-concept.interface';

@Component({
  selector: 'app-contact-party-information',
  templateUrl: './contact-party-information.component.html',
  styleUrls: ['./contact-party-information.component.scss'],
})
export class ContactPartyInformationComponent implements OnInit {

  @Input() contact: Contact[];

  constructor() { }

  ngOnInit() { }

  /**
   * Gets a 'one line' label for relationship param
   * @param relationship The list of relationships
   */
  getRelationShip(relationship: CodeableConcept[]): string {
    let relationshipLabel = '';
    if (relationship) {
      relationship.forEach(r => relationshipLabel.concat(relationshipLabel, `${r.text} ${r.coding.display} ${r.coding.code}`));
    }
    return relationshipLabel;
  }

}
