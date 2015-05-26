class Proxy {
    constructor (obj, accessors) {
        var that = this;

        function defineProperties () {
            function simpleGetter (name) {
                return this[name];
            }

            function simpleSetter (name, value) {
                this[name] = value;
            }

            for(var name in obj) {
                var property = accessors[name] || {},
                    getter = undefined, setter = undefined;

                getter = (() => {
                    if(property.get) {
                        return property.get;
                    } else {
                        return simpleGetter.bind(obj, name);
                    }
                })();
                setter = (() => {
                    if(property.set) {
                        return property.set;
                    } else {
                        return simpleSetter.bind(obj, name);
                    }
                })();

                Object.defineProperty(that, name, {
                    configurable: false,
                    enumerable: true,
                    get: getter,
                    set: setter
                });
            }
        }
        defineProperties();
    }
}

export default Proxy;