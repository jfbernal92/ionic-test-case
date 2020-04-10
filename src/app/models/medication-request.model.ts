import { Identifier } from '../interfaces/identifier.interface';
import { CodeableConcept } from '../interfaces/codeable-concept.interface';
import { Reference } from '../interfaces/reference.interface';

export class MedicationRequest {

    identifier: Array<Identifier>;
    status: string;
    intent: string;
    priority: string;
    medicationCodeableConcept: CodeableConcept;
    subject: Reference;
    encounter: Reference;
    supportingInformation: Array<Reference>;
    authoredOn: Date;
    requester: Reference;
    

}
