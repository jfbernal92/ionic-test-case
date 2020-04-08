import { CodeableConcept } from './codeable-concept.interface';
import { HumanName } from './human-name.interface';
import { ContactPoint } from './contact-point.interface';
import { Gender } from '../enums/gender.enum';
import { Period } from './period.interface';
import { Address } from './address.interface';

export interface Contact {
    relationship: Array<CodeableConcept>;
    name: HumanName;
    telecom: Array<ContactPoint>;
    address: Address;
    gender: Gender;
    period: Period;
}