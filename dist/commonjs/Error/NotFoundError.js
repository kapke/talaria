var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TalariaError_1 = require('./TalariaError');
var NotFoundError = (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(entity, criteria) {
        if (criteria === void 0) { criteria = null; }
        _super.call(this, "Entity " + entity.config.name + " tried to be found using criteria " + criteria + " not found", 'NotFoundError');
        this.entity = entity;
        this.criteria = criteria;
    }
    return NotFoundError;
})(TalariaError_1.default);
exports.default = NotFoundError;
