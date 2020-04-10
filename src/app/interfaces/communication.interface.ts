import { CodeableConcept } from './codeable-concept.interface';

export interface Communication {
    language: CodeableConcept;
    preferred: boolean;
}