import TalariaError from './TalariaError';
export default class EntityNotDistinguishableError extends TalariaError {
    entity: any;
    constructor(entity: any);
}
