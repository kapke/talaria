///<reference path="../typings/jasmine/jasmine.d.ts" />
///<reference path="../typings/node/node.d.ts" />

import Person from './Helper/Person';
import PersonMapper from './Helper/PersonMapper';
import {Mapper} from '../lib/Mapper';

export default function mapperSpec<T> (
	name:string, 
	mapperFactory:()=>Mapper<T>, 
	entityFactory:()=>T, 
	dataFactory:()=>any, 
	entityMatcher:(expected:T, actual:T)=>boolean
	):void {
	describe(name, () => {
		var mapper:Mapper<T>,
			entity:T,
		    data:any;
		beforeEach(() => {
			mapper = mapperFactory();
			entity = entityFactory();
			data = dataFactory();
		});
		
		it('should convert entity into plain object', () => {
			expect(mapper.toObject(entity)).toEqual(data);
		});
		
		it('should convert data object into entity', () => {
			expect(entityMatcher(entity, mapper.fromObject(data))).toBe(true);
		});
	});	
}

mapperSpec<Person>(
	'PersonMapper',
	():PersonMapper => {
		return new PersonMapper();
	},
	():Person => {
		return new Person('Ala', 'Makota');
	},
	() => {
		return {
			id: null,
			name: 'Ala',
			surname: 'Makota'
		}
	},
	(expected:Person, actual:Person):boolean => {
		return (
			(expected.id == actual.id) && 
			(expected.name == actual.name) &&
			(expected.surname == actual.surname));
	}
)