export interface Resource<T> {
    fullUrl: string;
    resource: T;
    search: { mode: string };
}
