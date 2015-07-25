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
    keyFactory:()=>any,
	entityMatcher:(expected:T, actual:T)=>boolean
	):void {
	describe(name, () => {
		var mapper:Mapper<T>,
			entity:T,
		    data:any,
            key:any;
		beforeEach(() => {
			mapper = mapperFactory();
			entity = entityFactory();
			data = dataFactory();
            key = keyFactory();
		});
		
		it('should convert entity into plain object', () => {
			expect(mapper.toObject(entity)).toEqual(data);
		});
		
		it('should convert data object into entity', () => {
			expect(entityMatcher(entity, mapper.fromObject(data))).toBe(true);
		});

		it('should extract only key from entity', () => {
            expect(mapper.extractKey(entity)).toEqual(key);
        });
	});	
}

mapperSpec<Person>(
	'PersonMapper',
	():PersonMapper => {
		return new PersonMapper();
	},
	():Person => {
		return new Person('Ala', 'Makota', 1);
	},
	() => {
		return {
			id: 1,
			name: 'Ala',
			surname: 'Makota'
		};
	},
    () => {
        return {
            id: 1
        };
    },
	(expected:Person, actual:Person):boolean => {
		return (
			(expected.id == actual.id) && 
			(expected.name == actual.name) &&
			(expected.surname == actual.surname));
	}
)