import { Coding } from './coding.interface';

export interface CodeableConcept {
    coding: Coding[];
    text: string;
}