import { Period } from './period.interface';

export interface ContactPoint {
    system: string;
    value: string;
    use: string;
    rank: number;
    period: Period;
}