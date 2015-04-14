import EntityInfo = require('./EntityInfo');

class Repository<T> {
    private entityInfo:EntityInfo;
    private entities:T[] = [];

	constructor (entityInfo:EntityInfo) {
        this.entityInfo = entityInfo;
	}
	public add(obj: T) : void {
        if(!this.has(obj)) {
            this.entities.push(obj);
        }
    }
	public remove(obj : T) : void {
        if(this.has(obj)) {
            this.entities.splice(this.entities.indexOf(obj), 1);
        }
    }
	public findOne() : T {
        throw new Error('Not implemented yet');
    }
    public findAll() : T[] {
        return this.entities;
    }
	public has(obj: T) : boolean {
        return (this.entities.indexOf(obj) > -1);
    }
}

export = Repository;