///<reference path="../../typings/jasmine/jasmine.d.ts" />
///<reference path="../../typings/node/node.d.ts" />
function doesLookSame(actual, expected) {
    for (var name in expected) {
        if (actual[name] != expected[name]) {
            return false;
        }
    }
    return true;
}
function doesContainLookingSame(actual, expected) {
    for (var i = 0; i < actual.length; i++) {
        if (doesLookSame(actual[i], expected)) {
            return true;
        }
    }
    return false;
}
var CustomMatchersFactory = (function () {
    function CustomMatchersFactory() {
    }
    CustomMatchersFactory.prototype.toLookSame = function () {
        return {
            compare: function (actual, expected) {
                var result = {
                    pass: undefined,
                    message: undefined
                };
                if (doesLookSame(actual, expected)) {
                    result.pass = true;
                }
                else {
                    result.pass = false;
                    result.message = 'Expected ' + actual + ' to look same as ' + expected;
                }
                return result;
            }
        };
    };
    CustomMatchersFactory.prototype.toContainLookingSame = function () {
        return {
            compare: function (actual, expected) {
                var result = {
                    pass: undefined,
                    message: undefined
                };
                if (doesContainLookingSame(actual, expected)) {
                    result.pass = true;
                }
                else {
                    result.pass = false;
                    result.message = 'Expected ' + actual + ' to contain same looking object as ' + expected;
                }
                return result;
            }
        };
    };
    return CustomMatchersFactory;
})();
var customMatchersFactory = new CustomMatchersFactory();
module.exports = customMatchersFactory;
//# sourceMappingURL=customMatchersFactory.js.map