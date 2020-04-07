import { Identifier } from './identifier.interface';

export interface Reference {
    reference: string;
    type: string;
    identifier: Identifier;
    display: string;
}