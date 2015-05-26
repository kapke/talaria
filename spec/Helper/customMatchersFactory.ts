///<reference path="../../typings/jasmine/jasmine.d.ts" />
///<reference path="../../typings/node/node.d.ts" />

function doesLookSame(actual, expected) {
    for(var name in expected) {
        if(actual[name] != expected[name]) {
            return false;
        }
    }
    return true;
}

function doesContainLookingSame (actual:Array<any>, expected:any) {
    for(var i=0; i<actual.length; i++) {
        if(doesLookSame(actual[i], expected)) {
            return true;
        }
    }
    return false;
}

class CustomMatchersFactory {
    public toLookSame () {
        return {
            compare: (actual, expected) => {
                var result = {
                    pass: undefined,
                    message: undefined
                };
                if(doesLookSame(actual, expected)) {
                    result.pass = true;
                } else {
                    result.pass = false;
                    result.message = 'Expected '+actual+' to look same as '+expected;
                }
                return result;
            }
        };
    }

    public toContainLookingSame () {
        return {
            compare: (actual:Array<any>, expected:any) => {
                var result = {
                    pass: undefined,
                    message: undefined
                };
                if(doesContainLookingSame(actual, expected)) {
                    result.pass = true;
                } else {
                    result.pass = false;
                    result.message = 'Expected '+actual+' to contain same looking object as '+expected;
                }
                return result;
            }
        };
    }
}

var customMatchersFactory:CustomMatchersFactory = new CustomMatchersFactory();

export default customMatchersFactory;