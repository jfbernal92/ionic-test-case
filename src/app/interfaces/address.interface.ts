import { Period } from './period.interface';

export interface Address {
    use: string;
    type: string;
    text: string;
    line: Array<string>;
    city: string;
    district: string;
    state: string;
    postalCode: string;
    country: string;
    period: Period
}