define(["require", "exports"], function (require, exports) {
    var EntityInfo = (function () {
        function EntityInfo(entity, config) {
            this.entity = entity;
            this.config = config;
        }
        return EntityInfo;
    })();
    exports.default = EntityInfo;
});
