export default class Criteria {
    equal(field: String, value: any): Criteria;
    notEqual(field: String, value: any): Criteria;
    greater(field: String, value: any): Criteria;
    less(field: String, value: any): Criteria;
}
