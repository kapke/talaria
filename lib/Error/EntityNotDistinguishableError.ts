import TalariaError from './TalariaError';

export default class EntityNotDistinguishableError extends TalariaError {
    public entity:any;

    constructor(entity:any) {
        super('Entity is not distinguishable');
        this.entity = entity;
    }
}