import { CodeableConcept } from './codeable-concept.interface';

export interface Communication {
    language: CodeableConcept;
    prefferred: boolean;
}