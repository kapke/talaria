define(["require", "exports"], function (require, exports) {
    var Criteria = (function () {
        function Criteria() {
        }
        Criteria.prototype.equal = function (field, value) { throw "Not implemented"; };
        Criteria.prototype.notEqual = function (field, value) { throw "Not implemented"; };
        Criteria.prototype.greater = function (field, value) { throw "Not implemented"; };
        Criteria.prototype.less = function (field, value) { throw "Not implemented"; };
        return Criteria;
    })();
    exports.default = Criteria;
});
