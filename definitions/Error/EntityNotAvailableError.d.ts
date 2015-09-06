import TalariaError from './TalariaError';
export default class MapperNotAvailableError extends TalariaError {
    mapperName: string;
    constructor(mapperName: string);
}
