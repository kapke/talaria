(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
///<reference path="../../typings/es6-promise/es6-promise.d.ts" />
///<reference path="../../typings/node/node.d.ts" />
var es6_promise_1 = require('es6-promise');
var InMemoryStrategy = (function () {
    function InMemoryStrategy() {
        this.objects = {};
    }
    InMemoryStrategy.prototype.create = function (info, obj) {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve, reject) {
            _this.objects[info.config.name] = _this.objects[info.config.name] || [];
            _this.objects[info.config.name].push(obj);
            resolve();
        });
    };
    InMemoryStrategy.prototype.update = function (info, obj) {
        var _this = this;
        return new es6_promise_1.Promise(function (resolve) {
            _this.findByKey(info, obj).then(function (found) {
                for (var name in found) {
                    found[name] = obj[name];
                }
                resolve();
            });
        });
    };
    InMemoryStrategy.prototype.delete = function (info, obj) {
        var _this = this;
        var collection = this.getCollection(info);
        var resolved = false;
        return new es6_promise_1.Promise(function (resolve, reject) {
            for (var i = 0; i < collection.length; i++) {
                if (_this.matchesKey(info, obj, collection[i])) {
                    collection.splice(i, 1);
                    resolved = true;
                    resolve();
                }
            }
            if (!resolved) {
                reject();
            }
        });
    };
    InMemoryStrategy.prototype.find = function (info, criteria) {
        var _this = this;
        function allFilter(obj) { return true; }
        function strictFilter(obj) {
            for (var name in criteria) {
                if (obj[name] != criteria[name]) {
                    return false;
                }
            }
            return true;
        }
        return new es6_promise_1.Promise(function (resolve, reject) {
            var collection = _this.getCollection(info), filter;
            if (criteria == null) {
                filter = allFilter;
            }
            else {
                filter = strictFilter;
            }
            resolve(collection.filter(filter));
        });
    };
    InMemoryStrategy.prototype.findByKey = function (info, keyValue) {
        var _this = this;
        var collection = this.getCollection(info);
        return new es6_promise_1.Promise(function (resolve, reject) {
            for (var i = 0; i < collection.length; i++) {
                if (_this.matchesKey(info, keyValue, collection[i])) {
                    resolve(collection[i]);
                }
            }
            reject();
        });
    };
    InMemoryStrategy.prototype.matchesKey = function (info, ref, current) {
        for (var i = 0; i < info.config.key.length; i++) {
            var name = info.config.key[i];
            if (ref[name] != current[name]) {
                return false;
            }
        }
        return true;
    };
    InMemoryStrategy.prototype.getCollection = function (info) {
        if (!this.objects[info.config.name]) {
            this.objects[info.config.name] = [];
        }
        return this.objects[info.config.name];
    };
    return InMemoryStrategy;
})();
exports.default = InMemoryStrategy;

},{"es6-promise":2}],2:[function(require,module,exports){
(function (process,global){
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   2.1.1
 */

(function() {
    "use strict";
    function lib$es6$promise$utils$$objectOrFunction(x) {
      return typeof x === 'function' || (typeof x === 'object' && x !== null);
    }

    function lib$es6$promise$utils$$isFunction(x) {
      return typeof x === 'function';
    }

    function lib$es6$promise$utils$$isMaybeThenable(x) {
      return typeof x === 'object' && x !== null;
    }

    var lib$es6$promise$utils$$_isArray;
    if (!Array.isArray) {
      lib$es6$promise$utils$$_isArray = function (x) {
        return Object.prototype.toString.call(x) === '[object Array]';
      };
    } else {
      lib$es6$promise$utils$$_isArray = Array.isArray;
    }

    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
    var lib$es6$promise$asap$$len = 0;
    var lib$es6$promise$asap$$toString = {}.toString;
    var lib$es6$promise$asap$$vertxNext;
    function lib$es6$promise$asap$$asap(callback, arg) {
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
      lib$es6$promise$asap$$len += 2;
      if (lib$es6$promise$asap$$len === 2) {
        // If len is 2, that means that we need to schedule an async flush.
        // If additional callbacks are queued before the queue is flushed, they
        // will be processed by this flush that we are scheduling.
        lib$es6$promise$asap$$scheduleFlush();
      }
    }

    var lib$es6$promise$asap$$default = lib$es6$promise$asap$$asap;

    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

    // test for web worker but not in IE10
    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
      typeof importScripts !== 'undefined' &&
      typeof MessageChannel !== 'undefined';

    // node
    function lib$es6$promise$asap$$useNextTick() {
      var nextTick = process.nextTick;
      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
      // setImmediate should be used instead instead
      var version = process.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
      if (Array.isArray(version) && version[1] === '0' && version[2] === '10') {
        nextTick = setImmediate;
      }
      return function() {
        nextTick(lib$es6$promise$asap$$flush);
      };
    }

    // vertx
    function lib$es6$promise$asap$$useVertxTimer() {
      return function() {
        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
      };
    }

    function lib$es6$promise$asap$$useMutationObserver() {
      var iterations = 0;
      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
      var node = document.createTextNode('');
      observer.observe(node, { characterData: true });

      return function() {
        node.data = (iterations = ++iterations % 2);
      };
    }

    // web worker
    function lib$es6$promise$asap$$useMessageChannel() {
      var channel = new MessageChannel();
      channel.port1.onmessage = lib$es6$promise$asap$$flush;
      return function () {
        channel.port2.postMessage(0);
      };
    }

    function lib$es6$promise$asap$$useSetTimeout() {
      return function() {
        setTimeout(lib$es6$promise$asap$$flush, 1);
      };
    }

    var lib$es6$promise$asap$$queue = new Array(1000);
    function lib$es6$promise$asap$$flush() {
      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
        var callback = lib$es6$promise$asap$$queue[i];
        var arg = lib$es6$promise$asap$$queue[i+1];

        callback(arg);

        lib$es6$promise$asap$$queue[i] = undefined;
        lib$es6$promise$asap$$queue[i+1] = undefined;
      }

      lib$es6$promise$asap$$len = 0;
    }

    function lib$es6$promise$asap$$attemptVertex() {
      try {
        var r = require;
        var vertx = r('vertx');
        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
        return lib$es6$promise$asap$$useVertxTimer();
      } catch(e) {
        return lib$es6$promise$asap$$useSetTimeout();
      }
    }

    var lib$es6$promise$asap$$scheduleFlush;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (lib$es6$promise$asap$$isNode) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
    } else if (lib$es6$promise$asap$$isWorker) {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
    } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === 'function') {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertex();
    } else {
      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
    }

    function lib$es6$promise$$internal$$noop() {}

    var lib$es6$promise$$internal$$PENDING   = void 0;
    var lib$es6$promise$$internal$$FULFILLED = 1;
    var lib$es6$promise$$internal$$REJECTED  = 2;

    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$selfFullfillment() {
      return new TypeError("You cannot resolve a promise with itself");
    }

    function lib$es6$promise$$internal$$cannotReturnOwn() {
      return new TypeError('A promises callback cannot return that same promise.');
    }

    function lib$es6$promise$$internal$$getThen(promise) {
      try {
        return promise.then;
      } catch(error) {
        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
        return lib$es6$promise$$internal$$GET_THEN_ERROR;
      }
    }

    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
      try {
        then.call(value, fulfillmentHandler, rejectionHandler);
      } catch(e) {
        return e;
      }
    }

    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
       lib$es6$promise$asap$$default(function(promise) {
        var sealed = false;
        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
          if (sealed) { return; }
          sealed = true;
          if (thenable !== value) {
            lib$es6$promise$$internal$$resolve(promise, value);
          } else {
            lib$es6$promise$$internal$$fulfill(promise, value);
          }
        }, function(reason) {
          if (sealed) { return; }
          sealed = true;

          lib$es6$promise$$internal$$reject(promise, reason);
        }, 'Settle: ' + (promise._label || ' unknown promise'));

        if (!sealed && error) {
          sealed = true;
          lib$es6$promise$$internal$$reject(promise, error);
        }
      }, promise);
    }

    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, thenable._result);
      } else {
        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      }
    }

    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
      if (maybeThenable.constructor === promise.constructor) {
        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
      } else {
        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
        } else if (then === undefined) {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        } else if (lib$es6$promise$utils$$isFunction(then)) {
          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
        } else {
          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
        }
      }
    }

    function lib$es6$promise$$internal$$resolve(promise, value) {
      if (promise === value) {
        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFullfillment());
      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
      } else {
        lib$es6$promise$$internal$$fulfill(promise, value);
      }
    }

    function lib$es6$promise$$internal$$publishRejection(promise) {
      if (promise._onerror) {
        promise._onerror(promise._result);
      }

      lib$es6$promise$$internal$$publish(promise);
    }

    function lib$es6$promise$$internal$$fulfill(promise, value) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

      promise._result = value;
      promise._state = lib$es6$promise$$internal$$FULFILLED;

      if (promise._subscribers.length !== 0) {
        lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publish, promise);
      }
    }

    function lib$es6$promise$$internal$$reject(promise, reason) {
      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
      promise._state = lib$es6$promise$$internal$$REJECTED;
      promise._result = reason;

      lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publishRejection, promise);
    }

    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
      var subscribers = parent._subscribers;
      var length = subscribers.length;

      parent._onerror = null;

      subscribers[length] = child;
      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

      if (length === 0 && parent._state) {
        lib$es6$promise$asap$$default(lib$es6$promise$$internal$$publish, parent);
      }
    }

    function lib$es6$promise$$internal$$publish(promise) {
      var subscribers = promise._subscribers;
      var settled = promise._state;

      if (subscribers.length === 0) { return; }

      var child, callback, detail = promise._result;

      for (var i = 0; i < subscribers.length; i += 3) {
        child = subscribers[i];
        callback = subscribers[i + settled];

        if (child) {
          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
        } else {
          callback(detail);
        }
      }

      promise._subscribers.length = 0;
    }

    function lib$es6$promise$$internal$$ErrorObject() {
      this.error = null;
    }

    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
      try {
        return callback(detail);
      } catch(e) {
        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
      }
    }

    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
          value, error, succeeded, failed;

      if (hasCallback) {
        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
          failed = true;
          error = value.error;
          value = null;
        } else {
          succeeded = true;
        }

        if (promise === value) {
          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
          return;
        }

      } else {
        value = detail;
        succeeded = true;
      }

      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
        // noop
      } else if (hasCallback && succeeded) {
        lib$es6$promise$$internal$$resolve(promise, value);
      } else if (failed) {
        lib$es6$promise$$internal$$reject(promise, error);
      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
        lib$es6$promise$$internal$$fulfill(promise, value);
      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
        lib$es6$promise$$internal$$reject(promise, value);
      }
    }

    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
      try {
        resolver(function resolvePromise(value){
          lib$es6$promise$$internal$$resolve(promise, value);
        }, function rejectPromise(reason) {
          lib$es6$promise$$internal$$reject(promise, reason);
        });
      } catch(e) {
        lib$es6$promise$$internal$$reject(promise, e);
      }
    }

    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
      var enumerator = this;

      enumerator._instanceConstructor = Constructor;
      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (enumerator._validateInput(input)) {
        enumerator._input     = input;
        enumerator.length     = input.length;
        enumerator._remaining = input.length;

        enumerator._init();

        if (enumerator.length === 0) {
          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
        } else {
          enumerator.length = enumerator.length || 0;
          enumerator._enumerate();
          if (enumerator._remaining === 0) {
            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
          }
        }
      } else {
        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
      }
    }

    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
      return lib$es6$promise$utils$$isArray(input);
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
      return new Error('Array Methods must be provided an Array');
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
      this._result = new Array(this.length);
    };

    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
      var enumerator = this;

      var length  = enumerator.length;
      var promise = enumerator.promise;
      var input   = enumerator._input;

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        enumerator._eachEntry(input[i], i);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
      var enumerator = this;
      var c = enumerator._instanceConstructor;

      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
          entry._onerror = null;
          enumerator._settledAt(entry._state, i, entry._result);
        } else {
          enumerator._willSettleAt(c.resolve(entry), i);
        }
      } else {
        enumerator._remaining--;
        enumerator._result[i] = entry;
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
      var enumerator = this;
      var promise = enumerator.promise;

      if (promise._state === lib$es6$promise$$internal$$PENDING) {
        enumerator._remaining--;

        if (state === lib$es6$promise$$internal$$REJECTED) {
          lib$es6$promise$$internal$$reject(promise, value);
        } else {
          enumerator._result[i] = value;
        }
      }

      if (enumerator._remaining === 0) {
        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
      }
    };

    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
      var enumerator = this;

      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
      }, function(reason) {
        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
      });
    };
    function lib$es6$promise$promise$all$$all(entries) {
      return new lib$es6$promise$enumerator$$default(this, entries).promise;
    }
    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
    function lib$es6$promise$promise$race$$race(entries) {
      /*jshint validthis:true */
      var Constructor = this;

      var promise = new Constructor(lib$es6$promise$$internal$$noop);

      if (!lib$es6$promise$utils$$isArray(entries)) {
        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
        return promise;
      }

      var length = entries.length;

      function onFulfillment(value) {
        lib$es6$promise$$internal$$resolve(promise, value);
      }

      function onRejection(reason) {
        lib$es6$promise$$internal$$reject(promise, reason);
      }

      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
      }

      return promise;
    }
    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
    function lib$es6$promise$promise$resolve$$resolve(object) {
      /*jshint validthis:true */
      var Constructor = this;

      if (object && typeof object === 'object' && object.constructor === Constructor) {
        return object;
      }

      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$resolve(promise, object);
      return promise;
    }
    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
    function lib$es6$promise$promise$reject$$reject(reason) {
      /*jshint validthis:true */
      var Constructor = this;
      var promise = new Constructor(lib$es6$promise$$internal$$noop);
      lib$es6$promise$$internal$$reject(promise, reason);
      return promise;
    }
    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

    var lib$es6$promise$promise$$counter = 0;

    function lib$es6$promise$promise$$needsResolver() {
      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
    }

    function lib$es6$promise$promise$$needsNew() {
      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }

    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
    /**
      Promise objects represent the eventual result of an asynchronous operation. The
      primary way of interacting with a promise is through its `then` method, which
      registers callbacks to receive either a promise’s eventual value or the reason
      why the promise cannot be fulfilled.

      Terminology
      -----------

      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
      - `thenable` is an object or function that defines a `then` method.
      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
      - `exception` is a value that is thrown using the throw statement.
      - `reason` is a value that indicates why a promise was rejected.
      - `settled` the final resting state of a promise, fulfilled or rejected.

      A promise can be in one of three states: pending, fulfilled, or rejected.

      Promises that are fulfilled have a fulfillment value and are in the fulfilled
      state.  Promises that are rejected have a rejection reason and are in the
      rejected state.  A fulfillment value is never a thenable.

      Promises can also be said to *resolve* a value.  If this value is also a
      promise, then the original promise's settled state will match the value's
      settled state.  So a promise that *resolves* a promise that rejects will
      itself reject, and a promise that *resolves* a promise that fulfills will
      itself fulfill.


      Basic Usage:
      ------------

      ```js
      var promise = new Promise(function(resolve, reject) {
        // on success
        resolve(value);

        // on failure
        reject(reason);
      });

      promise.then(function(value) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Advanced Usage:
      ---------------

      Promises shine when abstracting away asynchronous interactions such as
      `XMLHttpRequest`s.

      ```js
      function getJSON(url) {
        return new Promise(function(resolve, reject){
          var xhr = new XMLHttpRequest();

          xhr.open('GET', url);
          xhr.onreadystatechange = handler;
          xhr.responseType = 'json';
          xhr.setRequestHeader('Accept', 'application/json');
          xhr.send();

          function handler() {
            if (this.readyState === this.DONE) {
              if (this.status === 200) {
                resolve(this.response);
              } else {
                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
              }
            }
          };
        });
      }

      getJSON('/posts.json').then(function(json) {
        // on fulfillment
      }, function(reason) {
        // on rejection
      });
      ```

      Unlike callbacks, promises are great composable primitives.

      ```js
      Promise.all([
        getJSON('/posts'),
        getJSON('/comments')
      ]).then(function(values){
        values[0] // => postsJSON
        values[1] // => commentsJSON

        return values;
      });
      ```

      @class Promise
      @param {function} resolver
      Useful for tooling.
      @constructor
    */
    function lib$es6$promise$promise$$Promise(resolver) {
      this._id = lib$es6$promise$promise$$counter++;
      this._state = undefined;
      this._result = undefined;
      this._subscribers = [];

      if (lib$es6$promise$$internal$$noop !== resolver) {
        if (!lib$es6$promise$utils$$isFunction(resolver)) {
          lib$es6$promise$promise$$needsResolver();
        }

        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
          lib$es6$promise$promise$$needsNew();
        }

        lib$es6$promise$$internal$$initializePromise(this, resolver);
      }
    }

    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;

    lib$es6$promise$promise$$Promise.prototype = {
      constructor: lib$es6$promise$promise$$Promise,

    /**
      The primary way of interacting with a promise is through its `then` method,
      which registers callbacks to receive either a promise's eventual value or the
      reason why the promise cannot be fulfilled.

      ```js
      findUser().then(function(user){
        // user is available
      }, function(reason){
        // user is unavailable, and you are given the reason why
      });
      ```

      Chaining
      --------

      The return value of `then` is itself a promise.  This second, 'downstream'
      promise is resolved with the return value of the first promise's fulfillment
      or rejection handler, or rejected if the handler throws an exception.

      ```js
      findUser().then(function (user) {
        return user.name;
      }, function (reason) {
        return 'default name';
      }).then(function (userName) {
        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
        // will be `'default name'`
      });

      findUser().then(function (user) {
        throw new Error('Found user, but still unhappy');
      }, function (reason) {
        throw new Error('`findUser` rejected and we're unhappy');
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
      });
      ```
      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

      ```js
      findUser().then(function (user) {
        throw new PedagogicalException('Upstream error');
      }).then(function (value) {
        // never reached
      }).then(function (value) {
        // never reached
      }, function (reason) {
        // The `PedgagocialException` is propagated all the way down to here
      });
      ```

      Assimilation
      ------------

      Sometimes the value you want to propagate to a downstream promise can only be
      retrieved asynchronously. This can be achieved by returning a promise in the
      fulfillment or rejection handler. The downstream promise will then be pending
      until the returned promise is settled. This is called *assimilation*.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // The user's comments are now available
      });
      ```

      If the assimliated promise rejects, then the downstream promise will also reject.

      ```js
      findUser().then(function (user) {
        return findCommentsByAuthor(user);
      }).then(function (comments) {
        // If `findCommentsByAuthor` fulfills, we'll have the value here
      }, function (reason) {
        // If `findCommentsByAuthor` rejects, we'll have the reason here
      });
      ```

      Simple Example
      --------------

      Synchronous Example

      ```javascript
      var result;

      try {
        result = findResult();
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js
      findResult(function(result, err){
        if (err) {
          // failure
        } else {
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findResult().then(function(result){
        // success
      }, function(reason){
        // failure
      });
      ```

      Advanced Example
      --------------

      Synchronous Example

      ```javascript
      var author, books;

      try {
        author = findAuthor();
        books  = findBooksByAuthor(author);
        // success
      } catch(reason) {
        // failure
      }
      ```

      Errback Example

      ```js

      function foundBooks(books) {

      }

      function failure(reason) {

      }

      findAuthor(function(author, err){
        if (err) {
          failure(err);
          // failure
        } else {
          try {
            findBoooksByAuthor(author, function(books, err) {
              if (err) {
                failure(err);
              } else {
                try {
                  foundBooks(books);
                } catch(reason) {
                  failure(reason);
                }
              }
            });
          } catch(error) {
            failure(err);
          }
          // success
        }
      });
      ```

      Promise Example;

      ```javascript
      findAuthor().
        then(findBooksByAuthor).
        then(function(books){
          // found books
      }).catch(function(reason){
        // something went wrong
      });
      ```

      @method then
      @param {Function} onFulfilled
      @param {Function} onRejected
      Useful for tooling.
      @return {Promise}
    */
      then: function(onFulfillment, onRejection) {
        var parent = this;
        var state = parent._state;

        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
          return this;
        }

        var child = new this.constructor(lib$es6$promise$$internal$$noop);
        var result = parent._result;

        if (state) {
          var callback = arguments[state - 1];
          lib$es6$promise$asap$$default(function(){
            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
          });
        } else {
          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
        }

        return child;
      },

    /**
      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
      as the catch block of a try/catch statement.

      ```js
      function findAuthor(){
        throw new Error('couldn't find that author');
      }

      // synchronous
      try {
        findAuthor();
      } catch(reason) {
        // something went wrong
      }

      // async with promises
      findAuthor().catch(function(reason){
        // something went wrong
      });
      ```

      @method catch
      @param {Function} onRejection
      Useful for tooling.
      @return {Promise}
    */
      'catch': function(onRejection) {
        return this.then(null, onRejection);
      }
    };
    function lib$es6$promise$polyfill$$polyfill() {
      var local;

      if (typeof global !== 'undefined') {
          local = global;
      } else if (typeof self !== 'undefined') {
          local = self;
      } else {
          try {
              local = Function('return this')();
          } catch (e) {
              throw new Error('polyfill failed because global object is unavailable in this environment');
          }
      }

      var P = local.Promise;

      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
        return;
      }

      local.Promise = lib$es6$promise$promise$$default;
    }
    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

    var lib$es6$promise$umd$$ES6Promise = {
      'Promise': lib$es6$promise$promise$$default,
      'polyfill': lib$es6$promise$polyfill$$default
    };

    /* global define:true module:true window: true */
    if (typeof define === 'function' && define['amd']) {
      define(function() { return lib$es6$promise$umd$$ES6Promise; });
    } else if (typeof module !== 'undefined' && module['exports']) {
      module['exports'] = lib$es6$promise$umd$$ES6Promise;
    } else if (typeof this !== 'undefined') {
      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
    }

    lib$es6$promise$polyfill$$default();
}).call(this);


}).call(this,require("1YiZ5S"),typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"1YiZ5S":3}],3:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
}

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBlcnNpc3RlbmNlU3RyYXRlZ3kvSW5NZW1vcnlTdHJhdGVneS50cyJdLCJuYW1lcyI6WyJJbk1lbW9yeVN0cmF0ZWd5IiwiSW5NZW1vcnlTdHJhdGVneS5jb25zdHJ1Y3RvciIsIkluTWVtb3J5U3RyYXRlZ3kuY3JlYXRlIiwiSW5NZW1vcnlTdHJhdGVneS51cGRhdGUiLCJJbk1lbW9yeVN0cmF0ZWd5LmRlbGV0ZSIsIkluTWVtb3J5U3RyYXRlZ3kuZmluZCIsIkluTWVtb3J5U3RyYXRlZ3kuZmluZC5hbGxGaWx0ZXIiLCJJbk1lbW9yeVN0cmF0ZWd5LmZpbmQuc3RyaWN0RmlsdGVyIiwiSW5NZW1vcnlTdHJhdGVneS5maW5kQnlLZXkiLCJJbk1lbW9yeVN0cmF0ZWd5Lm1hdGNoZXNLZXkiLCJJbk1lbW9yeVN0cmF0ZWd5LmdldENvbGxlY3Rpb24iXSwibWFwcGluZ3MiOiJBQUFBLGtFQUFrRTtBQUNsRSxvREFBb0Q7QUFJcEQsNEJBQXNCLGFBQWEsQ0FBQyxDQUFBO0FBRXBDO0lBR0lBO1FBRlFDLFlBQU9BLEdBQThCQSxFQUFFQSxDQUFDQTtJQUV6QkEsQ0FBQ0E7SUFFakJELGlDQUFNQSxHQUFiQSxVQUFlQSxJQUFlQSxFQUFFQSxHQUFHQTtRQUFuQ0UsaUJBTUNBO1FBTEdBLE1BQU1BLENBQUNBLElBQUlBLHFCQUFPQSxDQUFPQSxVQUFDQSxPQUFPQSxFQUFFQSxNQUFNQTtZQUNyQ0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsS0FBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDdEVBLEtBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ3pDQSxPQUFPQSxF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Q0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsR0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0EsRUFBRUEsRUFBRUEsQ0FBQ0E7WUFDekNBLElBQUlBLElBQUlBLEdBQUdBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQzlCQSxFQUFFQSxDQUFBQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDNUJBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO1lBQ2pCQSxDQUFDQTtRQUNMQSxDQUFDQTtRQUNEQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQTtJQUNoQkEsQ0FBQ0E7SUFFT1Qsd0NBQWFBLEdBQXJCQSxVQUF1QkEsSUFBZ0JBO1FBQ25DVSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNqQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsRUFBRUEsQ0FBQ0E7UUFDeENBLENBQUNBO1FBQ0RBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBO0lBQzFDQSxDQUFDQTtJQUNMVix1QkFBQ0E7QUFBREEsQ0E1RkEsQUE0RkNBLElBQUE7QUE1RkQsa0NBNEZDLENBQUEiLCJmaWxlIjoiUGVyc2lzdGVuY2VTdHJhdGVneS9Jbk1lbW9yeVN0cmF0ZWd5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vdHlwaW5ncy9lczYtcHJvbWlzZS9lczYtcHJvbWlzZS5kLnRzXCIgLz5cbi8vLzxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uL3R5cGluZ3Mvbm9kZS9ub2RlLmQudHNcIiAvPlxuXG5pbXBvcnQge1BlcnNpc3RlbmNlU3RyYXRlZ3l9IGZyb20gJy4uL1BlcnNpc3RlbmNlU3RyYXRlZ3knO1xuaW1wb3J0IEVudGl0eUluZm8gZnJvbSAnLi4vRW50aXR5SW5mbyc7XG5pbXBvcnQge1Byb21pc2V9IGZyb20gJ2VzNi1wcm9taXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5NZW1vcnlTdHJhdGVneSBpbXBsZW1lbnRzIFBlcnNpc3RlbmNlU3RyYXRlZ3kge1xuICAgIHByaXZhdGUgb2JqZWN0czp7W25hbWU6c3RyaW5nXTpBcnJheTxhbnk+fSA9IHt9O1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICgpIHt9XG5cbiAgICBwdWJsaWMgY3JlYXRlIChpbmZvOkVudGl0eUluZm8sIG9iaik6UHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9iamVjdHNbaW5mby5jb25maWcubmFtZV0gPSB0aGlzLm9iamVjdHNbaW5mby5jb25maWcubmFtZV0gfHwgW107XG4gICAgICAgICAgICB0aGlzLm9iamVjdHNbaW5mby5jb25maWcubmFtZV0ucHVzaChvYmopO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlIChpbmZvOkVudGl0eUluZm8sIG9iaik6UHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maW5kQnlLZXkoaW5mbywgb2JqKS50aGVuKChmb3VuZCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcih2YXIgbmFtZSBpbiBmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZFtuYW1lXSA9IG9ialtuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGUgKGluZm86RW50aXR5SW5mbywgb2JqKTpQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oaW5mbyk7XG4gICAgICAgIHZhciByZXNvbHZlZCA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgZm9yKHZhciBpPTA7IGk8Y29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubWF0Y2hlc0tleShpbmZvLCBvYmosIGNvbGxlY3Rpb25baV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZighcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmQgKGluZm86RW50aXR5SW5mbywgY3JpdGVyaWE6T2JqZWN0KSA6IFByb21pc2U8QXJyYXk8YW55Pj4ge1xuICAgICAgICBmdW5jdGlvbiBhbGxGaWx0ZXIgKG9iaikgOiBib29sZWFuIHtyZXR1cm4gdHJ1ZTt9XG4gICAgICAgIGZ1bmN0aW9uIHN0cmljdEZpbHRlciAob2JqKSA6IGJvb2xlYW4ge1xuICAgICAgICAgICAgZm9yKHZhciBuYW1lIGluIGNyaXRlcmlhKSB7XG4gICAgICAgICAgICAgICAgaWYob2JqW25hbWVdICE9IGNyaXRlcmlhW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxBcnJheTxhbnk+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IHRoaXMuZ2V0Q29sbGVjdGlvbihpbmZvKSxcbiAgICAgICAgICAgICAgICBmaWx0ZXIgOiAoYW55KSA9PiBib29sZWFuO1xuICAgICAgICAgICAgaWYoY3JpdGVyaWEgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZpbHRlciA9IGFsbEZpbHRlcjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyID0gc3RyaWN0RmlsdGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShjb2xsZWN0aW9uLmZpbHRlcihmaWx0ZXIpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGZpbmRCeUtleSAoaW5mbzpFbnRpdHlJbmZvLCBrZXlWYWx1ZTpPYmplY3QpIDogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSB0aGlzLmdldENvbGxlY3Rpb24oaW5mbyk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpPGNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLm1hdGNoZXNLZXkoaW5mbywga2V5VmFsdWUsIGNvbGxlY3Rpb25baV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29sbGVjdGlvbltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgbWF0Y2hlc0tleSAoaW5mbzpFbnRpdHlJbmZvLCByZWYsIGN1cnJlbnQpIDogQm9vbGVhbiB7XG4gICAgICAgIGZvcih2YXIgaT0wOyBpPGluZm8uY29uZmlnLmtleS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBpbmZvLmNvbmZpZy5rZXlbaV07XG4gICAgICAgICAgICBpZihyZWZbbmFtZV0gIT0gY3VycmVudFtuYW1lXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldENvbGxlY3Rpb24gKGluZm86IEVudGl0eUluZm8pIDogQXJyYXk8YW55PiB7XG4gICAgICAgIGlmKCF0aGlzLm9iamVjdHNbaW5mby5jb25maWcubmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMub2JqZWN0c1tpbmZvLmNvbmZpZy5uYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm9iamVjdHNbaW5mby5jb25maWcubmFtZV07XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==