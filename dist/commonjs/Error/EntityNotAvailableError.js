var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TalariaError_1 = require('./TalariaError');
var MapperNotAvailableError = (function (_super) {
    __extends(MapperNotAvailableError, _super);
    function MapperNotAvailableError(mapperName) {
        _super.call(this, "Mapper named " + mapperName + " is not resolved yet");
        this.mapperName = mapperName;
    }
    return MapperNotAvailableError;
})(TalariaError_1.default);
exports.default = MapperNotAvailableError;
