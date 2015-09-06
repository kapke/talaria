import TalariaError from './TalariaError';
import EntityInfo from '../EntityInfo';
export default class NotFoundError extends TalariaError {
    entity: EntityInfo<any>;
    criteria: any;
    constructor(entity: EntityInfo<any>, criteria?: any);
}
