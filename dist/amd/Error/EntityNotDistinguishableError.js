var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", './TalariaError'], function (require, exports, TalariaError_1) {
    var EntityNotDistinguishableError = (function (_super) {
        __extends(EntityNotDistinguishableError, _super);
        function EntityNotDistinguishableError(entity) {
            _super.call(this, 'Entity is not distinguishable');
            this.entity = entity;
        }
        return EntityNotDistinguishableError;
    })(TalariaError_1.default);
    exports.default = EntityNotDistinguishableError;
});
