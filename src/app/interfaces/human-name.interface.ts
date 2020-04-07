import { Period } from './period.interface';
import { NameUse } from '../enums/name-use.enum';

export interface HumanName {
    use: NameUse;
    text: string;
    family: string;
    given: Array<string>;
    prefix: Array<string>;
    suffix: Array<string>;
    period: Period;
}