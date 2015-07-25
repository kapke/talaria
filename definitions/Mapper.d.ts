export interface Mapper<T> {
    toObject(entity: T): Object;
    fromObject(data: Object): T;
    extractKey(entity: T): Object;
}
