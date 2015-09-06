import TalariaError from './TalariaError';
import EntityInfo from '../EntityInfo';

export default class NotFoundError extends TalariaError {
    public entity:EntityInfo<any>;
    public criteria:any;

    constructor (entity:EntityInfo<any>, criteria:any=null) {
        super(`Entity ${entity.config.name} tried to be found using criteria ${criteria} not found`, 'NotFoundError');
        this.entity = entity;
        this.criteria = criteria;
    }
}