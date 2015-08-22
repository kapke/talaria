var TalariaError = (function () {
    function TalariaError(message, type) {
        if (type === void 0) { type = 'TalariaError'; }
        this.message = message;
        this.type = type;
    }
    return TalariaError;
})();
exports.default = TalariaError;
