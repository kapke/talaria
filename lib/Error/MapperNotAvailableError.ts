import TalariaError from './TalariaError';

export default class MapperNotAvailableError extends TalariaError {
    public mapperName:string;

    constructor(mapperName:string) {
        super(`Mapper named ${mapperName} is not resolved yet`);
        this.mapperName = mapperName;
    }
}