import { Resource } from './resource.interface';
import { ApiRelation } from './../enums/api-relation.enum';

export interface ApiResponse<T> {
    resourceType: string;
    id: string;
    meta: { lastUpdated: Date };
    type: string;
    link: [{ relation: ApiRelation, url: string }];
    entry: Array<Resource<T>>;
}
