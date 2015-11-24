var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './TalariaError'], function (require, exports, TalariaError_1) {
    var MapperNotAvailableError = (function (_super) {
        __extends(MapperNotAvailableError, _super);
        function MapperNotAvailableError(mapperName) {
            _super.call(this, "Mapper named " + mapperName + " is not resolved yet");
            this.mapperName = mapperName;
        }
        return MapperNotAvailableError;
    })(TalariaError_1.default);
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = MapperNotAvailableError;
});
