var TalariaError = (function () {
    function TalariaError(message, type) {
        if (type === void 0) { type = 'TalariaError'; }
        this.message = message;
        this.type = type;
    }
    return TalariaError;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TalariaError;
