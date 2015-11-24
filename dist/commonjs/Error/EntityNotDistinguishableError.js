var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TalariaError_1 = require('./TalariaError');
var EntityNotDistinguishableError = (function (_super) {
    __extends(EntityNotDistinguishableError, _super);
    function EntityNotDistinguishableError(entity) {
        _super.call(this, 'Entity is not distinguishable');
        this.entity = entity;
    }
    return EntityNotDistinguishableError;
})(TalariaError_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EntityNotDistinguishableError;
