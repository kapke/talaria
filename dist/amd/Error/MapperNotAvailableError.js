define(["require", "exports"], function (require, exports) {
    function MapperNotAvailableError(name) {
        return new Error("Mapper named " + name + " is not resolved yet");
    }
    exports.default = MapperNotAvailableError;
});
