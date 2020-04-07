import { CodeableConcept } from './codeable-concept.interface';
import { Period } from './period.interface';

export interface Identifier {
    use: string;
    type: CodeableConcept;
    system: string;
    value: string;
    period: Period;
}