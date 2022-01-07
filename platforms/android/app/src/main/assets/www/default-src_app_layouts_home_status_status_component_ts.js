(self["webpackChunksmuppy"] = self["webpackChunksmuppy"] || []).push([["default-src_app_layouts_home_status_status_component_ts"],{

/***/ 16351:
/*!*******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/awesome-cordova-plugin.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* binding */ AwesomeCordovaNativePlugin)
/* harmony export */ });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ 9343);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 91674);


var AwesomeCordovaNativePlugin = /** @class */ (function () {
    function AwesomeCordovaNativePlugin() {
    }
    /**
     * Returns a boolean that indicates whether the plugin is installed
     *
     * @returns {boolean}
     */
    AwesomeCordovaNativePlugin.installed = function () {
        var isAvailable = (0,_decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
        return isAvailable;
    };
    /**
     * Returns the original plugin object
     */
    AwesomeCordovaNativePlugin.getPlugin = function () {
        if (typeof window !== 'undefined') {
            return (0,_util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
        }
        return null;
    };
    /**
     * Returns the plugin's name
     */
    AwesomeCordovaNativePlugin.getPluginName = function () {
        var pluginName = this.pluginName;
        return pluginName;
    };
    /**
     * Returns the plugin's reference
     */
    AwesomeCordovaNativePlugin.getPluginRef = function () {
        var pluginRef = this.pluginRef;
        return pluginRef;
    };
    /**
     * Returns the plugin's install name
     */
    AwesomeCordovaNativePlugin.getPluginInstallName = function () {
        var plugin = this.plugin;
        return plugin;
    };
    /**
     * Returns the plugin's supported platforms
     */
    AwesomeCordovaNativePlugin.getSupportedPlatforms = function () {
        var platform = this.platforms;
        return platform;
    };
    AwesomeCordovaNativePlugin.pluginName = '';
    AwesomeCordovaNativePlugin.pluginRef = '';
    AwesomeCordovaNativePlugin.plugin = '';
    AwesomeCordovaNativePlugin.repo = '';
    AwesomeCordovaNativePlugin.platforms = [];
    AwesomeCordovaNativePlugin.install = '';
    return AwesomeCordovaNativePlugin;
}());

//# sourceMappingURL=awesome-cordova-plugin.js.map

/***/ }),

/***/ 46367:
/*!******************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/bootstrap.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReady": () => (/* binding */ checkReady)
/* harmony export */ });
/**
 *
 */
function checkReady() {
    if (typeof process === 'undefined') {
        var win_1 = typeof window !== 'undefined' ? window : {};
        var DEVICE_READY_TIMEOUT_1 = 5000;
        // To help developers using cordova, we listen for the device ready event and
        // log an error if it didn't fire in a reasonable amount of time. Generally,
        // when this happens, developers should remove and reinstall plugins, since
        // an inconsistent plugin is often the culprit.
        var before_1 = Date.now();
        var didFireReady_1 = false;
        win_1.document.addEventListener('deviceready', function () {
            console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
            didFireReady_1 = true;
        });
        setTimeout(function () {
            if (!didFireReady_1 && win_1.cordova) {
                console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
            }
        }, DEVICE_READY_TIMEOUT_1);
    }
}
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ 9343:
/*!**************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/common.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERR_CORDOVA_NOT_AVAILABLE": () => (/* binding */ ERR_CORDOVA_NOT_AVAILABLE),
/* harmony export */   "ERR_PLUGIN_NOT_INSTALLED": () => (/* binding */ ERR_PLUGIN_NOT_INSTALLED),
/* harmony export */   "getPromise": () => (/* binding */ getPromise),
/* harmony export */   "wrapPromise": () => (/* binding */ wrapPromise),
/* harmony export */   "checkAvailability": () => (/* binding */ checkAvailability),
/* harmony export */   "instanceAvailability": () => (/* binding */ instanceAvailability),
/* harmony export */   "setIndex": () => (/* binding */ setIndex),
/* harmony export */   "callCordovaPlugin": () => (/* binding */ callCordovaPlugin),
/* harmony export */   "callInstance": () => (/* binding */ callInstance),
/* harmony export */   "getPlugin": () => (/* binding */ getPlugin),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "pluginWarn": () => (/* binding */ pluginWarn),
/* harmony export */   "cordovaWarn": () => (/* binding */ cordovaWarn),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapInstance": () => (/* binding */ wrapInstance)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 22759);

var ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
var ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };
/**
 * @param callback
 */
function getPromise(callback) {
    var tryNativePromise = function () {
        if (Promise) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    if (typeof window !== 'undefined' && window.angular) {
        var doc = window.document;
        var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();
        if (injector) {
            var $q = injector.get('$q');
            return $q(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
    }
    return tryNativePromise();
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    var pluginResult, rej;
    var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return resolve(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return reject(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej = reject;
    });
    // Angular throws an error on unhandled rejection, but in this case we have already printed
    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
    // to error
    if (pluginResult && pluginResult.error) {
        p.catch(function () { });
        typeof rej === 'function' && rej(pluginResult.error);
    }
    return p;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapOtherPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return getPromise(function (resolve, reject) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
        if (pluginResult) {
            if (pluginResult.error) {
                reject(pluginResult.error);
            }
            else if (pluginResult.then) {
                pluginResult.then(resolve).catch(reject);
            }
        }
        else {
            reject({ error: 'unexpected_error' });
        }
    });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapObservable(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var pluginResult;
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.next(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.error(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }
        if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
            observer.complete();
        }
        return function () {
            try {
                if (opts.clearFunction) {
                    if (opts.clearWithArgs) {
                        return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                    }
                    return callCordovaPlugin(pluginObj, opts.clearFunction, []);
                }
            }
            catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                console.warn(e);
            }
        };
    });
}
/**
 * Wrap the event with an observable
 *
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event, element) {
    element =
        typeof window !== 'undefined' && element
            ? get(window, element)
            : element || (typeof window !== 'undefined' ? window : {});
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, event);
}
/**
 * @param plugin
 * @param methodName
 * @param pluginName
 */
function checkAvailability(plugin, methodName, pluginName) {
    var pluginRef, pluginPackage;
    if (typeof plugin === 'string') {
        pluginRef = plugin;
    }
    else {
        pluginRef = plugin.constructor.getPluginRef();
        pluginName = plugin.constructor.getPluginName();
        pluginPackage = plugin.constructor.getPluginInstallName();
    }
    var pluginInstance = getPlugin(pluginRef);
    if (!pluginInstance || (!!methodName && typeof pluginInstance[methodName] === 'undefined')) {
        if (typeof window === 'undefined' || !window.cordova) {
            cordovaWarn(pluginName, methodName);
            return ERR_CORDOVA_NOT_AVAILABLE;
        }
        pluginWarn(pluginName, pluginPackage, methodName);
        return ERR_PLUGIN_NOT_INSTALLED;
    }
    return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 *
 * @param pluginObj
 * @param methodName
 * @private
 */
function instanceAvailability(pluginObj, methodName) {
    return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
/**
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function setIndex(args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // ignore resolve and reject in case sync
    if (opts.sync) {
        return args;
    }
    // If the plugin method expects myMethod(success, err, options)
    if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (opts.callbackStyle === 'node') {
        args.push(function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }
    else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
        var obj = {};
        obj[opts.successName] = resolve;
        obj[opts.errorName] = reject;
        args.push(obj);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        var setSuccessIndex = function () {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
                args[opts.successIndex] = resolve;
            }
            else {
                args.splice(opts.successIndex, 0, resolve);
            }
        };
        var setErrorIndex = function () {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
            // defined and thus causing non expected behavior.
            if (opts.errorIndex > args.length) {
                args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            }
            else {
                args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
        };
        if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
        }
        else {
            setSuccessIndex();
            setErrorIndex();
        }
    }
    else {
        // Otherwise, let's tack them on to the end of the argument list
        // which is 90% of cases
        args.push(resolve);
        args.push(reject);
    }
    return args;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // Try to figure out where the success/error callbacks need to be bound
    // to our promise resolve/reject handlers.
    args = setIndex(args, opts, resolve, reject);
    var availabilityCheck = checkAvailability(pluginObj, methodName);
    if (availabilityCheck === true) {
        var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
        // eslint-disable-next-line prefer-spread
        return pluginInstance[methodName].apply(pluginInstance, args);
    }
    else {
        return availabilityCheck;
    }
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    if (instanceAvailability(pluginObj, methodName)) {
        // eslint-disable-next-line prefer-spread
        return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
    }
}
/**
 * @param pluginRef
 */
function getPlugin(pluginRef) {
    if (typeof window !== 'undefined') {
        return get(window, pluginRef);
    }
    return null;
}
/**
 * @param element
 * @param path
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @param pluginName
 * @param plugin
 * @param method
 */
function pluginWarn(pluginName, plugin, method) {
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
    }
    else {
        console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
    }
    if (plugin) {
        console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
    }
}
/**
 * @private
 * @param pluginName
 * @param method
 */
function cordovaWarn(pluginName, method) {
    if (typeof process === 'undefined') {
        if (method) {
            console.warn('Native: tried calling ' +
                pluginName +
                '.' +
                method +
                ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
        else {
            console.warn('Native: tried accessing the ' +
                pluginName +
                ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    }
}
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
var wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callCordovaPlugin(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
        }
        else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event, opts.element);
        }
        else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
        }
        else {
            return wrapPromise(pluginObj, methodName, args, opts);
        }
    };
};
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
function wrapInstance(pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            return callInstance(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
                var pluginResult;
                if (opts.destruct) {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.next(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.error(args);
                    });
                }
                else {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }
                if (pluginResult && pluginResult.error) {
                    observer.error(pluginResult.error);
                }
                return function () {
                    try {
                        if (opts.clearWithArgs) {
                            return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                        }
                        return callInstance(pluginObj, opts.clearFunction, []);
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                        console.warn(e);
                    }
                };
            });
        }
        else if (opts.otherPromise) {
            return getPromise(function (resolve, reject) {
                var result;
                if (opts.destruct) {
                    result = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                if (result && result.then) {
                    result.then(resolve, reject);
                }
                else {
                    reject();
                }
            });
        }
        else {
            var pluginResult_1, rej_1;
            var p = getPromise(function (resolve, reject) {
                if (opts.destruct) {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                rej_1 = reject;
            });
            // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error
            if (pluginResult_1 && pluginResult_1.error) {
                p.catch(function () { });
                typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
            }
            return p;
        }
    };
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 531:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaFunctionOverride": () => (/* binding */ cordovaFunctionOverride)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9343);


/**
 * @param pluginObj
 * @param methodName
 */
function overrideFunction(pluginObj, methodName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
        var availabilityCheck = (0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, methodName);
        if (availabilityCheck === true) {
            var pluginInstance_1 = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef());
            pluginInstance_1[methodName] = observer.next.bind(observer);
            return function () { return (pluginInstance_1[methodName] = function () { }); };
        }
        else {
            observer.error(availabilityCheck);
            observer.complete();
        }
    });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 */
function cordovaFunctionOverride(pluginObj, methodName, args) {
    if (args === void 0) { args = []; }
    return overrideFunction(pluginObj, methodName);
}
//# sourceMappingURL=cordova-function-override.js.map

/***/ }),

/***/ 90808:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaInstance": () => (/* binding */ cordovaInstance)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9343);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordovaInstance(pluginObj, methodName, config, args) {
    args = Array.from(args);
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova-instance.js.map

/***/ }),

/***/ 34070:
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-property.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaPropertyGet": () => (/* binding */ cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* binding */ cordovaPropertySet)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9343);

/**
 * @param pluginObj
 * @param key
 */
function cordovaPropertyGet(pluginObj, key) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        return (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
    }
    return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
function cordovaPropertySet(pluginObj, key, value) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
    }
}
//# sourceMappingURL=cordova-property.js.map

/***/ }),

/***/ 43364:
/*!***************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordova": () => (/* binding */ cordova)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9343);

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordova(pluginObj, methodName, config, args) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova.js.map

/***/ }),

/***/ 70422:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/instance-property.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instancePropertyGet": () => (/* binding */ instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* binding */ instancePropertySet)
/* harmony export */ });
/**
 * @param pluginObj
 * @param key
 */
function instancePropertyGet(pluginObj, key) {
    if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
        return pluginObj._objectInstance[key];
    }
    return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
function instancePropertySet(pluginObj, key, value) {
    if (pluginObj._objectInstance) {
        pluginObj._objectInstance[key] = value;
    }
}
//# sourceMappingURL=instance-property.js.map

/***/ }),

/***/ 60303:
/*!******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/interfaces.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ 16887:
/*!**************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AwesomeCordovaNativePlugin": () => (/* reexport safe */ _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__.AwesomeCordovaNativePlugin),
/* harmony export */   "checkAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability),
/* harmony export */   "instanceAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability),
/* harmony export */   "wrap": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap),
/* harmony export */   "getPromise": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise),
/* harmony export */   "cordova": () => (/* reexport safe */ _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova),
/* harmony export */   "cordovaFunctionOverride": () => (/* reexport safe */ _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride),
/* harmony export */   "cordovaInstance": () => (/* reexport safe */ _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance),
/* harmony export */   "cordovaPropertyGet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet),
/* harmony export */   "instancePropertyGet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ 46367);
/* harmony import */ var _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awesome-cordova-plugin */ 16351);
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ 9343);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ 43364);
/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ 531);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ 90808);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ 34070);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ 70422);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ 60303);


// Decorators







(0,_bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)();

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 91674:
/*!*************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/util.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPromise": () => (/* binding */ getPromise)
/* harmony export */ });
/**
 * @param element
 * @param path
 * @private
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @param callback
 * @private
 */
function getPromise(callback) {
    if (callback === void 0) { callback = function () { }; }
    var tryNativePromise = function () {
        if (typeof Promise === 'function' || (typeof window !== 'undefined' && window.Promise)) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    return tryNativePromise();
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 42853:
/*!***************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/media-capture/__ivy_ngcc__/ngx/index.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaCapture": () => (/* binding */ MediaCapture)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/core */ 16887);





var MediaCapture = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MediaCapture, _super);
    function MediaCapture() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaCapture.prototype.captureAudio = function (options) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "captureAudio", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.captureImage = function (options) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "captureImage", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.captureVideo = function (options) { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "captureVideo", { "callbackOrder": "reverse" }, arguments); };
    MediaCapture.prototype.onPendingCaptureResult = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "onPendingCaptureResult", { "eventObservable": true, "event": "pendingcaptureresult" }, arguments); };
    MediaCapture.prototype.onPendingCaptureError = function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "onPendingCaptureError", { "eventObservable": true, "event": "pendingcaptureerror" }, arguments); };
    Object.defineProperty(MediaCapture.prototype, "supportedImageModes", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "supportedImageModes"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "supportedImageModes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaCapture.prototype, "supportedAudioModes", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "supportedAudioModes"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "supportedAudioModes", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaCapture.prototype, "supportedVideoModes", {
        get: function () { return (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "supportedVideoModes"); },
        set: function (value) { (0,_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "supportedVideoModes", value); },
        enumerable: false,
        configurable: true
    });
    MediaCapture.pluginName = "MediaCapture";
    MediaCapture.plugin = "cordova-plugin-media-capture";
    MediaCapture.pluginRef = "navigator.device.capture";
    MediaCapture.repo = "https://github.com/apache/cordova-plugin-media-capture";
    MediaCapture.platforms = ["Android", "Browser", "iOS", "Windows"];
MediaCapture.ɵfac = /*@__PURE__*/ function () { var ɵMediaCapture_BaseFactory; return function MediaCapture_Factory(t) { return (ɵMediaCapture_BaseFactory || (ɵMediaCapture_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](MediaCapture)))(t || MediaCapture); }; }();
MediaCapture.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MediaCapture, factory: function (t) { return MediaCapture.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MediaCapture, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return MediaCapture;
}(_awesome_cordova_plugins_core__WEBPACK_IMPORTED_MODULE_0__.AwesomeCordovaNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcGx1Z2lucy9tZWRpYS1jYXB0dXJlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLCtFQUFnRSxNQUFNLCtCQUErQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBQ2xDO0FBR3NCLElBdUpZLGdDQUEwQjtBQUFDO0FBRXZDO0FBRUE7QUFBTSxJQThCMUIsbUNBQVksYUFBQyxPQUE2QjtBQUtwQixJQVF0QixtQ0FBWSxhQUFDLE9BQTZCO0FBS3BCLElBUXRCLG1DQUFZLGFBQUMsT0FBNkI7QUFLcEIsSUFRdEIsNkNBQXNCO0FBT1MsSUFNL0IsNENBQXFCO0FBSW1FLDBCQW5GeEYsNkNBQW1CO0FBQUk7QUFJdkI7QUFJdUI7QUFHeEI7QUFBMkI7QUFBUSwwQkFIbEMsNkNBQW1CO0FBQUk7QUFHbUM7QUFLbkQ7QUFBMkI7QUFHeEI7QUFBUSwwQkFIbEIsNkNBQW1CO0FBQUk7QUFHbUM7QUFHaEM7QUFFaEI7QUFDYztBQUN0QjtBQUN5QztBQUk1QztBQUNtRDtBQUc1QjtnREEzQ3ZCLFVBQVU7Ozs7MEJBQ0w7QUFBQyx1QkE3SlA7QUFBRSxFQTZKZ0MsMEJBQTBCO0FBQzNELFNBRFksWUFBWTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5kZWNsYXJlIGNvbnN0IG5hdmlnYXRvcjogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhRmlsZSB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZmlsZSwgd2l0aG91dCBwYXRoIGluZm9ybWF0aW9uLlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSwgaW5jbHVkaW5nIHRoZSBuYW1lLlxuICAgKi9cbiAgZnVsbFBhdGg6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBmaWxlJ3MgbWltZSB0eXBlXG4gICAqL1xuICB0eXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBkYXRlIGFuZCB0aW1lIHdoZW4gdGhlIGZpbGUgd2FzIGxhc3QgbW9kaWZpZWQuXG4gICAqL1xuICBsYXN0TW9kaWZpZWREYXRlOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZmlsZSwgaW4gYnl0ZXMuXG4gICAqL1xuICBzaXplOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyB0aGUgZm9ybWF0IGluZm9ybWF0aW9uIG9mIHRoZSBtZWRpYSBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdWNjZXNzQ2FsbGJhY2tcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZXJyb3JDYWxsYmFja1xuICAgKi9cbiAgZ2V0Rm9ybWF0RGF0YShzdWNjZXNzQ2FsbGJhY2s6IChkYXRhOiBNZWRpYUZpbGVEYXRhKSA9PiBhbnksIGVycm9yQ2FsbGJhY2s/OiAoZXJyOiBhbnkpID0+IGFueSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFGaWxlRGF0YSB7XG4gIC8qKlxuICAgKiBUaGUgYWN0dWFsIGZvcm1hdCBvZiB0aGUgYXVkaW8gYW5kIHZpZGVvIGNvbnRlbnQuXG4gICAqL1xuICBjb2RlY3M6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBhdmVyYWdlIGJpdHJhdGUgb2YgdGhlIGNvbnRlbnQuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBpbWFnZXMuXG4gICAqL1xuICBiaXRyYXRlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBpbWFnZSBvciB2aWRlbyBpbiBwaXhlbHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBhdWRpbyBjbGlwcy5cbiAgICovXG4gIGhlaWdodDogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBpbWFnZSBvciB2aWRlbyBpbiBwaXhlbHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBhdWRpbyBjbGlwcy5cbiAgICovXG4gIHdpZHRoOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgbGVuZ3RoIG9mIHRoZSB2aWRlbyBvciBzb3VuZCBjbGlwIGluIHNlY29uZHMuIFRoZSB2YWx1ZSBpcyB6ZXJvIGZvciBpbWFnZXMuXG4gICAqL1xuICBkdXJhdGlvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcHR1cmVFcnJvciB7XG4gIGNvZGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXB0dXJlQXVkaW9PcHRpb25zIHtcbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIGF1ZGlvIGNsaXBzLiBEZWZhdWx0cyB0byAxLlxuICAgKiBPbiBpT1MgeW91IGNhbiBvbmx5IHJlY29yZCBvbmUgZmlsZS5cbiAgICovXG4gIGxpbWl0PzogbnVtYmVyO1xuICAvKipcbiAgICogTWF4aW11bSBkdXJhdGlvbiBvZiBhbiBhdWRpbyBzb3VuZCBjbGlwLCBpbiBzZWNvbmRzLiBUaGlzIGRvZXMgbm90IHdvcmsgb24gQW5kcm9pZCBkZXZpY2VzLlxuICAgKi9cbiAgZHVyYXRpb24/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdHVyZUltYWdlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNYXhpbXVtIG51bWJlciBvZiBpbWFnZXMgdG8gY2FwdHVyZS4gVGhpcyBsaW1pdCBpcyBub3Qgc3VwcG9ydGVkIG9uIGlPUywgb25seSBvbmUgaW1hZ2Ugd2lsbCBiZSB0YWtlbiBwZXIgaW52b2NhdGlvbi5cbiAgICovXG4gIGxpbWl0PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcHR1cmVWaWRlb09wdGlvbnMge1xuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgdmlkZW8gY2xpcHMgdG8gcmVjb3JkLiBUaGlzIHZhbHVlIGlzIGlnbm9yZWQgb24gaU9TLCBvbmx5IG9uZSB2aWRlbyBjbGlwIGNhbiBiZSB0YWtlbiBwZXIgaW52b2NhdGlvbi5cbiAgICovXG4gIGxpbWl0PzogbnVtYmVyO1xuICAvKipcbiAgICogTWF4aW11bSBkdXJhdGlvbiBwZXIgdmlkZW8gY2xpcC4gVGhpcyB3aWxsIGJlIGlnbm9yZWQgb24gQmxhY2tCZXJyeS5cbiAgICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICAvKipcbiAgICogUXVhbGl0eSBvZiB0aGUgdmlkZW8uIFRoaXMgcGFyYW1ldGVyIGNhbiBvbmx5IGJlIHVzZWQgd2l0aCBBbmRyb2lkLlxuICAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWd1cmF0aW9uRGF0YSB7XG4gIC8qKlxuICAgKiBUaGUgQVNDSUktZW5jb2RlZCBsb3dlcmNhc2Ugc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgbWVkaWEgdHlwZS5cbiAgICovXG4gIHR5cGU6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGltYWdlIG9yIHZpZGVvIGluIHBpeGVscy4gVGhlIHZhbHVlIGlzIHplcm8gZm9yIHNvdW5kIGNsaXBzLlxuICAgKi9cbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgd2lkdGggb2YgdGhlIGltYWdlIG9yIHZpZGVvIGluIHBpeGVscy4gVGhlIHZhbHVlIGlzIHplcm8gZm9yIHNvdW5kIGNsaXBzLlxuICAgKi9cbiAgd2lkdGg6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAbmFtZSBNZWRpYSBDYXB0dXJlXG4gKiBAcHJlbWllciBtZWRpYS1jYXB0dXJlXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIGFjY2VzcyB0byB0aGUgZGV2aWNlJ3MgYXVkaW8sIGltYWdlLCBhbmQgdmlkZW8gY2FwdHVyZSBjYXBhYmlsaXRpZXMuXG4gKlxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1tZWRpYS1jYXB0dXJlYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW01lZGlhIENhcHR1cmUgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbWVkaWEtY2FwdHVyZSkuXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1lZGlhQ2FwdHVyZSwgTWVkaWFGaWxlLCBDYXB0dXJlRXJyb3IsIENhcHR1cmVJbWFnZU9wdGlvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbWVkaWEtY2FwdHVyZS9uZ3gnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lZGlhQ2FwdHVyZTogTWVkaWFDYXB0dXJlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogbGV0IG9wdGlvbnM6IENhcHR1cmVJbWFnZU9wdGlvbnMgPSB7IGxpbWl0OiAzIH1cbiAqIHRoaXMubWVkaWFDYXB0dXJlLmNhcHR1cmVJbWFnZShvcHRpb25zKVxuICogICAudGhlbihcbiAqICAgICAoZGF0YTogTWVkaWFGaWxlW10pID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICogICAgIChlcnI6IENhcHR1cmVFcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnIpXG4gKiAgICk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogTWVkaWFGaWxlXG4gKiBNZWRpYUZpbGVEYXRhXG4gKiBDYXB0dXJlRXJyb3JcbiAqIENhcHR1cmVBdWRpb09wdGlvbnNcbiAqIENhcHR1cmVJbWFnZU9wdGlvbnNcbiAqIENhcHR1cmVWaWRlb09wdGlvbnNcbiAqIENvbmZpZ3VyYXRpb25EYXRhXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTWVkaWFDYXB0dXJlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEtY2FwdHVyZScsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5kZXZpY2UuY2FwdHVyZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW1lZGlhLWNhcHR1cmUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lZGlhQ2FwdHVyZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoZSByZWNvcmRpbmcgaW1hZ2Ugc2l6ZXMgYW5kIGZvcm1hdHMgc3VwcG9ydGVkIGJ5IHRoZSBkZXZpY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtDb25maWd1cmF0aW9uRGF0YVtdfVxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIHN1cHBvcnRlZEltYWdlTW9kZXM6IENvbmZpZ3VyYXRpb25EYXRhW107XG5cbiAgLyoqXG4gICAqIFRoZSBhdWRpbyByZWNvcmRpbmcgZm9ybWF0cyBzdXBwb3J0ZWQgYnkgdGhlIGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge0NvbmZpZ3VyYXRpb25EYXRhW119XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc3VwcG9ydGVkQXVkaW9Nb2RlczogQ29uZmlndXJhdGlvbkRhdGFbXTtcblxuICAvKipcbiAgICogVGhlIHJlY29yZGluZyB2aWRlbyByZXNvbHV0aW9ucyBhbmQgZm9ybWF0cyBzdXBwb3J0ZWQgYnkgdGhlIGRldmljZS5cbiAgICpcbiAgICogQHJldHVybnMge0NvbmZpZ3VyYXRpb25EYXRhW119XG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgc3VwcG9ydGVkVmlkZW9Nb2RlczogQ29uZmlndXJhdGlvbkRhdGFbXTtcblxuICAvKipcbiAgICogU3RhcnQgdGhlIGF1ZGlvIHJlY29yZGVyIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgYXVkaW8gY2xpcCBmaWxlcy5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FwdHVyZUF1ZGlvKG9wdGlvbnM/OiBDYXB0dXJlQXVkaW9PcHRpb25zKTogUHJvbWlzZTxNZWRpYUZpbGVbXSB8IENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydCB0aGUgY2FtZXJhIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgaW1hZ2UgZmlsZXMuXG4gICAqXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPE1lZGlhRmlsZVtdPn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXG4gIH0pXG4gIGNhcHR1cmVJbWFnZShvcHRpb25zPzogQ2FwdHVyZUltYWdlT3B0aW9ucyk6IFByb21pc2U8TWVkaWFGaWxlW10gfCBDYXB0dXJlRXJyb3I+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU3RhcnQgdGhlIHZpZGVvIHJlY29yZGVyIGFwcGxpY2F0aW9uIGFuZCByZXR1cm4gaW5mb3JtYXRpb24gYWJvdXQgY2FwdHVyZWQgdmlkZW8gY2xpcCBmaWxlcy5cbiAgICpcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcbiAgfSlcbiAgY2FwdHVyZVZpZGVvKG9wdGlvbnM/OiBDYXB0dXJlVmlkZW9PcHRpb25zKTogUHJvbWlzZTxNZWRpYUZpbGVbXSB8IENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBpcyBmaXJlZCBpZiB0aGUgY2FwdHVyZSBjYWxsIGlzIHN1Y2Nlc3NmdWxcbiAgICpcbiAgICogQHJldHVybnMge09ic2VydmFibGU8TWVkaWFGaWxlW10+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBldmVudDogJ3BlbmRpbmdjYXB0dXJlcmVzdWx0JyxcbiAgfSlcbiAgb25QZW5kaW5nQ2FwdHVyZVJlc3VsdCgpOiBPYnNlcnZhYmxlPE1lZGlhRmlsZVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIGlzIGZpcmVkIGlmIHRoZSBjYXB0dXJlIGNhbGwgaXMgdW5zdWNjZXNzZnVsXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPENhcHR1cmVFcnJvcj59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxuICAgIGV2ZW50OiAncGVuZGluZ2NhcHR1cmVlcnJvcicsXG4gIH0pXG4gIG9uUGVuZGluZ0NhcHR1cmVFcnJvcigpOiBPYnNlcnZhYmxlPENhcHR1cmVFcnJvcj4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19

/***/ }),

/***/ 20138:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "File": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 60399);




var File = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(File, _super);
    function File() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR',
        };
        return _this;
    }
    File.prototype.getFreeDiskSpace = function () {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
                    cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
                });
            }
        })();
    };
    File.prototype.checkDir = function (path, dir) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dir)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var fullPath = path + dir;
                return _this.resolveDirectoryUrl(fullPath).then(function () {
                    return true;
                });
            }
        })();
    };
    File.prototype.createDir = function (path, dirName, replace) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getDirectory(fse, dirName, options);
                });
            }
        })();
    };
    File.prototype.removeDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.remove(de);
                });
            }
        })();
    };
    File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                newDirName = newDirName || dirName;
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (destenation) {
                        return _this.move(srcde, destenation, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcde, deste, newDirName);
                    });
                });
            }
        })();
    };
    File.prototype.listDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, {
                        create: false,
                        exclusive: false,
                    });
                })
                    .then(function (de) {
                    var reader = de.createReader();
                    return _this.readEntries(reader);
                });
            }
        })();
    };
    File.prototype.removeRecursively = function (path, dirName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.rimraf(de);
                });
            }
        })();
    };
    File.prototype.checkFile = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(file)) {
                    var err = new FileError(5);
                    err.message = 'file cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveLocalFilesystemUrl(path + file).then(function (fse) {
                    if (fse.isFile) {
                        return true;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a file';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.createFile = function (path, fileName, replace) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getFile(fse, fileName, options);
                });
            }
        })();
    };
    File.prototype.removeFile = function (path, fileName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (fe) {
                    return _this.remove(fe);
                });
            }
        })();
    };
    File.prototype.writeFile = function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var getFileOpts = {
                    create: !options.append,
                    exclusive: !options.replace,
                };
                return _this.resolveDirectoryUrl(path)
                    .then(function (directoryEntry) {
                    return _this.getFile(directoryEntry, fileName, getFileOpts);
                })
                    .then(function (fileEntry) {
                    return _this.writeFileEntry(fileEntry, text, options);
                });
            }
        })();
    };
    /**
     * Write content to FileEntry.
     * @hidden
     * Write to an existing file.
     * @param {FileEntry} fe file entry object
     * @param {string | Blob | ArrayBuffer} text text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>}  Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    File.prototype.writeFileEntry = function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    File.prototype.writeExistingFile = function (path, fileName, text) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.writeFile(path, fileName, text, { replace: true });
            }
        })();
    };
    File.prototype.readAsText = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'Text');
            }
        })();
    };
    File.prototype.readAsDataURL = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'DataURL');
            }
        })();
    };
    File.prototype.readAsBinaryString = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'BinaryString');
            }
        })();
    };
    File.prototype.readAsArrayBuffer = function (path, file) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.readFile(path, file, 'ArrayBuffer');
            }
        })();
    };
    File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.move(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    /**
     * @hidden
     */
    File.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
                    try {
                        window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                            resolve(entry);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.resolveDirectoryUrl = function (directoryUrl) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return _this.resolveLocalFilesystemUrl(directoryUrl).then(function (de) {
                    if (de.isDirectory) {
                        return de;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a directory';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getDirectory(directoryName, flags, function (de) {
                            resolve(de);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.getFile = function (directoryEntry, fileName, flags) {
        var _this = this;
        return (function () {
            if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getFile(fileName, flags, resolve, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    File.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.remove = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.move = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.copy = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.readEntries = function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.rimraf = function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.createWriter = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @hidden
     */
    File.prototype.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @hidden
     */
    File.prototype.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.getPromise)(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    Object.defineProperty(File.prototype, "applicationDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "applicationDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "applicationDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "applicationStorageDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "applicationStorageDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "applicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "dataDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "dataDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "dataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "cacheDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "cacheDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "cacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalApplicationStorageDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalApplicationStorageDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalApplicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalDataDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalDataDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalCacheDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalCacheDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalCacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalRootDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "externalRootDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "externalRootDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "tempDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "tempDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "tempDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "syncedDataDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "syncedDataDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "syncedDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "documentsDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "documentsDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "documentsDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "sharedDirectory", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "sharedDirectory"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "sharedDirectory", value); },
        enumerable: false,
        configurable: true
    });
    File.pluginName = "File";
    File.plugin = "cordova-plugin-file";
    File.pluginRef = "cordova.file";
    File.repo = "https://github.com/apache/cordova-plugin-file";
    File.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
File.ɵfac = /*@__PURE__*/ function () { var ɵFile_BaseFactory; return function File_Factory(t) { return (ɵFile_BaseFactory || (ɵFile_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](File)))(t || File); }; }();
File.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: File, factory: function (t) { return File.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](File, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return File;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmlsZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxnRkFBNEQsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0FBQzFHO0FBR0MsSUFncUJ5Qix3QkFBaUI7QUFBQztBQUU5QjtBQUVVLFFBMER0QixzQkFBZ0IsR0FBUTtBQUMxQixZQUFJLENBQUMsRUFBRSxlQUFlO0FBQ3RCLFlBQUksQ0FBQyxFQUFFLGNBQWM7QUFDckIsWUFBSSxDQUFDLEVBQUUsV0FBVztBQUNsQixZQUFJLENBQUMsRUFBRSxrQkFBa0I7QUFDekIsWUFBSSxDQUFDLEVBQUUsY0FBYztBQUNyQixZQUFJLENBQUMsRUFBRSw2QkFBNkI7QUFDcEMsWUFBSSxDQUFDLEVBQUUsbUJBQW1CO0FBQzFCLFlBQUksQ0FBQyxFQUFFLFlBQVk7QUFDbkIsWUFBSSxDQUFDLEVBQUUsMEJBQTBCO0FBQ2pDLFlBQUksRUFBRSxFQUFFLG9CQUFvQjtBQUM1QixZQUFJLEVBQUUsRUFBRSxtQkFBbUI7QUFDM0IsWUFBSSxFQUFFLEVBQUUsaUJBQWlCO0FBQ3pCLFlBQUksRUFBRSxFQUFFLGtCQUFrQjtBQUMxQixZQUFJLEVBQUUsRUFBRSxjQUFjO0FBQ3RCLFNBQUcsQ0FBQztBQUNKO0FBRWU7QUFBTSxJQUluQiwrQkFBZ0I7QUFBaUI7QUFDZDtBQUNwQixtREFGcUM7QUFDdEMsZ0JBQUksT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtBQUFJLG9CQUN6QyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQTZCLEVBQUUsTUFBNEIsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDaEgsZ0JBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxhQUFHO0FBQ0g7QUFFTztBQUFPLElBUVosdUJBQVEsYUFBQyxJQUFZLEVBQUUsR0FBVztBQUFJO0FBQ2hDO0FBQ0csbURBRjZDO0FBQ3hELGdCQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUN6QixvQkFBTSxJQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyxvQkFBTSxHQUFHLENBQUMsT0FBTyxHQUFHLCtCQUErQixDQUFDO0FBQ3BELG9CQUFNLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBTSxHQUFHLENBQUMsQ0FBQztBQUN0QyxpQkFBSztBQUNMLGdCQUNJLElBQU0sUUFBUSxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7QUFDaEMsZ0JBQUksT0FBTyxLQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzdDLG9CQUFBLE9BQU8sSUFBSSxDQUFDO0FBQ2xCLGdCQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsYUFBRztBQUNIO0FBRU87QUFBTyxJQVVaLHdCQUFTLGFBQUMsSUFBWSxFQUFFLE9BQWUsRUFBRSxPQUFnQjtBQUFJO0FBQzlEO0FBQ0QsbURBRnNGO0FBQ3RGLGdCQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUM3QixvQkFBTSxJQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyxvQkFBTSxHQUFHLENBQUMsT0FBTyxHQUFHLCtCQUErQixDQUFDO0FBQ3BELG9CQUFNLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBTSxHQUFHLENBQUMsQ0FBQztBQUN0QyxpQkFBSztBQUNMLGdCQUNJLElBQU0sT0FBTyxHQUFVO0FBQzNCLG9CQUFNLE1BQU0sRUFBRSxJQUFJO0FBQ2xCLGlCQUFLLENBQUM7QUFDTixnQkFDSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2xCLG9CQUFNLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQy9CLGlCQUFLO0FBQ0wsZ0JBQ0ksT0FBTyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztBQUFJLG9CQUNoRCxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN0RCxnQkFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLGFBQUc7QUFDSDtBQUVPO0FBQU8sSUFPWix3QkFBUyxhQUFDLElBQVksRUFBRSxPQUFlO0FBQUk7QUFDMUM7QUFDRCxtREFGZ0U7QUFDbEUsZ0JBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQzdCLG9CQUFNLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLG9CQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsK0JBQStCLENBQUM7QUFDcEQsb0JBQU0sT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLGlCQUFLO0FBQ0wsZ0JBQ0ksT0FBTyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO0FBQ3pDLHFCQUFPLElBQUksQ0FBQyxVQUFBLEdBQUc7QUFBSSxvQkFDWCxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ2xFLGdCQUFNLENBQUMsQ0FBQztBQUNSLHFCQUFPLElBQUksQ0FBQyxVQUFBLEVBQUU7QUFBSSxvQkFDVixPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDL0IsZ0JBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxhQUFHO0FBQ0g7QUFFTztBQUFPLElBVVosc0JBQU8sYUFBQyxJQUFZLEVBQUUsT0FBZSxFQUFFLE9BQWUsRUFBRSxVQUFrQjtBQUFJO0FBQTBCO0FBQ25GLG1EQUR3RjtBQUMvRyxnQkFBSSxVQUFVLEdBQUcsVUFBVSxJQUFJLE9BQU8sQ0FBQztBQUN2QyxnQkFDSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDaEMsb0JBQU0sSUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsb0JBQU0sR0FBRyxDQUFDLE9BQU8sR0FBRywrQkFBK0IsQ0FBQztBQUNwRCxvQkFBTSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQU0sR0FBRyxDQUFDLENBQUM7QUFDdEMsaUJBQUs7QUFDTCxnQkFDSSxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7QUFDekMscUJBQU8sSUFBSSxDQUFDLFVBQUEsR0FBRztBQUFJLG9CQUNYLE9BQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDbEUsZ0JBQU0sQ0FBQyxDQUFDO0FBQ1IscUJBQU8sSUFBSSxDQUFDLFVBQUEsS0FBSztBQUFJLG9CQUNiLE9BQU8sS0FBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVc7QUFBSSx3QkFDM0QsT0FBTyxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDM0Qsb0JBQVEsQ0FBQyxDQUFDLENBQUM7QUFDWCxnQkFBTSxDQUFDLENBQUMsQ0FBQztBQUNULGFBQUc7QUFDSDtBQUVPO0FBQU8sSUFTWixzQkFBTyxhQUFDLElBQVksRUFBRSxPQUFlLEVBQUUsT0FBZSxFQUFFLFVBQWtCO0FBQUk7QUFDdEU7QUFDSixtREFGd0Y7QUFDOUYsZ0JBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0FBQ2hDLG9CQUFNLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLG9CQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsK0JBQStCLENBQUM7QUFDcEQsb0JBQU0sT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLGlCQUFLO0FBQ0wsZ0JBQ0ksT0FBTyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO0FBQ3pDLHFCQUFPLElBQUksQ0FBQyxVQUFBLEdBQUc7QUFBSSxvQkFDWCxPQUFPLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ2xFLGdCQUFNLENBQUMsQ0FBQztBQUNSLHFCQUFPLElBQUksQ0FBQyxVQUFBLEtBQUs7QUFBSSxvQkFDYixPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLO0FBQUksd0JBQ3JELE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3JELG9CQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ1gsZ0JBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxhQUFHO0FBQ0g7QUFFTztBQUFPLElBT1osc0JBQU8sYUFBQyxJQUFZLEVBQUUsT0FBZTtBQUFJO0FBQ25DO0FBQ0QsbURBRm9EO0FBQzNELGdCQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUM3QixvQkFBTSxJQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyxvQkFBTSxHQUFHLENBQUMsT0FBTyxHQUFHLCtCQUErQixDQUFDO0FBQ3BELG9CQUFNLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBVSxHQUFHLENBQUMsQ0FBQztBQUMxQyxpQkFBSztBQUNMLGdCQUNJLE9BQU8sS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztBQUN6QyxxQkFBTyxJQUFJLENBQUMsVUFBQSxHQUFHO0FBQUksb0JBQ1gsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUU7QUFDL0Msd0JBQVUsTUFBTSxFQUFFLEtBQUs7QUFDdkIsd0JBQVUsU0FBUyxFQUFFLEtBQUs7QUFDMUIscUJBQVMsQ0FBQyxDQUFDO0FBQ1gsZ0JBQU0sQ0FBQyxDQUFDO0FBQ1IscUJBQU8sSUFBSSxDQUFDLFVBQUEsRUFBRTtBQUFJLG9CQUNWLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUN6QyxvQkFBUSxPQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEMsZ0JBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxhQUFHO0FBQ0g7QUFFTztBQUFPLElBT1osZ0NBQWlCLGFBQUMsSUFBWSxFQUFFLE9BQWU7QUFBSTtBQUNsRDtBQUNELG1EQUZ3RTtBQUMxRSxnQkFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDN0Isb0JBQU0sSUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsb0JBQU0sR0FBRyxDQUFDLE9BQU8sR0FBRywrQkFBK0IsQ0FBQztBQUNwRCxvQkFBTSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQWUsR0FBRyxDQUFDLENBQUM7QUFDL0MsaUJBQUs7QUFDTCxnQkFDSSxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7QUFDekMscUJBQU8sSUFBSSxDQUFDLFVBQUEsR0FBRztBQUFJLG9CQUNYLE9BQU8sS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDbEUsZ0JBQU0sQ0FBQyxDQUFDO0FBQ1IscUJBQU8sSUFBSSxDQUFDLFVBQUEsRUFBRTtBQUFJLG9CQUNWLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMvQixnQkFBTSxDQUFDLENBQUMsQ0FBQztBQUNULGFBQUc7QUFDSDtBQUVPO0FBQU8sSUFPWix3QkFBUyxhQUFDLElBQVksRUFBRSxJQUFZO0FBQUk7QUFDbEM7QUFDRSxtREFGZ0Q7QUFDMUQsZ0JBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzFCLG9CQUFNLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLG9CQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsMEJBQTBCLENBQUM7QUFDL0Msb0JBQU0sT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLGlCQUFLO0FBQ0wsZ0JBQ0ksT0FBTyxLQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7QUFBSSxvQkFDN0QsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO0FBQ3RCLHdCQUFRLE9BQU8sSUFBSSxDQUFDO0FBQ3BCLHFCQUFPO0FBQUMseUJBQUs7QUFDYix3QkFBUSxJQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0Qyx3QkFBUSxHQUFHLENBQUMsT0FBTyxHQUFHLHFCQUFxQixDQUFDO0FBQzVDLHdCQUFRLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBVSxHQUFHLENBQUMsQ0FBQztBQUM1QyxxQkFBTztBQUNQLGdCQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsYUFBRztBQUNIO0FBRU87QUFBTyxJQVVaLHlCQUFVLGFBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsT0FBZ0I7QUFBSTtBQUMzRDtBQUNGLG1EQUYrRTtBQUNuRixnQkFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDOUIsb0JBQU0sSUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsb0JBQU0sR0FBRyxDQUFDLE9BQU8sR0FBRywrQkFBK0IsQ0FBQztBQUNwRCxvQkFBTSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQU0sR0FBRyxDQUFDLENBQUM7QUFDdEMsaUJBQUs7QUFDTCxnQkFDSSxJQUFNLE9BQU8sR0FBVTtBQUMzQixvQkFBTSxNQUFNLEVBQUUsSUFBSTtBQUNsQixpQkFBSyxDQUFDO0FBQ04sZ0JBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNsQixvQkFBTSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztBQUMvQixpQkFBSztBQUNMLGdCQUNJLE9BQU8sS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7QUFBSSxvQkFDaEQsT0FBTyxLQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEQsZ0JBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxhQUFHO0FBQ0g7QUFFTztBQUFPLElBT1oseUJBQVUsYUFBQyxJQUFZLEVBQUUsUUFBZ0I7QUFBSTtBQUM1QztBQUNGLG1EQUZtRTtBQUNwRSxnQkFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7QUFDOUIsb0JBQU0sSUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsb0JBQU0sR0FBRyxDQUFDLE9BQU8sR0FBRywrQkFBK0IsQ0FBQztBQUNwRCxvQkFBTSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQU0sR0FBRyxDQUFDLENBQUM7QUFDdEMsaUJBQUs7QUFDTCxnQkFDSSxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7QUFDekMscUJBQU8sSUFBSSxDQUFDLFVBQUEsR0FBRztBQUFJLG9CQUNYLE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDOUQsZ0JBQU0sQ0FBQyxDQUFDO0FBQ1IscUJBQU8sSUFBSSxDQUFDLFVBQUEsRUFBRTtBQUFJLG9CQUNWLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMvQixnQkFBTSxDQUFDLENBQUMsQ0FBQztBQUNULGFBQUc7QUFDSDtBQUVPO0FBQU8sSUFRWix3QkFBUyxhQUNQLElBQVksRUFDWixRQUFnQixFQUNoQixJQUFpQyxFQUNqQyxPQUEyQjtBQUM1QjtBQUNNLFFBRkwsd0JBQUEsRUFBQSxZQUEyQjtBQUM1QjtBQUNVLG1EQURLO0FBQ2xCLGdCQUFJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtBQUM5QixvQkFBTSxJQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNuQyxvQkFBTSxHQUFHLENBQUMsT0FBTyxHQUFHLCtCQUErQixDQUFDO0FBQ3BELG9CQUFNLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNqQyxpQkFBSztBQUNMLGdCQUNJLElBQU0sV0FBVyxHQUFVO0FBQy9CLG9CQUFNLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNO0FBQzdCLG9CQUFNLFNBQVMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPO0FBQ2pDLGlCQUFLLENBQUM7QUFDTixnQkFDSSxPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUM7QUFDekMscUJBQU8sSUFBSSxDQUFDLFVBQUMsY0FBOEI7QUFBSSxvQkFDdkMsT0FBTyxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDbkUsZ0JBQU0sQ0FBQyxDQUFDO0FBQ1IscUJBQU8sSUFBSSxDQUFDLFVBQUMsU0FBb0I7QUFBSSxvQkFDN0IsT0FBTyxLQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDN0QsZ0JBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxhQUFHO0FBQ0g7QUFFTztBQUFPLElBRFo7QUFDRjtBQUNFO0FBQ0U7QUFDRTtBQUNFO0FBQ0U7QUFDRTtBQUVKLE9BREg7QUFDTCxJQUFVLDZCQUFjLEdBQXRCLFVBQXVCLEVBQWEsRUFBRSxJQUFpQyxFQUFFLE9BQXNCO0FBQ2pHLFFBREUsaUJBY0M7QUFDSCxRQWRJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7QUFDaEMsYUFBTyxJQUFJLENBQUMsVUFBQSxNQUFNO0FBQUksWUFDZCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDNUIsZ0JBQVUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDckMsYUFBUztBQUNULFlBQ1EsSUFBSSxPQUFPLENBQUMsUUFBUSxFQUFFO0FBQzlCLGdCQUFVLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLGFBQVM7QUFDVCxZQUNRLE9BQU8sS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDeEMsUUFBTSxDQUFDLENBQUM7QUFDUixhQUFPLElBQUksQ0FBQyxjQUFNLE9BQUEsRUFBRSxFQUFGLENBQUUsQ0FBQyxDQUFDO0FBQ3RCLElBQUUsQ0FBQztBQUVILElBUUUsZ0NBQWlCLGFBQUMsSUFBWSxFQUFFLFFBQWdCLEVBQUUsSUFBbUI7QUFBSTtBQUNoRTtBQUE4QixtREFEK0M7QUFDeEYsZ0JBQUksT0FBTyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDbkUsYUFBRztBQUNIO0FBRU87QUFBTyxJQU9aLHlCQUFVLGFBQUMsSUFBWSxFQUFFLElBQVk7QUFBSTtBQUNsQztBQUE4QixtREFEbUI7QUFDMUQsZ0JBQUksT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFTLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDckQsYUFBRztBQUNIO0FBRU87QUFBTyxJQVVaLDRCQUFhLGFBQUMsSUFBWSxFQUFFLElBQVk7QUFBSTtBQUNyQztBQUE4QixtREFEc0I7QUFDN0QsZ0JBQUksT0FBTyxLQUFJLENBQUMsUUFBUSxDQUFTLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDeEQsYUFBRztBQUNIO0FBRU87QUFBTyxJQU9aLGlDQUFrQixhQUFDLElBQVksRUFBRSxJQUFZO0FBQUk7QUFDMUM7QUFBOEIsbURBRDJCO0FBQ2xFLGdCQUFJLE9BQU8sS0FBSSxDQUFDLFFBQVEsQ0FBUyxJQUFJLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBQzdELGFBQUc7QUFDSDtBQUVPO0FBQU8sSUFPWixnQ0FBaUIsYUFBQyxJQUFZLEVBQUUsSUFBWTtBQUFJO0FBQzlDO0FBQThCLG1EQURvQztBQUN0RSxnQkFBSSxPQUFPLEtBQUksQ0FBQyxRQUFRLENBQWMsSUFBSSxFQUFFLElBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztBQUNqRSxhQUFHO0FBQ0g7QUFFTztBQUFPLElBU1osdUJBQVEsYUFBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsV0FBbUI7QUFBSTtBQUN6RTtBQUE4QixtREFEeUQ7QUFDakcsZ0JBQUksV0FBVyxHQUFHLFdBQVcsSUFBSSxRQUFRLENBQUM7QUFDMUMsZ0JBQ0ksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQ2pDLG9CQUFNLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLG9CQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsK0JBQStCLENBQUM7QUFDcEQsb0JBQU0sT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLGlCQUFLO0FBQ0wsZ0JBQ0ksT0FBTyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO0FBQ3pDLHFCQUFPLElBQUksQ0FBQyxVQUFBLEdBQUc7QUFBSSxvQkFDWCxPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzlELGdCQUFNLENBQUMsQ0FBQztBQUNSLHFCQUFPLElBQUksQ0FBQyxVQUFBLEtBQUs7QUFBSSxvQkFDYixPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLO0FBQUksd0JBQ3JELE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3RELG9CQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ1gsZ0JBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxhQUFHO0FBQ0g7QUFFTztBQUFPLElBU1osdUJBQVEsYUFBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsV0FBbUI7QUFBSTtBQUN6RTtBQUE4QixtREFEeUQ7QUFDakcsZ0JBQUksV0FBVyxHQUFHLFdBQVcsSUFBSSxRQUFRLENBQUM7QUFDMUMsZ0JBQ0ksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQ2pDLG9CQUFNLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ25DLG9CQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsK0JBQStCLENBQUM7QUFDcEQsb0JBQU0sT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLGlCQUFLO0FBQ0wsZ0JBQ0ksT0FBTyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDO0FBQ3pDLHFCQUFPLElBQUksQ0FBQyxVQUFBLEdBQUc7QUFBSSxvQkFDWCxPQUFPLEtBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzlELGdCQUFNLENBQUMsQ0FBQztBQUNSLHFCQUFPLElBQUksQ0FBQyxVQUFBLEtBQUs7QUFBSSxvQkFDYixPQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLO0FBQUksd0JBQ3JELE9BQU8sS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3RELG9CQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ1gsZ0JBQU0sQ0FBQyxDQUFDLENBQUM7QUFDVCxhQUFHO0FBQ0g7QUFFTztBQUNOLElBRkM7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFVLCtCQUFnQixHQUF4QixVQUF5QixHQUFjO0FBQUksUUFDekMsSUFBSTtBQUNSLFlBQU0sR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BELFNBQUs7QUFBQyxRQUFBLE9BQU8sQ0FBQyxFQUFFLEdBQUU7QUFDbEIsSUFBRSxDQUFDO0FBRUgsSUFNRSx3Q0FBeUIsYUFBQyxPQUFlO0FBQUk7QUFDckM7QUFBOEIsbURBRHFCO0FBQzdELGdCQUFJLE9BQU8sVUFBVSxDQUFRLFVBQUMsT0FBTyxFQUFFLE1BQU07QUFBSSxvQkFDM0MsSUFBSTtBQUNWLHdCQUFRLE1BQU0sQ0FBQyx5QkFBeUIsQ0FDOUIsT0FBTyxFQUNQLFVBQUMsS0FBWTtBQUFJLDRCQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQix3QkFBVSxDQUFDLEVBQ0QsVUFBQSxHQUFHO0FBQUksNEJBQ0wsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDLDRCQUFZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4Qix3QkFBVSxDQUFDLENBQ0YsQ0FBQztBQUNWLHFCQUFPO0FBQUMsb0JBQUEsT0FBTyxFQUFFLEVBQUU7QUFDbkIsd0JBQVEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLHdCQUFRLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQixxQkFBTztBQUNQLGdCQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsYUFBRztBQUNIO0FBRU87QUFBTyxJQUtaLGtDQUFtQixhQUFDLFlBQW9CO0FBQUk7QUFDN0M7QUFBOEIsbURBRHNDO0FBQ3JFLGdCQUFJLE9BQU8sS0FBSSxDQUFDLHlCQUF5QixDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEVBQUU7QUFBSSxvQkFDN0QsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFO0FBQzFCLHdCQUFRLE9BQU8sRUFBb0IsQ0FBQztBQUNwQyxxQkFBTztBQUFDLHlCQUFLO0FBQ2Isd0JBQVEsSUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdEMsd0JBQVEsR0FBRyxDQUFDLE9BQU8sR0FBRywwQkFBMEIsQ0FBQztBQUNqRCx3QkFBUSxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQWlCLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELHFCQUFPO0FBQ1AsZ0JBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxhQUFHO0FBQ0g7QUFFTztBQUFPLElBT1osMkJBQVksYUFBQyxjQUE4QixFQUFFLGFBQXFCLEVBQUUsS0FBWTtBQUFJO0FBQ3JGO0FBQThCLG1EQUQ4RTtBQUM3RyxnQkFBSSxPQUFPLElBQUksT0FBTyxDQUFpQixVQUFDLE9BQU8sRUFBRSxNQUFNO0FBQUksb0JBQ3JELElBQUk7QUFDVix3QkFBUSxjQUFjLENBQUMsWUFBWSxDQUN6QixhQUFhLEVBQ2IsS0FBSyxFQUNMLFVBQUEsRUFBRTtBQUFJLDRCQUNKLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4Qix3QkFBVSxDQUFDLEVBQ0QsVUFBQSxHQUFHO0FBQUksNEJBQ0wsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3ZDLDRCQUFZLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4Qix3QkFBVSxDQUFDLENBQ0YsQ0FBQztBQUNWLHFCQUFPO0FBQUMsb0JBQUEsT0FBTyxFQUFFLEVBQUU7QUFDbkIsd0JBQVEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLHdCQUFRLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNuQixxQkFBTztBQUNQLGdCQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsYUFBRztBQUNIO0FBRU87QUFBTyxJQU9aLHNCQUFPLGFBQUMsY0FBOEIsRUFBRSxRQUFnQixFQUFFLEtBQVk7QUFBSTtBQUN0RTtBQUE4QixtREFEMEQ7QUFDOUYsZ0JBQUksT0FBTyxJQUFJLE9BQU8sQ0FBWSxVQUFDLE9BQU8sRUFBRSxNQUFNO0FBQUksb0JBQ2hELElBQUk7QUFDVix3QkFBUSxjQUFjLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFVBQUEsR0FBRztBQUFJLDRCQUN0RCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckMsNEJBQVUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLHdCQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ1gscUJBQU87QUFBQyxvQkFBQSxPQUFPLEVBQUUsRUFBRTtBQUNuQix3QkFBUSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDbEMsd0JBQVEsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ25CLHFCQUFPO0FBQ1AsZ0JBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxhQUFHO0FBQ0g7QUFDYTtBQUFPLElBQVYsdUJBQVEsR0FBaEIsVUFDRSxJQUFZLEVBQ1osSUFBWSxFQUNaLE1BQTJEO0FBQzVELFFBSkQsaUJBc0NDO0FBQ0gsUUFsQ0ksSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQzFCLFlBQU0sSUFBTSxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkMsWUFBTSxHQUFHLENBQUMsT0FBTyxHQUFHLCtCQUErQixDQUFDO0FBQ3BELFlBQU0sT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ3RDLFNBQUs7QUFDTCxRQUNJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQztBQUN6QyxhQUFPLElBQUksQ0FBQyxVQUFDLGNBQThCO0FBQUksWUFDdkMsT0FBTyxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNyRSxRQUFNLENBQUMsQ0FBQztBQUNSLGFBQU8sSUFBSSxDQUFDLFVBQUMsU0FBb0I7QUFBSSxZQUM3QixJQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ3hDLFlBQVEsT0FBTyxVQUFVLENBQUksVUFBQyxPQUFPLEVBQUUsTUFBTTtBQUFJLGdCQUN2QyxNQUFNLENBQUMsU0FBUyxHQUFHO0FBQ3ZCLG9CQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7QUFDdkUsd0JBQWMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFrQixDQUFDLENBQUM7QUFDakQscUJBQWE7QUFBQyx5QkFBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssU0FBUyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO0FBQzVFLHdCQUFjLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkMscUJBQWE7QUFBQyx5QkFBSztBQUNuQix3QkFBYyxNQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxDQUFDLENBQUM7QUFDdEUscUJBQWE7QUFDYixnQkFBVSxDQUFDLENBQUM7QUFDWixnQkFDVSxTQUFTLENBQUMsSUFBSSxDQUNaLFVBQUEsSUFBSTtBQUFJLG9CQUNOLE1BQU0sQ0FBQyxXQUFTLE1BQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0QsZ0JBQVksQ0FBQyxFQUNELFVBQUEsS0FBSztBQUFJLG9CQUNQLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1QixnQkFBWSxDQUFDLENBQ0YsQ0FBQztBQUNaLFlBQVEsQ0FBQyxDQUFDLENBQUM7QUFDWCxRQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ1QsSUFBRSxDQUFDO0FBRUgsSUFBRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQVUscUJBQU0sR0FBZCxVQUFlLEVBQVM7QUFBSSxRQUE1QixpQkFZQztBQUNILFFBWkksT0FBTyxJQUFJLE9BQU8sQ0FBZSxVQUFDLE9BQU8sRUFBRSxNQUFNO0FBQUksWUFDbkQsRUFBRSxDQUFDLE1BQU0sQ0FDUDtBQUNGLGdCQUFJLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdEQsWUFBUSxDQUFDLEVBQ0QsVUFBQSxHQUFHO0FBQUksZ0JBQ0wsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLGdCQUFVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixZQUFRLENBQUMsQ0FDRixDQUFDO0FBQ1IsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUVILElBQUU7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFVLG1CQUFJLEdBQVosVUFBYSxJQUFXLEVBQUUsT0FBdUIsRUFBRSxPQUFlO0FBQUksUUFBdEUsaUJBY0M7QUFDSCxRQWRJLE9BQU8sSUFBSSxPQUFPLENBQVEsVUFBQyxPQUFPLEVBQUUsTUFBTTtBQUFJLFlBQzVDLElBQUksQ0FBQyxNQUFNLENBQ1QsT0FBTyxFQUNQLE9BQU8sRUFDUCxVQUFBLEtBQUs7QUFBSSxnQkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsWUFBUSxDQUFDLEVBQ0QsVUFBQSxHQUFHO0FBQUksZ0JBQ0wsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLGdCQUFVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixZQUFRLENBQUMsQ0FDRixDQUFDO0FBQ1IsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUVILElBQUU7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFVLG1CQUFJLEdBQVosVUFBYSxJQUFXLEVBQUUsT0FBdUIsRUFBRSxPQUFlO0FBQUksUUFBdEUsaUJBY0M7QUFDSCxRQWRJLE9BQU8sSUFBSSxPQUFPLENBQVEsVUFBQyxPQUFPLEVBQUUsTUFBTTtBQUFJLFlBQzVDLElBQUksQ0FBQyxNQUFNLENBQ1QsT0FBTyxFQUNQLE9BQU8sRUFDUCxVQUFBLEtBQUs7QUFBSSxnQkFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDekIsWUFBUSxDQUFDLEVBQ0QsVUFBQSxHQUFHO0FBQUksZ0JBQ0wsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLGdCQUFVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixZQUFRLENBQUMsQ0FDRixDQUFDO0FBQ1IsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUVILElBQUU7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFVLDBCQUFXLEdBQW5CLFVBQW9CLEVBQW1CO0FBQUksUUFBM0MsaUJBWUM7QUFDSCxRQVpJLE9BQU8sSUFBSSxPQUFPLENBQVUsVUFBQyxPQUFPLEVBQUUsTUFBTTtBQUFJLFlBQzlDLEVBQUUsQ0FBQyxXQUFXLENBQ1osVUFBQSxPQUFPO0FBQUksZ0JBQ1QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzNCLFlBQVEsQ0FBQyxFQUNELFVBQUEsR0FBRztBQUFJLGdCQUNMLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNyQyxnQkFBVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdEIsWUFBUSxDQUFDLENBQ0YsQ0FBQztBQUNSLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFFSCxJQUFFO0FBQ0Y7QUFDRSxPQUFHO0FBQ0wsSUFBVSxxQkFBTSxHQUFkLFVBQWUsRUFBa0I7QUFBSSxRQUFyQyxpQkFZQztBQUNILFFBWkksT0FBTyxJQUFJLE9BQU8sQ0FBZSxVQUFDLE9BQU8sRUFBRSxNQUFNO0FBQUksWUFDbkQsRUFBRSxDQUFDLGlCQUFpQixDQUNsQjtBQUNGLGdCQUFJLE9BQU8sQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDdEQsWUFBUSxDQUFDLEVBQ0QsVUFBQSxHQUFHO0FBQUksZ0JBQ0wsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLGdCQUFVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixZQUFRLENBQUMsQ0FDRixDQUFDO0FBQ1IsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUVILElBQUU7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFVLDJCQUFZLEdBQXBCLFVBQXFCLEVBQWE7QUFBSSxRQUF0QyxpQkFZQztBQUNILFFBWkksT0FBTyxJQUFJLE9BQU8sQ0FBYSxVQUFDLE9BQU8sRUFBRSxNQUFNO0FBQUksWUFDakQsRUFBRSxDQUFDLFlBQVksQ0FDYixVQUFBLE1BQU07QUFBSSxnQkFDUixPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDMUIsWUFBUSxDQUFDLEVBQ0QsVUFBQSxHQUFHO0FBQUksZ0JBQ0wsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3JDLGdCQUFVLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QixZQUFRLENBQUMsQ0FDRixDQUFDO0FBQ1IsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLElBQUUsQ0FBQztBQUVILElBQUU7QUFDRjtBQUNFLE9BQUc7QUFDTCxJQUFVLG9CQUFLLEdBQWIsVUFBYyxNQUFrQixFQUFFLEVBQStCO0FBQUksUUFDbkUsSUFBSSxFQUFFLFlBQVksSUFBSSxFQUFFO0FBQzVCLFlBQU0sT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hELFNBQUs7QUFDTCxRQUNJLE9BQU8sSUFBSSxPQUFPLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtBQUFJLFlBQzFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsVUFBQSxHQUFHO0FBQUksZ0JBQ3pCLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtBQUMxQixvQkFBVSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLGlCQUFTO0FBQUMscUJBQUs7QUFDZixvQkFBVSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDdkIsaUJBQVM7QUFDVCxZQUFNLENBQUMsQ0FBQztBQUNSLFlBQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2QixRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBRUgsSUFBRTtBQUNGO0FBQ0UsT0FBRztBQUNMLElBQVUsZ0NBQWlCLEdBQXpCLFVBQTBCLE1BQWtCLEVBQUUsSUFBVTtBQUMxRCxRQUFJLElBQU0sVUFBVSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFDbkMsUUFBSSxJQUFJLFdBQVcsR0FBRyxDQUFDLENBQUM7QUFDeEIsUUFDSSxTQUFTLGNBQWM7QUFDM0IsWUFBTSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxDQUFDO0FBQ2pFLFlBQU0sSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsV0FBVyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ2hFLFlBQ00sV0FBVyxJQUFJLElBQUksQ0FBQztBQUMxQixZQUFNLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUIsUUFBSSxDQUFDO0FBQ0wsUUFDSSxPQUFPLFVBQVUsQ0FBTSxVQUFDLE9BQU8sRUFBRSxNQUFNO0FBQUksWUFDekMsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUF3QyxDQUFDO0FBQ2hFLFlBQU0sTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNqQixnQkFBRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3JDLG9CQUFVLGNBQWMsRUFBRSxDQUFDO0FBQzNCLGlCQUFTO0FBQUMscUJBQUs7QUFDZixvQkFBVSxPQUFPLEVBQUUsQ0FBQztBQUNwQixpQkFBUztBQUNULFlBQU0sQ0FBQyxDQUFDO0FBQ1IsWUFBTSxjQUFjLEVBQUUsQ0FBQztBQUN2QixRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0YsMEJBbjBCb0Isc0NBQW9CO0FBQUk7QUFLdkM7QUFHMkI7QUFFdEI7QUFBMkI7QUFFckMsMEJBUG9CLDZDQUEyQjtBQUFJO0FBS3BCO0FBSUo7QUFBMkI7QUFFeEM7QUFBUSwwQkFORiwrQkFBYTtBQUFJO0FBSXZCO0FBRWtCO0FBR3pCO0FBQTJCO0FBQVEsMEJBSHRCLGdDQUFjO0FBQUk7QUFLbEM7QUFHYTtBQUEyQjtBQUEyQjtBQUV2RSwwQkFMb0IscURBQW1DO0FBQUk7QUFLbEQ7QUFJVDtBQUNxQjtBQUEyQjtBQUU5QywwQkFQa0IsdUNBQXFCO0FBQUk7QUFLbEM7QUFHaUM7QUFFOUI7QUFBMkI7QUFBUSwwQkFMN0Isd0NBQXNCO0FBQUk7QUFLNUI7QUFHbUM7QUFFbkM7QUFFbEI7QUFDRSwwQkFSa0IsdUNBQXFCO0FBQUk7QUFLakM7QUFHMEM7QUFFdEQ7QUFBMkI7QUFBUSwwQkFMZiwrQkFBYTtBQUFJO0FBRzZCO0FBS3JEO0FBQTJCO0FBQTJCO0FBQVEsMEJBSHZELHFDQUFtQjtBQUFJO0FBRzZCO0FBS3pFO0FBQTJCO0FBQTJCO0FBRXRELDBCQUxxQixvQ0FBa0I7QUFBSTtBQUtqQztBQUlUO0FBQ0k7QUFDTztBQUFRLDBCQU5DLGlDQUFlO0FBQUk7QUFLeEM7QUFHaUI7QUFDWDtBQUNEO0FBQVE7QUFDUztBQUNNO0FBRXRCO0FBRVU7d0NBN0VmLFVBQVU7Ozs7MEJBQ0w7QUFBQyxlQXJxQlA7QUFBRSxFQXFxQndCLGlCQUFpQjtBQUMxQyxTQURZLElBQUk7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFDaGVjaywgQ29yZG92YVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luLCBnZXRQcm9taXNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBJRmlsZSBleHRlbmRzIEJsb2Ige1xuICAvKipcbiAgICogTmFtZSBvZiB0aGUgZmlsZSwgd2l0aG91dCBwYXRoIGluZm9ybWF0aW9uXG4gICAqL1xuICBuYW1lOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBMYXN0IG1vZGlmaWVkIGRhdGVcbiAgICovXG4gIGxhc3RNb2RpZmllZDogbnVtYmVyO1xuICAvKipcbiAgICogTGFzdCBtb2RpZmllZCBkYXRlXG4gICAqL1xuICBsYXN0TW9kaWZpZWREYXRlOiBudW1iZXI7XG4gIC8qKlxuICAgKiBTaXplIGluIGJ5dGVzXG4gICAqL1xuICBzaXplOiBudW1iZXI7XG4gIC8qKlxuICAgKiBGaWxlIG1pbWUgdHlwZVxuICAgKi9cbiAgdHlwZTogc3RyaW5nO1xuICBsb2NhbFVSTDogc3RyaW5nO1xuICBzdGFydDogbnVtYmVyO1xuICBlbmQ6IG51bWJlcjtcblxuICAvKipcbiAgICogUmV0dXJucyBhIFwic2xpY2VcIiBvZiB0aGUgZmlsZS4gU2luY2UgQ29yZG92YSBGaWxlcyBkb24ndCBjb250YWluIHRoZSBhY3R1YWxcbiAgICogY29udGVudCwgdGhpcyByZWFsbHkgcmV0dXJucyBhIEZpbGUgd2l0aCBhZGp1c3RlZCBzdGFydCBhbmQgZW5kLlxuICAgKiBTbGljZXMgb2Ygc2xpY2VzIGFyZSBzdXBwb3J0ZWQuXG4gICAqIEBwYXJhbSBzdGFydCB7TnVtYmVyfSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gc3RhcnQgdGhlIHNsaWNlIChpbmNsdXNpdmUpLlxuICAgKiBAcGFyYW0gZW5kIHtOdW1iZXJ9IFRoZSBpbmRleCBhdCB3aGljaCB0byBlbmQgdGhlIHNsaWNlIChleGNsdXNpdmUpLlxuICAgKi9cbiAgc2xpY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBCbG9iO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsRmlsZVN5c3RlbSB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBzdG9yYWdlIHdpdGggbm8gZ3VhcmFudGVlIG9mIHBlcnNpc3RlbmNlLlxuICAgKi9cbiAgVEVNUE9SQVJZOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFVzZWQgZm9yIHN0b3JhZ2UgdGhhdCBzaG91bGQgbm90IGJlIHJlbW92ZWQgYnkgdGhlIHVzZXIgYWdlbnQgd2l0aG91dCBhcHBsaWNhdGlvbiBvciB1c2VyIHBlcm1pc3Npb24uXG4gICAqL1xuICBQRVJTSVNURU5UOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RzIGEgZmlsZXN5c3RlbSBpbiB3aGljaCB0byBzdG9yZSBhcHBsaWNhdGlvbiBkYXRhLlxuICAgKiBAcGFyYW0gdHlwZSBXaGV0aGVyIHRoZSBmaWxlc3lzdGVtIHJlcXVlc3RlZCBzaG91bGQgYmUgcGVyc2lzdGVudCwgYXMgZGVmaW5lZCBhYm92ZS4gVXNlIG9uZSBvZiBURU1QT1JBUlkgb3JcbiAgICogICBQRVJTSVNURU5ULlxuICAgKiBAcGFyYW0gc2l6ZSBUaGlzIGlzIGFuIGluZGljYXRvciBvZiBob3cgbXVjaCBzdG9yYWdlIHNwYWNlLCBpbiBieXRlcywgdGhlIGFwcGxpY2F0aW9uIGV4cGVjdHMgdG8gbmVlZC5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBUaGUgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiB0aGUgdXNlciBhZ2VudCBwcm92aWRlcyBhIGZpbGVzeXN0ZW0uXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLCBvciB3aGVuIHRoZSByZXF1ZXN0IHRvIG9idGFpbiB0aGUgZmlsZXN5c3RlbSBpc1xuICAgKiAgIGRlbmllZC5cbiAgICovXG4gIHJlcXVlc3RGaWxlU3lzdGVtKFxuICAgIHR5cGU6IG51bWJlcixcbiAgICBzaXplOiBudW1iZXIsXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiBGaWxlU3lzdGVtQ2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogQWxsb3dzIHRoZSB1c2VyIHRvIGxvb2sgdXAgdGhlIEVudHJ5IGZvciBhIGZpbGUgb3IgZGlyZWN0b3J5IHJlZmVycmVkIHRvIGJ5IGEgbG9jYWwgVVJMLlxuICAgKiBAcGFyYW0gdXJsIEEgVVJMIHJlZmVycmluZyB0byBhIGxvY2FsIGZpbGUgaW4gYSBmaWxlc3lzdGVtIGFjY2Vzc2FibGUgdmlhIHRoaXMgQVBJLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmVwb3J0IHRoZSBGaWxlRW50cnkgdG8gd2hpY2ggdGhlIHN1cHBsaWVkIFVSTCByZWZlcnMuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLCBvciB3aGVuIHRoZSByZXF1ZXN0IHRvIG9idGFpbiB0aGUgRW50cnkgaXNcbiAgICogICBkZW5pZWQuXG4gICAqL1xuICByZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKHVybDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s6IEZpbGVFbnRyeUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIHNlZSByZXF1ZXN0RmlsZVN5c3RlbS5cbiAgICovXG4gIHdlYmtpdFJlcXVlc3RGaWxlU3lzdGVtKFxuICAgIHR5cGU6IG51bWJlcixcbiAgICBzaXplOiBudW1iZXIsXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiBGaWxlU3lzdGVtQ2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YSB7XG4gIC8qKlxuICAgKiBUaGlzIGlzIHRoZSB0aW1lIGF0IHdoaWNoIHRoZSBmaWxlIG9yIGRpcmVjdG9yeSB3YXMgbGFzdCBtb2RpZmllZC5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBtb2RpZmljYXRpb25UaW1lOiBEYXRlO1xuXG4gIC8qKlxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZmlsZSwgaW4gYnl0ZXMuIFRoaXMgbXVzdCByZXR1cm4gMCBmb3IgZGlyZWN0b3JpZXMuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgc2l6ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdzIHtcbiAgLyoqXG4gICAqIFVzZWQgdG8gaW5kaWNhdGUgdGhhdCB0aGUgdXNlciB3YW50cyB0byBjcmVhdGUgYSBmaWxlIG9yIGRpcmVjdG9yeSBpZiBpdCB3YXMgbm90IHByZXZpb3VzbHkgdGhlcmUuXG4gICAqL1xuICBjcmVhdGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBCeSBpdHNlbGYsIGV4Y2x1c2l2ZSBtdXN0IGhhdmUgbm8gZWZmZWN0LiBVc2VkIHdpdGggY3JlYXRlLCBpdCBtdXN0IGNhdXNlIGdldEZpbGUgYW5kIGdldERpcmVjdG9yeSB0byBmYWlsIGlmIHRoZVxuICAgKiB0YXJnZXQgcGF0aCBhbHJlYWR5IGV4aXN0cy5cbiAgICovXG4gIGV4Y2x1c2l2ZT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmaWxlIHN5c3RlbS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGaWxlU3lzdGVtIHtcbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIG5hbWUgb2YgdGhlIGZpbGUgc3lzdGVtLiBUaGUgc3BlY2lmaWNzIG9mIG5hbWluZyBmaWxlc3lzdGVtcyBpcyB1bnNwZWNpZmllZCwgYnV0IGEgbmFtZSBtdXN0IGJlIHVuaXF1ZVxuICAgKiBhY3Jvc3MgdGhlIGxpc3Qgb2YgZXhwb3NlZCBmaWxlIHN5c3RlbXMuXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIGZpbGUgc3lzdGVtLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIHJvb3Q6IERpcmVjdG9yeUVudHJ5O1xuXG4gIHRvSlNPTigpOiBzdHJpbmc7XG5cbiAgZW5jb2RlVVJJUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50cnkge1xuICAvKipcbiAgICogRW50cnkgaXMgYSBmaWxlLlxuICAgKi9cbiAgaXNGaWxlOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbnRyeSBpcyBhIGRpcmVjdG9yeS5cbiAgICovXG4gIGlzRGlyZWN0b3J5OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBMb29rIHVwIG1ldGFkYXRhIGFib3V0IHRoaXMgZW50cnkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSB0aW1lIG9mIHRoZSBsYXN0IG1vZGlmaWNhdGlvbi5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgRXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGdldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1ldGFkYXRhIG9mIHRoZSBlbnRyeS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgTWV0YWRhdGEgb2JqZWN0XG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIHtGdW5jdGlvbn0gaXMgY2FsbGVkIHdpdGggYSBGaWxlRXJyb3JcbiAgICogQHBhcmFtIG1ldGFkYXRhT2JqZWN0IHtNZXRhZGF0YX0ga2V5cyBhbmQgdmFsdWVzIHRvIHNldFxuICAgKi9cbiAgc2V0TWV0YWRhdGEoc3VjY2Vzc0NhbGxiYWNrOiBNZXRhZGF0YUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrOiBFcnJvckNhbGxiYWNrLCBtZXRhZGF0YU9iamVjdDogTWV0YWRhdGEpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZW50cnksIGV4Y2x1ZGluZyB0aGUgcGF0aCBsZWFkaW5nIHRvIGl0LlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGZ1bGwgYWJzb2x1dGUgcGF0aCBmcm9tIHRoZSByb290IHRvIHRoZSBlbnRyeS5cbiAgICovXG4gIGZ1bGxQYXRoOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZmlsZSBzeXN0ZW0gb24gd2hpY2ggdGhlIGVudHJ5IHJlc2lkZXMuXG4gICAqL1xuICBmaWxlc3lzdGVtOiBGaWxlU3lzdGVtO1xuICAvKipcbiAgICogYW4gYWx0ZXJuYXRlIFVSTCB3aGljaCBjYW4gYmUgdXNlZCBieSBuYXRpdmUgd2VidmlldyBjb250cm9scywgZm9yIGV4YW1wbGUgbWVkaWEgcGxheWVycy5cbiAgICovXG4gIG5hdGl2ZVVSTDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMb29rIHVwIG1ldGFkYXRhIGFib3V0IHRoaXMgZW50cnkuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSB0aW1lIG9mIHRoZSBsYXN0IG1vZGlmaWNhdGlvbi5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgRXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cbiAgICovXG4gIGdldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1ldGFkYXRhIG9mIHRoZSBlbnRyeS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgTWV0YWRhdGEgb2JqZWN0XG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIHtGdW5jdGlvbn0gaXMgY2FsbGVkIHdpdGggYSBGaWxlRXJyb3JcbiAgICogQHBhcmFtIG1ldGFkYXRhT2JqZWN0IHtNZXRhZGF0YX0ga2V5cyBhbmQgdmFsdWVzIHRvIHNldFxuICAgKi9cbiAgc2V0TWV0YWRhdGEoc3VjY2Vzc0NhbGxiYWNrOiBNZXRhZGF0YUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrOiBFcnJvckNhbGxiYWNrLCBtZXRhZGF0YU9iamVjdDogTWV0YWRhdGEpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBNb3ZlIGFuIGVudHJ5IHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uIG9uIHRoZSBmaWxlIHN5c3RlbS4gSXQgaXMgYW4gZXJyb3IgdG8gdHJ5IHRvOlxuICAgKlxuICAgKiA8dWk+XG4gICAqIDxsaT5tb3ZlIGEgZGlyZWN0b3J5IGluc2lkZSBpdHNlbGYgb3IgdG8gYW55IGNoaWxkIGF0IGFueSBkZXB0aDs8L2xpPlxuICAgKiA8bGk+bW92ZSBhbiBlbnRyeSBpbnRvIGl0cyBwYXJlbnQgaWYgYSBuYW1lIGRpZmZlcmVudCBmcm9tIGl0cyBjdXJyZW50IG9uZSBpc24ndCBwcm92aWRlZDs8L2xpPlxuICAgKiA8bGk+bW92ZSBhIGZpbGUgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5OzwvbGk+XG4gICAqIDxsaT5tb3ZlIGEgZGlyZWN0b3J5IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGZpbGU7PC9saT5cbiAgICogPGxpPm1vdmUgYW55IGVsZW1lbnQgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5IHdoaWNoIGlzIG5vdCBlbXB0eS48L2xpPlxuICAgKiA8dWw+XG4gICAqXG4gICAqIEEgbW92ZSBvZiBhIGZpbGUgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGZpbGUgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGZpbGUuXG4gICAqIEEgbW92ZSBvZiBhIGRpcmVjdG9yeSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZW1wdHkgZGlyZWN0b3J5IG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdCBkaXJlY3RvcnkuXG4gICAqL1xuICBtb3ZlVG8oXG4gICAgcGFyZW50OiBEaXJlY3RvcnlFbnRyeSxcbiAgICBuZXdOYW1lPzogc3RyaW5nLFxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IEVudHJ5Q2FsbGJhY2ssXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcbiAgKTogdm9pZDtcblxuICAvKipcbiAgICogQ29weSBhbiBlbnRyeSB0byBhIGRpZmZlcmVudCBsb2NhdGlvbiBvbiB0aGUgZmlsZSBzeXN0ZW0uIEl0IGlzIGFuIGVycm9yIHRvIHRyeSB0bzpcbiAgICpcbiAgICogPHVsPlxuICAgKiA8bGk+IGNvcHkgYSBkaXJlY3RvcnkgaW5zaWRlIGl0c2VsZiBvciB0byBhbnkgY2hpbGQgYXQgYW55IGRlcHRoOzwvbGk+XG4gICAqIDxsaT4gY29weSBhbiBlbnRyeSBpbnRvIGl0cyBwYXJlbnQgaWYgYSBuYW1lIGRpZmZlcmVudCBmcm9tIGl0cyBjdXJyZW50IG9uZSBpc24ndCBwcm92aWRlZDs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYSBmaWxlIHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeTs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYSBkaXJlY3RvcnkgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZmlsZTs8L2xpPlxuICAgKiA8bGk+IGNvcHkgYW55IGVsZW1lbnQgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5IHdoaWNoIGlzIG5vdCBlbXB0eS48L2xpPlxuICAgKiA8bGk+IEEgY29weSBvZiBhIGZpbGUgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGZpbGUgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGZpbGUuPC9saT5cbiAgICogPGxpPiBBIGNvcHkgb2YgYSBkaXJlY3Rvcnkgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGVtcHR5IGRpcmVjdG9yeSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXRcbiAgICogZGlyZWN0b3J5LjwvbGk+XG4gICAqIDwvdWw+XG4gICAqXG4gICAqIERpcmVjdG9yeSBjb3BpZXMgYXJlIGFsd2F5cyByZWN1cnNpdmUtLXRoYXQgaXMsIHRoZXkgY29weSBhbGwgY29udGVudHMgb2YgdGhlIGRpcmVjdG9yeS5cbiAgICovXG4gIGNvcHlUbyhcbiAgICBwYXJlbnQ6IERpcmVjdG9yeUVudHJ5LFxuICAgIG5ld05hbWU/OiBzdHJpbmcsXG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogRW50cnlDYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgVVJMIHRoYXQgY2FuIGJlIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeS4gVW5saWtlIHRoZSBVUk4gZGVmaW5lZCBpbiBbRklMRS1BUEktRURdLCBpdCBoYXMgbm8gc3BlY2lmaWNcbiAgICogZXhwaXJhdGlvbjsgYXMgaXQgZGVzY3JpYmVzIGEgbG9jYXRpb24gb24gZGlzaywgaXQgc2hvdWxkIGJlIHZhbGlkIGF0IGxlYXN0IGFzIGxvbmcgYXMgdGhhdCBsb2NhdGlvbiBleGlzdHMuXG4gICAqL1xuICB0b1VSTCgpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybiBhIFVSTCB0aGF0IGNhbiBiZSBwYXNzZWQgYWNyb3NzIHRoZSBicmlkZ2UgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeS5cbiAgICogQHJldHVybiBzdHJpbmcgVVJMIHRoYXQgY2FuIGJlIHBhc3NlZCBhY3Jvc3MgdGhlIGJyaWRnZSB0byBpZGVudGlmeSB0aGlzIGVudHJ5XG4gICAqL1xuICB0b0ludGVybmFsVVJMKCk6IHN0cmluZztcblxuICAvKipcbiAgICogRGVsZXRlcyBhIGZpbGUgb3IgZGlyZWN0b3J5LiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGRlbGV0ZSBhIGRpcmVjdG9yeSB0aGF0IGlzIG5vdCBlbXB0eS4gSXQgaXMgYW4gZXJyb3IgdG9cbiAgICogYXR0ZW1wdCB0byBkZWxldGUgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIGEgZmlsZXN5c3RlbS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIHN1Y2Nlc3MuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgcmVtb3ZlKHN1Y2Nlc3NDYWxsYmFjazogVm9pZENhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIExvb2sgdXAgdGhlIHBhcmVudCBEaXJlY3RvcnlFbnRyeSBjb250YWluaW5nIHRoaXMgRW50cnkuIElmIHRoaXMgRW50cnkgaXMgdGhlIHJvb3Qgb2YgaXRzIGZpbGVzeXN0ZW0sIGl0cyBwYXJlbnRcbiAgICogaXMgaXRzZWxmLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBwYXJlbnQgRW50cnkuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZ2V0UGFyZW50KHN1Y2Nlc3NDYWxsYmFjazogRGlyZWN0b3J5RW50cnlDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xufVxuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZGlyZWN0b3J5IG9uIGEgZmlsZSBzeXN0ZW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3J5RW50cnkgZXh0ZW5kcyBFbnRyeSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IERpcmVjdG9yeVJlYWRlciB0byByZWFkIEVudHJpZXMgZnJvbSB0aGlzIERpcmVjdG9yeS5cbiAgICovXG4gIGNyZWF0ZVJlYWRlcigpOiBEaXJlY3RvcnlSZWFkZXI7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgb3IgbG9va3MgdXAgYSBmaWxlLlxuICAgKiBAcGFyYW0gcGF0aCBFaXRoZXIgYW4gYWJzb2x1dGUgcGF0aCBvciBhIHJlbGF0aXZlIHBhdGggZnJvbSB0aGlzIERpcmVjdG9yeUVudHJ5IHRvIHRoZSBmaWxlIHRvIGJlIGxvb2tlZCB1cCBvclxuICAgKiAgIGNyZWF0ZWQuIEl0IGlzIGFuIGVycm9yIHRvIGF0dGVtcHQgdG8gY3JlYXRlIGEgZmlsZSB3aG9zZSBpbW1lZGlhdGUgcGFyZW50IGRvZXMgbm90IHlldCBleGlzdC5cbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICogICAgIDx1bD5cbiAgICogICAgIDxsaT5JZiBjcmVhdGUgYW5kIGV4Y2x1c2l2ZSBhcmUgYm90aCB0cnVlLCBhbmQgdGhlIHBhdGggYWxyZWFkeSBleGlzdHMsIGdldEZpbGUgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIHRydWUsIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGFuZCBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldEZpbGUgbXVzdCBjcmVhdGUgaXQgYXMgYVxuICAgKiAgIHplcm8tbGVuZ3RoIGZpbGUgYW5kIHJldHVybiBhIGNvcnJlc3BvbmRpbmcgRmlsZUVudHJ5LjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZXhpc3RzLCBidXQgaXMgYSBkaXJlY3RvcnksIGdldEZpbGUgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+T3RoZXJ3aXNlLCBpZiBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldEZpbGUgbXVzdCByZXR1cm4gYSBGaWxlRW50cnkgY29ycmVzcG9uZGluZyB0byBwYXRoLjwvbGk+XG4gICAqICAgICA8L3VsPlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBGaWxlIHNlbGVjdGVkIG9yIGNyZWF0ZWQuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZ2V0RmlsZShwYXRoOiBzdHJpbmcsIG9wdGlvbnM/OiBGbGFncywgc3VjY2Vzc0NhbGxiYWNrPzogRmlsZUVudHJ5Q2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogQ3JlYXRlcyBvciBsb29rcyB1cCBhIGRpcmVjdG9yeS5cbiAgICogQHBhcmFtIHBhdGggRWl0aGVyIGFuIGFic29sdXRlIHBhdGggb3IgYSByZWxhdGl2ZSBwYXRoIGZyb20gdGhpcyBEaXJlY3RvcnlFbnRyeSB0byB0aGUgZGlyZWN0b3J5IHRvIGJlIGxvb2tlZCB1cFxuICAgKiAgIG9yIGNyZWF0ZWQuIEl0IGlzIGFuIGVycm9yIHRvIGF0dGVtcHQgdG8gY3JlYXRlIGEgZGlyZWN0b3J5IHdob3NlIGltbWVkaWF0ZSBwYXJlbnQgZG9lcyBub3QgeWV0IGV4aXN0LlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiAgICAgPHVsPlxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBhbmQgZXhjbHVzaXZlIGFyZSBib3RoIHRydWUgYW5kIHRoZSBwYXRoIGFscmVhZHkgZXhpc3RzLCBnZXREaXJlY3RvcnkgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIHRydWUsIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGFuZCBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldERpcmVjdG9yeSBtdXN0IGNyZWF0ZSBhbmQgcmV0dXJuXG4gICAqICAgYSBjb3JyZXNwb25kaW5nIERpcmVjdG9yeUVudHJ5LjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBnZXREaXJlY3RvcnkgbXVzdCBmYWlsLjwvbGk+XG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBleGlzdHMsIGJ1dCBpcyBhIGZpbGUsIGdldERpcmVjdG9yeSBtdXN0IGZhaWwuPC9saT5cbiAgICogICAgIDxsaT5PdGhlcndpc2UsIGlmIG5vIG90aGVyIGVycm9yIG9jY3VycywgZ2V0RGlyZWN0b3J5IG11c3QgcmV0dXJuIGEgRGlyZWN0b3J5RW50cnkgY29ycmVzcG9uZGluZyB0byBwYXRoLjwvbGk+XG4gICAqICAgICA8L3VsPlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrICAgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB0byByZXR1cm4gdGhlIERpcmVjdG9yeUVudHJ5IHNlbGVjdGVkIG9yIGNyZWF0ZWQuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKlxuICAgKi9cbiAgZ2V0RGlyZWN0b3J5KFxuICAgIHBhdGg6IHN0cmluZyxcbiAgICBvcHRpb25zPzogRmxhZ3MsXG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogRGlyZWN0b3J5RW50cnlDYWxsYmFjayxcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xuICApOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgZGlyZWN0b3J5IGFuZCBhbGwgb2YgaXRzIGNvbnRlbnRzLCBpZiBhbnkuIEluIHRoZSBldmVudCBvZiBhbiBlcnJvciBbZS5nLiB0cnlpbmcgdG8gZGVsZXRlIGEgZGlyZWN0b3J5XG4gICAqIHRoYXQgY29udGFpbnMgYSBmaWxlIHRoYXQgY2Fubm90IGJlIHJlbW92ZWRdLCBzb21lIG9mIHRoZSBjb250ZW50cyBvZiB0aGUgZGlyZWN0b3J5IG1heSBiZSBkZWxldGVkLiBJdCBpcyBhbiBlcnJvclxuICAgKiB0byBhdHRlbXB0IHRvIGRlbGV0ZSB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgYSBmaWxlc3lzdGVtLlxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgb24gc3VjY2Vzcy5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICByZW1vdmVSZWN1cnNpdmVseShzdWNjZXNzQ2FsbGJhY2s6IFZvaWRDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xufVxuXG4vKipcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBsZXRzIGEgdXNlciBsaXN0IGZpbGVzIGFuZCBkaXJlY3RvcmllcyBpbiBhIGRpcmVjdG9yeS4gSWYgdGhlcmUgYXJlIG5vIGFkZGl0aW9ucyB0byBvclxuICogZGVsZXRpb25zIGZyb20gYSBkaXJlY3RvcnkgYmV0d2VlbiB0aGUgZmlyc3QgYW5kIGxhc3QgY2FsbCB0byByZWFkRW50cmllcywgYW5kIG5vIGVycm9ycyBvY2N1ciwgdGhlbjpcbiAqIDx1bD5cbiAqIDxsaT4gQSBzZXJpZXMgb2YgY2FsbHMgdG8gcmVhZEVudHJpZXMgbXVzdCByZXR1cm4gZWFjaCBlbnRyeSBpbiB0aGUgZGlyZWN0b3J5IGV4YWN0bHkgb25jZS48L2xpPlxuICogPGxpPiBPbmNlIGFsbCBlbnRyaWVzIGhhdmUgYmVlbiByZXR1cm5lZCwgdGhlIG5leHQgY2FsbCB0byByZWFkRW50cmllcyBtdXN0IHByb2R1Y2UgYW4gZW1wdHkgYXJyYXkuPC9saT5cbiAqIDxsaT4gSWYgbm90IGFsbCBlbnRyaWVzIGhhdmUgYmVlbiByZXR1cm5lZCwgdGhlIGFycmF5IHByb2R1Y2VkIGJ5IHJlYWRFbnRyaWVzIG11c3Qgbm90IGJlIGVtcHR5LjwvbGk+XG4gKiA8bGk+IFRoZSBlbnRyaWVzIHByb2R1Y2VkIGJ5IHJlYWRFbnRyaWVzIG11c3Qgbm90IGluY2x1ZGUgdGhlIGRpcmVjdG9yeSBpdHNlbGYgW1wiLlwiXSBvciBpdHMgcGFyZW50IFtcIi4uXCJdLjwvbGk+XG4gKiA8L3VsPlxuICovXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdG9yeVJlYWRlciB7XG4gIGxvY2FsVVJMOiBzdHJpbmc7XG4gIGhhc1JlYWRFbnRyaWVzOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBSZWFkIHRoZSBuZXh0IGJsb2NrIG9mIGVudHJpZXMgZnJvbSB0aGlzIGRpcmVjdG9yeS5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBDYWxsZWQgb25jZSBwZXIgc3VjY2Vzc2Z1bCBjYWxsIHRvIHJlYWRFbnRyaWVzIHRvIGRlbGl2ZXIgdGhlIG5leHQgcHJldmlvdXNseS11bnJlcG9ydGVkXG4gICAqICAgc2V0IG9mIEVudHJpZXMgaW4gdGhlIGFzc29jaWF0ZWQgRGlyZWN0b3J5LiBJZiBhbGwgRW50cmllcyBoYXZlIGFscmVhZHkgYmVlbiByZXR1cm5lZCBmcm9tIHByZXZpb3VzIGludm9jYXRpb25zXG4gICAqICAgb2YgcmVhZEVudHJpZXMsIHN1Y2Nlc3NDYWxsYmFjayBtdXN0IGJlIGNhbGxlZCB3aXRoIGEgemVyby1sZW5ndGggYXJyYXkgYXMgYW4gYXJndW1lbnQuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgaW5kaWNhdGluZyB0aGF0IHRoZXJlIHdhcyBhbiBlcnJvciByZWFkaW5nIGZyb20gdGhlIERpcmVjdG9yeS5cbiAgICovXG4gIHJlYWRFbnRyaWVzKHN1Y2Nlc3NDYWxsYmFjazogRW50cmllc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XG59XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmaWxlIG9uIGEgZmlsZSBzeXN0ZW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUVudHJ5IGV4dGVuZHMgRW50cnkge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBGaWxlV3JpdGVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgZmlsZSB0aGF0IHRoaXMgRmlsZUVudHJ5IHJlcHJlc2VudHMuXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZSBuZXcgRmlsZVdyaXRlci5cbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXG4gICAqL1xuICBjcmVhdGVXcml0ZXIoc3VjY2Vzc0NhbGxiYWNrOiBGaWxlV3JpdGVyQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcblxuICAvKipcbiAgICogUmV0dXJucyBhIEZpbGUgdGhhdCByZXByZXNlbnRzIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBmaWxlIHRoYXQgdGhpcyBGaWxlRW50cnkgcmVwcmVzZW50cy5cbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIEZpbGUuXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxuICAgKi9cbiAgZmlsZShzdWNjZXNzQ2FsbGJhY2s6IEZpbGVDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xufVxuXG4vKipcbiAqIFdoZW4gcmVxdWVzdEZpbGVTeXN0ZW0oKSBzdWNjZWVkcywgdGhlIGZvbGxvd2luZyBjYWxsYmFjayBpcyBtYWRlLlxuICovXG5leHBvcnQgdHlwZSBGaWxlU3lzdGVtQ2FsbGJhY2sgPSAoZmlsZXN5c3RlbTogRmlsZVN5c3RlbSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBFbnRyeSBvYmplY3RzLlxuICovXG5leHBvcnQgdHlwZSBFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBFbnRyeSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBGaWxlRW50cnkgb2JqZWN0cy5cbiAqL1xuZXhwb3J0IHR5cGUgRmlsZUVudHJ5Q2FsbGJhY2sgPSAoZW50cnk6IEZpbGVFbnRyeSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBEaXJlY3RvcnlFbnRyeSBvYmplY3RzLlxuICovXG5leHBvcnQgdHlwZSBEaXJlY3RvcnlFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBEaXJlY3RvcnlFbnRyeSkgPT4gdm9pZDtcblxuLyoqXG4gKiBXaGVuIHJlYWRFbnRyaWVzKCkgc3VjY2VlZHMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cbiAqL1xuZXhwb3J0IHR5cGUgRW50cmllc0NhbGxiYWNrID0gKGVudHJpZXM6IEVudHJ5W10pID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgZmlsZSBhbmQgZGlyZWN0b3J5IG1ldGFkYXRhLlxuICovXG5leHBvcnQgdHlwZSBNZXRhZGF0YUNhbGxiYWNrID0gKG1ldGFkYXRhOiBNZXRhZGF0YSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gY3JlYXRlIGEgRmlsZVdyaXRlci5cbiAqL1xuZXhwb3J0IHR5cGUgRmlsZVdyaXRlckNhbGxiYWNrID0gKGZpbGVXcml0ZXI6IEZpbGVXcml0ZXIpID0+IHZvaWQ7XG5cbi8qKlxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIG9idGFpbiBhIEZpbGUuXG4gKi9cbmV4cG9ydCB0eXBlIEZpbGVDYWxsYmFjayA9IChmaWxlOiBJRmlsZSkgPT4gdm9pZDtcblxuLyoqXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGdlbmVyaWMgY2FsbGJhY2sgdXNlZCB0byBpbmRpY2F0ZSBzdWNjZXNzIG9mIGFuIGFzeW5jaHJvbm91cyBtZXRob2QuXG4gKi9cbmV4cG9ydCB0eXBlIFZvaWRDYWxsYmFjayA9ICgpID0+IHZvaWQ7XG5cbi8qKlxuICogV2hlbiBhbiBlcnJvciBvY2N1cnMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cbiAqL1xuZXhwb3J0IHR5cGUgRXJyb3JDYWxsYmFjayA9IChlcnI6IEZpbGVFcnJvcikgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBSZW1vdmVSZXN1bHQge1xuICBzdWNjZXNzOiBib29sZWFuO1xuICBmaWxlUmVtb3ZlZDogRW50cnk7XG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlU2F2ZXIgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIC8qKlxuICAgKiBXaGVuIHRoZSBGaWxlU2F2ZXIgY29uc3RydWN0b3IgaXMgY2FsbGVkLCB0aGUgdXNlciBhZ2VudCBtdXN0IHJldHVybiBhIG5ldyBGaWxlU2F2ZXIgb2JqZWN0IHdpdGggcmVhZHlTdGF0ZSBzZXQgdG9cbiAgICogSU5JVC4gVGhpcyBjb25zdHJ1Y3RvciBtdXN0IGJlIHZpc2libGUgd2hlbiB0aGUgc2NyaXB0J3MgZ2xvYmFsIG9iamVjdCBpcyBlaXRoZXIgYSBXaW5kb3cgb2JqZWN0IG9yIGFuIG9iamVjdFxuICAgKiBpbXBsZW1lbnRpbmcgdGhlIFdvcmtlclV0aWxzIGludGVyZmFjZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEJsb2IpO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBhYm9ydCBtZXRob2QgaXMgY2FsbGVkLCB1c2VyIGFnZW50cyBtdXN0IHJ1biB0aGUgc3RlcHMgYmVsb3c6XG4gICAqIDxvbD5cbiAgICogPGxpPiBJZiByZWFkeVN0YXRlID09IERPTkUgb3IgcmVhZHlTdGF0ZSA9PSBJTklULCB0ZXJtaW5hdGUgdGhpcyBvdmVyYWxsIHNlcmllcyBvZiBzdGVwcyB3aXRob3V0IGRvaW5nIGFueXRoaW5nXG4gICAqIGVsc2UuIDwvbGk+XG4gICAqIDxsaT4gU2V0IHJlYWR5U3RhdGUgdG8gRE9ORS4gPC9saT5cbiAgICogPGxpPiBJZiB0aGVyZSBhcmUgYW55IHRhc2tzIGZyb20gdGhlIG9iamVjdCdzIEZpbGVTYXZlciB0YXNrIHNvdXJjZSBpbiBvbmUgb2YgdGhlIHRhc2sgcXVldWVzLCB0aGVuIHJlbW92ZSB0aG9zZVxuICAgKiB0YXNrcy4gPC9saT5cbiAgICogPGxpPiBUZXJtaW5hdGUgdGhlIHdyaXRlIGFsZ29yaXRobSBiZWluZyBwcm9jZXNzZWQuIDwvbGk+XG4gICAqIDxsaT4gU2V0IHRoZSBlcnJvciBhdHRyaWJ1dGUgdG8gYSBET01FcnJvciBvYmplY3Qgb2YgdHlwZSBcIkFib3J0RXJyb3JcIi4gPC9saT5cbiAgICogPGxpPiBGaXJlIGEgcHJvZ3Jlc3MgZXZlbnQgY2FsbGVkIGFib3J0IDwvbGk+XG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCB3cml0ZSBlbmQgPC9saT5cbiAgICogPGxpPiBUZXJtaW5hdGUgdGhpcyBhbGdvcml0aG0uIDwvbGk+XG4gICAqIDwvb2w+XG4gICAqL1xuICBhYm9ydCgpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBUaGUgYmxvYiBpcyBiZWluZyB3cml0dGVuLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIElOSVQ6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBvYmplY3QgaGFzIGJlZW4gY29uc3RydWN0ZWQsIGJ1dCB0aGVyZSBpcyBubyBwZW5kaW5nIHdyaXRlLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIFdSSVRJTkc6IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBlbnRpcmUgQmxvYiBoYXMgYmVlbiB3cml0dGVuIHRvIHRoZSBmaWxlLCBhbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgdGhlIHdyaXRlLCBvciB0aGUgd3JpdGUgd2FzIGFib3J0ZWQgdXNpbmdcbiAgICogYWJvcnQoKS4gVGhlIEZpbGVTYXZlciBpcyBubyBsb25nZXIgd3JpdGluZyB0aGUgYmxvYi5cbiAgICogQHJlYWRvbmx5XG4gICAqL1xuICBET05FOiBudW1iZXI7XG4gIC8qKlxuICAgKiBUaGUgRmlsZVNhdmVyIG9iamVjdCBjYW4gYmUgaW4gb25lIG9mIDMgc3RhdGVzLiBUaGUgcmVhZHlTdGF0ZSBhdHRyaWJ1dGUsIG9uIGdldHRpbmcsIG11c3QgcmV0dXJuIHRoZSBjdXJyZW50XG4gICAqIHN0YXRlLCB3aGljaCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcbiAgICogPHVsPlxuICAgKiA8bGk+SU5JVDwvbGk+XG4gICAqIDxsaT5XUklUSU5HPC9saT5cbiAgICogPGxpPkRPTkU8L2xpPlxuICAgKiA8dWw+XG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgcmVhZHlTdGF0ZTogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGxhc3QgZXJyb3IgdGhhdCBvY2N1cnJlZCBvbiB0aGUgRmlsZVNhdmVyLlxuICAgKiBAcmVhZG9ubHlcbiAgICovXG4gIGVycm9yOiBFcnJvcjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgZm9yIHdyaXRlIHN0YXJ0IGV2ZW50c1xuICAgKi9cbiAgb253cml0ZXN0YXJ0OiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBwcm9ncmVzcyBldmVudHMuXG4gICAqL1xuICBvbnByb2dyZXNzOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB3cml0ZSBldmVudHMuXG4gICAqL1xuICBvbndyaXRlOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBhYm9ydCBldmVudHMuXG4gICAqL1xuICBvbmFib3J0OiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciBlcnJvciBldmVudHMuXG4gICAqL1xuICBvbmVycm9yOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIC8qKlxuICAgKiBIYW5kbGVyIGZvciB3cml0ZSBlbmQgZXZlbnRzLlxuICAgKi9cbiAgb253cml0ZWVuZDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBGaWxlU2F2ZXIgY29uc3RydWN0b3IgaXMgY2FsbGVkLCB0aGUgdXNlciBhZ2VudCBtdXN0IHJldHVybiBhIG5ldyBGaWxlU2F2ZXIgb2JqZWN0IHdpdGggcmVhZHlTdGF0ZSBzZXQgdG9cbiAgICogSU5JVC4gVGhpcyBjb25zdHJ1Y3RvciBtdXN0IGJlIHZpc2libGUgd2hlbiB0aGUgc2NyaXB0J3MgZ2xvYmFsIG9iamVjdCBpcyBlaXRoZXIgYSBXaW5kb3cgb2JqZWN0IG9yIGFuIG9iamVjdFxuICAgKiBpbXBsZW1lbnRpbmcgdGhlIFdvcmtlclV0aWxzIGludGVyZmFjZS5cbiAgICovXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEJsb2IpO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBhYm9ydCBtZXRob2QgaXMgY2FsbGVkLCB1c2VyIGFnZW50cyBtdXN0IHJ1biB0aGUgc3RlcHMgYmVsb3c6XG4gICAqIDxvbD5cbiAgICogPGxpPiBJZiByZWFkeVN0YXRlID09IERPTkUgb3IgcmVhZHlTdGF0ZSA9PSBJTklULCB0ZXJtaW5hdGUgdGhpcyBvdmVyYWxsIHNlcmllcyBvZiBzdGVwcyB3aXRob3V0IGRvaW5nIGFueXRoaW5nXG4gICAqIGVsc2UuIDwvbGk+XG4gICAqIDxsaT4gU2V0IHJlYWR5U3RhdGUgdG8gRE9ORS4gPC9saT5cbiAgICogPGxpPiBJZiB0aGVyZSBhcmUgYW55IHRhc2tzIGZyb20gdGhlIG9iamVjdCdzIEZpbGVTYXZlciB0YXNrIHNvdXJjZSBpbiBvbmUgb2YgdGhlIHRhc2sgcXVldWVzLCB0aGVuIHJlbW92ZSB0aG9zZVxuICAgKiB0YXNrcy4gPC9saT5cbiAgICogPGxpPiBUZXJtaW5hdGUgdGhlIHdyaXRlIGFsZ29yaXRobSBiZWluZyBwcm9jZXNzZWQuIDwvbGk+XG4gICAqIDxsaT4gU2V0IHRoZSBlcnJvciBhdHRyaWJ1dGUgdG8gYSBET01FcnJvciBvYmplY3Qgb2YgdHlwZSBcIkFib3J0RXJyb3JcIi4gPC9saT5cbiAgICogPGxpPiBGaXJlIGEgcHJvZ3Jlc3MgZXZlbnQgY2FsbGVkIGFib3J0IDwvbGk+XG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCB3cml0ZWVuZCA8L2xpPlxuICAgKiA8bGk+IFRlcm1pbmF0ZSB0aGlzIGFsZ29yaXRobS4gPC9saT5cbiAgICogPC9vbD5cbiAgICovXG4gIGFib3J0KCk6IHZvaWQ7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICogVGhpcyBpbnRlcmZhY2UgZXhwYW5kcyBvbiB0aGUgRmlsZVNhdmVyIGludGVyZmFjZSB0byBhbGxvdyBmb3IgbXVsdGlwbGUgd3JpdGUgYWN0aW9ucywgcmF0aGVyIHRoYW4ganVzdCBzYXZpbmcgYVxuICogICBzaW5nbGUgQmxvYi5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZVdyaXRlciBleHRlbmRzIEZpbGVTYXZlciB7XG4gIC8qKlxuICAgKiBUaGUgYnl0ZSBvZmZzZXQgYXQgd2hpY2ggdGhlIG5leHQgd3JpdGUgdG8gdGhlIGZpbGUgd2lsbCBvY2N1ci4gVGhpcyBtdXN0IGJlIG5vIGdyZWF0ZXIgdGhhbiBsZW5ndGguXG4gICAqIEEgbmV3bHktY3JlYXRlZCBGaWxlV3JpdGVyIG11c3QgaGF2ZSBwb3NpdGlvbiBzZXQgdG8gMC5cbiAgICovXG4gIHBvc2l0aW9uOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIGZpbGUuIElmIHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgcmVhZCBhY2Nlc3MgdG8gdGhlIGZpbGUsIHRoaXMgbXVzdCBiZSB0aGUgaGlnaGVzdCBieXRlIG9mZnNldCBhdFxuICAgKiB3aGljaCB0aGUgdXNlciBoYXMgd3JpdHRlbi5cbiAgICovXG4gIGxlbmd0aDogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBXcml0ZSB0aGUgc3VwcGxpZWQgZGF0YSB0byB0aGUgZmlsZSBhdCBwb3NpdGlvbi5cbiAgICogQHBhcmFtIGRhdGEgVGhlIGJsb2IgdG8gd3JpdGUuXG4gICAqL1xuICB3cml0ZShkYXRhOiBBcnJheUJ1ZmZlciB8IEJsb2IgfCBzdHJpbmcpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBTZWVrIHNldHMgdGhlIGZpbGUgcG9zaXRpb24gYXQgd2hpY2ggdGhlIG5leHQgd3JpdGUgd2lsbCBvY2N1ci5cbiAgICogQHBhcmFtIG9mZnNldCBJZiBub25uZWdhdGl2ZSwgYW4gYWJzb2x1dGUgYnl0ZSBvZmZzZXQgaW50byB0aGUgZmlsZS4gSWYgbmVnYXRpdmUsIGFuIG9mZnNldCBiYWNrIGZyb20gdGhlIGVuZCBvZlxuICAgKiAgIHRoZSBmaWxlLlxuICAgKi9cbiAgc2VlayhvZmZzZXQ6IG51bWJlcik6IHZvaWQ7XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGxlbmd0aCBvZiB0aGUgZmlsZSB0byB0aGF0IHNwZWNpZmllZC4gSWYgc2hvcnRlbmluZyB0aGUgZmlsZSwgZGF0YSBiZXlvbmQgdGhlIG5ldyBsZW5ndGggbXVzdCBiZVxuICAgKiBkaXNjYXJkZWQuIElmIGV4dGVuZGluZyB0aGUgZmlsZSwgdGhlIGV4aXN0aW5nIGRhdGEgbXVzdCBiZSB6ZXJvLXBhZGRlZCB1cCB0byB0aGUgbmV3IGxlbmd0aC5cbiAgICogQHBhcmFtIHNpemUgVGhlIHNpemUgdG8gd2hpY2ggdGhlIGxlbmd0aCBvZiB0aGUgZmlsZSBpcyB0byBiZSBhZGp1c3RlZCwgbWVhc3VyZWQgaW4gYnl0ZXMuXG4gICAqL1xuICB0cnVuY2F0ZShzaXplOiBudW1iZXIpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElXcml0ZU9wdGlvbnMge1xuICByZXBsYWNlPzogYm9vbGVhbjtcbiAgYXBwZW5kPzogYm9vbGVhbjtcbiAgdHJ1bmNhdGU/OiBudW1iZXI7IC8vIGlmIHByZXNlbnQsIG51bWJlciBvZiBieXRlcyB0byB0cnVuY2F0ZSBmaWxlIHRvIGJlZm9yZSB3cml0aW5nXG59XG5cbi8qKiBAaGlkZGVuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlRXJyb3Ige1xuICBzdGF0aWMgTk9UX0ZPVU5EX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgU0VDVVJJVFlfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBBQk9SVF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIE5PVF9SRUFEQUJMRV9FUlI6IG51bWJlcjtcbiAgc3RhdGljIEVOQ09ESU5HX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBJTlZBTElEX1NUQVRFX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgU1lOVEFYX0VSUjogbnVtYmVyO1xuICBzdGF0aWMgSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBRVU9UQV9FWENFRURFRF9FUlI6IG51bWJlcjtcbiAgc3RhdGljIFRZUEVfTUlTTUFUQ0hfRVJSOiBudW1iZXI7XG4gIHN0YXRpYyBQQVRIX0VYSVNUU19FUlI6IG51bWJlcjtcbiAgLyoqIEVycm9yIGNvZGUgKi9cbiAgY29kZTogbnVtYmVyO1xuICBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoY29kZTogbnVtYmVyKTtcbn1cblxuLyoqIEBoaWRkZW4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZpbGVSZWFkZXIge1xuICBzdGF0aWMgRU1QVFk6IG51bWJlcjtcbiAgc3RhdGljIExPQURJTkc6IG51bWJlcjtcbiAgc3RhdGljIERPTkU6IG51bWJlcjtcbiAgc3RhdGljIFJFQURfQ0hVTktfU0laRTogbnVtYmVyO1xuXG4gIHJlYWR5U3RhdGU6IG51bWJlcjsgLy8gc2VlIGNvbnN0YW50cyBpbiB2YXIgZGVjbGFyYXRpb24gYmVsb3dcbiAgZXJyb3I6IEVycm9yO1xuICByZXN1bHQ6IHN0cmluZyB8IEFycmF5QnVmZmVyOyAvLyB0eXBlIGRlcGVuZHMgb24gcmVhZEFzWFhYKCkgY2FsbCB0eXBlXG5cbiAgb25sb2Fkc3RhcnQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9ucHJvZ3Jlc3M6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XG4gIG9ubG9hZDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgb25lcnJvcjogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgb25sb2FkZW5kOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuICBvbmFib3J0OiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xuXG4gIGFib3J0KCk6IHZvaWQ7XG5cbiAgcmVhZEFzVGV4dChmZTogSUZpbGUsIGVuY29kaW5nPzogc3RyaW5nKTogdm9pZDtcblxuICByZWFkQXNEYXRhVVJMKGZlOiBJRmlsZSk6IHZvaWQ7XG5cbiAgcmVhZEFzQmluYXJ5U3RyaW5nKGZlOiBJRmlsZSk6IHZvaWQ7XG5cbiAgcmVhZEFzQXJyYXlCdWZmZXIoZmU6IElGaWxlKTogdm9pZDtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5pbnRlcmZhY2UgV2luZG93IGV4dGVuZHMgTG9jYWxGaWxlU3lzdGVtIHt9XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBXaW5kb3c7XG5cbi8qKlxuICogQG5hbWUgRmlsZVxuICogQHByZW1pZXIgZmlsZXN5c3RlbVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBpbXBsZW1lbnRzIGEgRmlsZSBBUEkgYWxsb3dpbmcgcmVhZC93cml0ZSBhY2Nlc3MgdG8gZmlsZXMgcmVzaWRpbmcgb24gdGhlIGRldmljZS5cbiAqXG4gKiBUaGUgRmlsZSBjbGFzcyBpbXBsZW1lbnRzIHN0YXRpYyBjb252ZW5pZW5jZSBmdW5jdGlvbnMgdG8gYWNjZXNzIGZpbGVzIGFuZCBkaXJlY3Rvcmllcy5cbiAqXG4gKiBFeGFtcGxlOlxuICogYGBgXG4gKiBpbXBvcnQgeyBGaWxlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlOiBGaWxlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZpbGUuY2hlY2tEaXIodGhpcy5maWxlLmRhdGFEaXJlY3RvcnksICdteWRpcicpLnRoZW4oXyA9PiBjb25zb2xlLmxvZygnRGlyZWN0b3J5IGV4aXN0cycpKS5jYXRjaChlcnIgPT5cbiAqICAgY29uc29sZS5sb2coJ0RpcmVjdG9yeSBkb2Vzbid0IGV4aXN0JykpO1xuICpcbiAqIGBgYFxuICpcbiAqICBUaGlzIHBsdWdpbiBpcyBiYXNlZCBvbiBzZXZlcmFsIHNwZWNzLCBpbmNsdWRpbmcgOiBUaGUgSFRNTDUgRmlsZSBBUEkgaHR0cDogLy93d3cudzMub3JnL1RSL0ZpbGVBUEkvXG4gKiAgVGhlIChub3ctZGVmdW5jdCkgRGlyZWN0b3JpZXMgYW5kIFN5c3RlbSBleHRlbnNpb25zIExhdGVzdDogaHR0cDogLy93d3cudzMub3JnL1RSLzIwMTIvV0QtZmlsZS1zeXN0ZW0tYXBpLTIwMTIwNDE3L1xuICogIEFsdGhvdWdoIG1vc3Qgb2YgdGhlIHBsdWdpbiBjb2RlIHdhcyB3cml0dGVuIHdoZW4gYW4gZWFybGllciBzcGVjIHdhcyBjdXJyZW50OiBodHRwOlxuICogICAvL3d3dy53My5vcmcvVFIvMjAxMS9XRC1maWxlLXN5c3RlbS1hcGktMjAxMTA0MTkvIEl0IGFsc28gaW1wbGVtZW50cyB0aGUgRmlsZVdyaXRlciBzcGVjIDogaHR0cDpcbiAqICAgLy9kZXYudzMub3JnLzIwMDkvZGFwL2ZpbGUtc3lzdGVtL2ZpbGUtd3JpdGVyLmh0bWxcbiAqICBAaW50ZXJmYWNlc1xuICogIElGaWxlXG4gKiAgRW50cnlcbiAqICBEaXJlY3RvcnlFbnRyeVxuICogIERpcmVjdG9yeVJlYWRlclxuICogIEZpbGVTeXN0ZW1cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGaWxlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEuZmlsZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWZpbGUnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiAgUmVhZC1vbmx5IGRpcmVjdG9yeSB3aGVyZSB0aGUgYXBwbGljYXRpb24gaXMgaW5zdGFsbGVkLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGFwcGxpY2F0aW9uRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBSZWFkLW9ubHkgZGlyZWN0b3J5IHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBpbnN0YWxsZWQuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgYXBwbGljYXRpb25TdG9yYWdlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFdoZXJlIHRvIHB1dCBhcHAtc3BlY2lmaWMgZGF0YSBmaWxlcy5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBkYXRhRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENhY2hlZCBmaWxlcyB0aGF0IHNob3VsZCBzdXJ2aXZlIGFwcCByZXN0YXJ0cy5cbiAgICogQXBwcyBzaG91bGQgbm90IHJlbHkgb24gdGhlIE9TIHRvIGRlbGV0ZSBmaWxlcyBpbiBoZXJlLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGNhY2hlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFuZHJvaWQ6IHRoZSBhcHBsaWNhdGlvbiBzcGFjZSBvbiBleHRlcm5hbCBzdG9yYWdlLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsQXBwbGljYXRpb25TdG9yYWdlRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqICBBbmRyb2lkOiBXaGVyZSB0byBwdXQgYXBwLXNwZWNpZmljIGRhdGEgZmlsZXMgb24gZXh0ZXJuYWwgc3RvcmFnZS5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbERhdGFEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogQW5kcm9pZDogdGhlIGFwcGxpY2F0aW9uIGNhY2hlIG9uIGV4dGVybmFsIHN0b3JhZ2UuXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxDYWNoZURpcmVjdG9yeTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBbmRyb2lkOiB0aGUgZXh0ZXJuYWwgc3RvcmFnZSAoU0QgY2FyZCkgcm9vdC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbFJvb3REaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogaU9TOiBUZW1wIGRpcmVjdG9yeSB0aGF0IHRoZSBPUyBjYW4gY2xlYXIgYXQgd2lsbC5cbiAgICovXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSB0ZW1wRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGlPUzogSG9sZHMgYXBwLXNwZWNpZmljIGZpbGVzIHRoYXQgc2hvdWxkIGJlIHN5bmNlZCAoZS5nLiB0byBpQ2xvdWQpLlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHN5bmNlZERhdGFEaXJlY3Rvcnk6IHN0cmluZztcblxuICAvKipcbiAgICogaU9TOiBGaWxlcyBwcml2YXRlIHRvIHRoZSBhcHAsIGJ1dCB0aGF0IGFyZSBtZWFuaW5nZnVsIHRvIG90aGVyIGFwcGxpY2F0aW9ucyAoZS5nLiBPZmZpY2UgZmlsZXMpXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgZG9jdW1lbnRzRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJsYWNrQmVycnkxMDogRmlsZXMgZ2xvYmFsbHkgYXZhaWxhYmxlIHRvIGFsbCBhcHBzXG4gICAqL1xuICBAQ29yZG92YVByb3BlcnR5KCkgc2hhcmVkRGlyZWN0b3J5OiBzdHJpbmc7XG5cbiAgY29yZG92YUZpbGVFcnJvcjogYW55ID0ge1xuICAgIDE6ICdOT1RfRk9VTkRfRVJSJyxcbiAgICAyOiAnU0VDVVJJVFlfRVJSJyxcbiAgICAzOiAnQUJPUlRfRVJSJyxcbiAgICA0OiAnTk9UX1JFQURBQkxFX0VSUicsXG4gICAgNTogJ0VOQ09ESU5HX0VSUicsXG4gICAgNjogJ05PX01PRElGSUNBVElPTl9BTExPV0VEX0VSUicsXG4gICAgNzogJ0lOVkFMSURfU1RBVEVfRVJSJyxcbiAgICA4OiAnU1lOVEFYX0VSUicsXG4gICAgOTogJ0lOVkFMSURfTU9ESUZJQ0FUSU9OX0VSUicsXG4gICAgMTA6ICdRVU9UQV9FWENFRURFRF9FUlInLFxuICAgIDExOiAnVFlQRV9NSVNNQVRDSF9FUlInLFxuICAgIDEyOiAnUEFUSF9FWElTVFNfRVJSJyxcbiAgICAxMzogJ1dST05HX0VOVFJZX1RZUEUnLFxuICAgIDE0OiAnRElSX1JFQURfRVJSJyxcbiAgfTtcblxuICAvKipcbiAgICogR2V0IGZyZWUgZGlzayBzcGFjZSBpbiBCeXRlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlbWFpbmluZyBmcmVlIGRpc2sgc3BhY2UgaW4gQnl0ZXNcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBnZXRGcmVlRGlza1NwYWNlKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb3Jkb3ZhLmV4ZWMocmVzb2x2ZSBhcyAoZGF0YTogYW55KSA9PiBhbnksIHJlamVjdCBhcyAoZGF0YTogYW55KSA9PiBhbnksICdGaWxlJywgJ2dldEZyZWVEaXNrU3BhY2UnLCBbXSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBkaXJlY3RvcnkgZXhpc3RzIGluIGEgY2VydGFpbiBwYXRoLCBkaXJlY3RvcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyIE5hbWUgb2YgZGlyZWN0b3J5IHRvIGNoZWNrXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRydWUgaWYgdGhlIGRpcmVjdG9yeSBleGlzdHMgb3IgcmVqZWN0cyB3aXRoIGFuXG4gICAqICAgZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY2hlY2tEaXIocGF0aDogc3RyaW5nLCBkaXI6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICgvXlxcLy8udGVzdChkaXIpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGggKyBkaXI7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChmdWxsUGF0aCkudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGRpcmVjdG9yeSBpbiB0aGUgc3BlY2lmaWMgcGF0aC5cbiAgICogVGhlIHJlcGxhY2UgYm9vbGVhbiB2YWx1ZSBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gcmVwbGFjZSBhbiBleGlzdGluZyBkaXJlY3Rvcnkgd2l0aCB0aGUgc2FtZSBuYW1lLlxuICAgKiBJZiBhbiBleGlzdGluZyBkaXJlY3RvcnkgZXhpc3RzIGFuZCB0aGUgcmVwbGFjZSB2YWx1ZSBpcyBmYWxzZSwgdGhlIHByb21pc2Ugd2lsbCBmYWlsIGFuZCByZXR1cm4gYW4gZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnkgdG8gY3JlYXRlXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwbGFjZSBJZiB0cnVlLCByZXBsYWNlcyBmaWxlIHdpdGggc2FtZSBuYW1lLiBJZiBmYWxzZSByZXR1cm5zIGVycm9yXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgRGlyZWN0b3J5RW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNyZWF0ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbik6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnM6IEZsYWdzID0ge1xuICAgICAgY3JlYXRlOiB0cnVlLFxuICAgIH07XG5cbiAgICBpZiAoIXJlcGxhY2UpIHtcbiAgICAgIG9wdGlvbnMuZXhjbHVzaXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpLnRoZW4oZnNlID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhIGRpcmVjdG9yeSBhdCBhIGdpdmVuIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBkaXJlY3RvcnlcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgVGhlIGRpcmVjdG9yeSBuYW1lXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJlbW92ZVJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBSZW1vdmVSZXN1bHQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlbW92ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oZGUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoZGUpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSBhIGRpcmVjdG9yeSB0byBhIGdpdmVuIHBhdGguXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBzb3VyY2UgcGF0aCB0byB0aGUgZGlyZWN0b3J5XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIFRoZSBzb3VyY2UgZGlyZWN0b3J5IG5hbWVcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggVGhlIGRlc3RpbmF0aW9uIHBhdGggdG8gdGhlIGRpcmVjdG9yeVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RGlyTmFtZSBUaGUgZGVzdGluYXRpb24gZGlyZWN0b3J5IG5hbWVcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnl8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRGlyZWN0b3J5RW50cnkgb2JqZWN0IG9yXG4gICAqICAgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIG1vdmVEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeSB8IEVudHJ5PiB7XG4gICAgbmV3RGlyTmFtZSA9IG5ld0Rpck5hbWUgfHwgZGlyTmFtZTtcblxuICAgIGlmICgvXlxcLy8udGVzdChuZXdEaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHNyY2RlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKGRlc3RlbmF0aW9uID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlKHNyY2RlLCBkZXN0ZW5hdGlvbiwgbmV3RGlyTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29weSBhIGRpcmVjdG9yeSBpbiB2YXJpb3VzIG1ldGhvZHMuIElmIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBleGlzdHMsIHdpbGwgZmFpbCB0byBjb3B5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW1zIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIE5hbWUgb2YgZGlyZWN0b3J5IHRvIGNvcHlcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggQmFzZSBGaWxlU3lzdGVtIG9mIG5ldyBsb2NhdGlvblxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RGlyTmFtZSBOZXcgbmFtZSBvZiBkaXJlY3RvcnkgdG8gY29weSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG5ldyBFbnRyeSBvYmplY3Qgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNvcHlEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChuZXdEaXJOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHNyY2RlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKGRlc3RlID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb3B5KHNyY2RlLCBkZXN0ZSwgbmV3RGlyTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdCBmaWxlcyBhbmQgZGlyZWN0b3J5IGZyb20gYSBnaXZlbiBwYXRoLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW1zIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIE5hbWUgb2YgZGlyZWN0b3J5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5W10+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIGFycmF5IG9mIEVudHJ5IG9iamVjdHMgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGxpc3REaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5W10+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8RW50cnlbXT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7XG4gICAgICAgICAgY3JlYXRlOiBmYWxzZSxcbiAgICAgICAgICBleGNsdXNpdmU6IGZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihkZSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IGRlLmNyZWF0ZVJlYWRlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkRW50cmllcyhyZWFkZXIpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbGwgZmlsZXMgYW5kIHRoZSBkaXJlY3RvcnkgZnJvbSBhIGRlc2lyZWQgbG9jYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBSZW1vdmVSZXN1bHQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHJlbW92ZVJlY3Vyc2l2ZWx5KHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8UmVtb3ZlUmVzdWx0PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihkZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJpbXJhZihkZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIGZpbGUgZXhpc3RzIGluIGEgY2VydGFpbiBwYXRoLCBkaXJlY3RvcnkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUgdG8gY2hlY2tcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGNoZWNrRmlsZShwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVMb2NhbEZpbGVzeXN0ZW1VcmwocGF0aCArIGZpbGUpLnRoZW4oZnNlID0+IHtcbiAgICAgIGlmIChmc2UuaXNGaWxlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcigxMyk7XG4gICAgICAgIGVyci5tZXNzYWdlID0gJ2lucHV0IGlzIG5vdCBhIGZpbGUnO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8Ym9vbGVhbj4oZXJyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IGZpbGUgaW4gdGhlIHNwZWNpZmljIHBhdGguXG4gICAqIFRoZSByZXBsYWNlIGJvb2xlYW4gdmFsdWUgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHJlcGxhY2UgYW4gZXhpc3RpbmcgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUuXG4gICAqIElmIGFuIGV4aXN0aW5nIGZpbGUgZXhpc3RzIGFuZCB0aGUgcmVwbGFjZSB2YWx1ZSBpcyBmYWxzZSwgdGhlIHByb21pc2Ugd2lsbCBmYWlsIGFuZCByZXR1cm4gYW4gZXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byBjcmVhdGVcbiAgICogQHBhcmFtIHtib29sZWFufSByZXBsYWNlIElmIHRydWUsIHJlcGxhY2VzIGZpbGUgd2l0aCBzYW1lIG5hbWUuIElmIGZhbHNlIHJldHVybnMgZXJyb3JcbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZUVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIEZpbGVFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgY3JlYXRlRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4pOiBQcm9taXNlPEZpbGVFbnRyeT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnM6IEZsYWdzID0ge1xuICAgICAgY3JlYXRlOiB0cnVlLFxuICAgIH07XG5cbiAgICBpZiAoIXJlcGxhY2UpIHtcbiAgICAgIG9wdGlvbnMuZXhjbHVzaXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpLnRoZW4oZnNlID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIGZpbGUgZnJvbSBhIGRlc2lyZWQgbG9jYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byByZW1vdmVcbiAgICogQHJldHVybnMge1Byb21pc2U8UmVtb3ZlUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIFJlbW92ZVJlc3VsdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVtb3ZlRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcbiAgICAgIC50aGVuKGZzZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGZlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGZlKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlIGEgbmV3IGZpbGUgdG8gdGhlIGRlc2lyZWQgbG9jYXRpb24uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgcGF0aCByZWxhdGl2ZSB0byBiYXNlIHBhdGhcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXJ9IHRleHQgY29udGVudCwgYmxvYiBvciBBcnJheUJ1ZmZlciB0byB3cml0ZVxuICAgKiBAcGFyYW0ge0lXcml0ZU9wdGlvbnN9IHdoZXRoZXIgdG8gcmVwbGFjZS9hcHBlbmQgdG8gYW4gZXhpc3RpbmcgZmlsZS4gU2VlIElXcml0ZU9wdGlvbnMgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdXBkYXRlZCBmaWxlIGVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICB3cml0ZUZpbGUoXG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXG4gICAgdGV4dDogc3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyLFxuICAgIG9wdGlvbnM6IElXcml0ZU9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcbiAgICB9XG5cbiAgICBjb25zdCBnZXRGaWxlT3B0czogRmxhZ3MgPSB7XG4gICAgICBjcmVhdGU6ICFvcHRpb25zLmFwcGVuZCxcbiAgICAgIGV4Y2x1c2l2ZTogIW9wdGlvbnMucmVwbGFjZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oKGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGRpcmVjdG9yeUVudHJ5LCBmaWxlTmFtZSwgZ2V0RmlsZU9wdHMpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChmaWxlRW50cnk6IEZpbGVFbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy53cml0ZUZpbGVFbnRyeShmaWxlRW50cnksIHRleHQsIG9wdGlvbnMpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogV3JpdGUgY29udGVudCB0byBGaWxlRW50cnkuXG4gICAqIEBoaWRkZW5cbiAgICogV3JpdGUgdG8gYW4gZXhpc3RpbmcgZmlsZS5cbiAgICogQHBhcmFtIHtGaWxlRW50cnl9IGZlIGZpbGUgZW50cnkgb2JqZWN0XG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyfSB0ZXh0IHRleHQgY29udGVudCBvciBibG9iIHRvIHdyaXRlXG4gICAqIEBwYXJhbSB7SVdyaXRlT3B0aW9uc30gb3B0aW9ucyByZXBsYWNlIGZpbGUgaWYgc2V0IHRvIHRydWUuIFNlZSBXcml0ZU9wdGlvbnMgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59ICBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHVwZGF0ZWQgZmlsZSBlbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBwcml2YXRlIHdyaXRlRmlsZUVudHJ5KGZlOiBGaWxlRW50cnksIHRleHQ6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlciwgb3B0aW9uczogSVdyaXRlT3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZVdyaXRlcihmZSlcbiAgICAgIC50aGVuKHdyaXRlciA9PiB7XG4gICAgICAgIGlmIChvcHRpb25zLmFwcGVuZCkge1xuICAgICAgICAgIHdyaXRlci5zZWVrKHdyaXRlci5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudHJ1bmNhdGUpIHtcbiAgICAgICAgICB3cml0ZXIudHJ1bmNhdGUob3B0aW9ucy50cnVuY2F0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZSh3cml0ZXIsIHRleHQpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKCgpID0+IGZlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZSB0byBhbiBleGlzdGluZyBmaWxlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIHBhdGggcmVsYXRpdmUgdG8gYmFzZSBwYXRoXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYn0gdGV4dCBjb250ZW50IG9yIGJsb2IgdG8gd3JpdGVcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHdyaXRlRXhpc3RpbmdGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nIHwgQmxvYik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLndyaXRlRmlsZShwYXRoLCBmaWxlTmFtZSwgdGV4dCwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgdGhlIGNvbnRlbnRzIG9mIGEgZmlsZSBhcyB0ZXh0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIHN0cmluZyBvciByZWplY3RzIHdpdGhcbiAgICogICBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZWFkQXNUZXh0KHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxzdHJpbmc+KHBhdGgsIGZpbGUsICdUZXh0Jyk7XG4gIH1cblxuICAvKipcbiAgICogUmVhZCBmaWxlIGFuZCByZXR1cm4gZGF0YSBhcyBhIGJhc2U2NCBlbmNvZGVkIGRhdGEgdXJsLlxuICAgKiBBIGRhdGEgdXJsIGlzIG9mIHRoZSBmb3JtOlxuICAgKiAgICAgIGRhdGE6IFs8bWVkaWF0eXBlPl1bO2Jhc2U2NF0sPGRhdGE+XG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgZGF0YSBVUkwgb3IgcmVqZWN0c1xuICAgKiAgIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVhZEFzRGF0YVVSTChwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8c3RyaW5nPihwYXRoLCBmaWxlLCAnRGF0YVVSTCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlYWQgZmlsZSBhbmQgcmV0dXJuIGRhdGEgYXMgYSBiaW5hcnkgZGF0YS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBzdHJpbmcgcmVqZWN0cyB3aXRoIGFuXG4gICAqICAgZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVhZEFzQmluYXJ5U3RyaW5nKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxzdHJpbmc+KHBhdGgsIGZpbGUsICdCaW5hcnlTdHJpbmcnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWFkIGZpbGUgYW5kIHJldHVybiBkYXRhIGFzIGFuIEFycmF5QnVmZmVyLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcnJheUJ1ZmZlcj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgQXJyYXlCdWZmZXIgb3JcbiAgICogICByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVhZEFzQXJyYXlCdWZmZXIocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8QXJyYXlCdWZmZXI+KHBhdGgsIGZpbGUsICdBcnJheUJ1ZmZlcicpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgYSBmaWxlIHRvIGEgZ2l2ZW4gcGF0aC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gbW92ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdGaWxlTmFtZSBOZXcgbmFtZSBvZiBmaWxlIHRvIG1vdmUgdG8gKGxlYXZlIGJsYW5rIHRvIHJlbWFpbiB0aGUgc2FtZSlcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIG1vdmVGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdGaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xuICAgIG5ld0ZpbGVOYW1lID0gbmV3RmlsZU5hbWUgfHwgZmlsZU5hbWU7XG5cbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RmlsZU5hbWUpKSB7XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZSBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXG4gICAgICAudGhlbihmc2UgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0pXG4gICAgICAudGhlbihzcmNmZSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbihkZXN0ZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubW92ZShzcmNmZSwgZGVzdGUsIG5ld0ZpbGVOYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3B5IGEgZmlsZSBpbiB2YXJpb3VzIG1ldGhvZHMuIElmIGZpbGUgZXhpc3RzLCB3aWxsIGZhaWwgdG8gY29weS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTmFtZSBOYW1lIG9mIGZpbGUgdG8gY29weVxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdGaWxlTmFtZSBOZXcgbmFtZSBvZiBmaWxlIHRvIGNvcHkgdG8gKGxlYXZlIGJsYW5rIHRvIHJlbWFpbiB0aGUgc2FtZSlcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIEVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBjb3B5RmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcbiAgICBuZXdGaWxlTmFtZSA9IG5ld0ZpbGVOYW1lIHx8IGZpbGVOYW1lO1xuXG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0ZpbGVOYW1lKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUgbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oZnNlID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oc3JjZmUgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oZGVzdGUgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLmNvcHkoc3JjZmUsIGRlc3RlLCBuZXdGaWxlTmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSBmaWxsRXJyb3JNZXNzYWdlKGVycjogRmlsZUVycm9yKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGVyci5tZXNzYWdlID0gdGhpcy5jb3Jkb3ZhRmlsZUVycm9yW2Vyci5jb2RlXTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIGEgbG9jYWwgZmlsZSBzeXN0ZW0gVVJMXG4gICAqIEBwYXJhbSBmaWxlVXJsIHtzdHJpbmd9IGZpbGUgc3lzdGVtIHVybFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcmVzb2x2ZUxvY2FsRmlsZXN5c3RlbVVybChmaWxlVXJsOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8RW50cnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvdy5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKFxuICAgICAgICAgIGZpbGVVcmwsXG4gICAgICAgICAgKGVudHJ5OiBFbnRyeSkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShlbnRyeSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoICh4Yykge1xuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xuICAgICAgICByZWplY3QoeGMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIGEgbG9jYWwgZGlyZWN0b3J5IHVybFxuICAgKiBAcGFyYW0gZGlyZWN0b3J5VXJsIHtzdHJpbmd9IGRpcmVjdG9yeSBzeXN0ZW0gdXJsXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICByZXNvbHZlRGlyZWN0b3J5VXJsKGRpcmVjdG9yeVVybDogc3RyaW5nKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4ge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVMb2NhbEZpbGVzeXN0ZW1VcmwoZGlyZWN0b3J5VXJsKS50aGVuKGRlID0+IHtcbiAgICAgIGlmIChkZS5pc0RpcmVjdG9yeSkge1xuICAgICAgICByZXR1cm4gZGUgYXMgRGlyZWN0b3J5RW50cnk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDEzKTtcbiAgICAgICAgZXJyLm1lc3NhZ2UgPSAnaW5wdXQgaXMgbm90IGEgZGlyZWN0b3J5JztcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PERpcmVjdG9yeUVudHJ5PihlcnIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGRpcmVjdG9yeVxuICAgKiBAcGFyYW0gZGlyZWN0b3J5RW50cnkge0RpcmVjdG9yeUVudHJ5fSBEaXJlY3RvcnkgZW50cnksIG9idGFpbmVkIGJ5IHJlc29sdmVEaXJlY3RvcnlVcmwgbWV0aG9kXG4gICAqIEBwYXJhbSBkaXJlY3RvcnlOYW1lIHtzdHJpbmd9IERpcmVjdG9yeSBuYW1lXG4gICAqIEBwYXJhbSBmbGFncyB7RmxhZ3N9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnk+fVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGdldERpcmVjdG9yeShkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnksIGRpcmVjdG9yeU5hbWU6IHN0cmluZywgZmxhZ3M6IEZsYWdzKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGlyZWN0b3J5RW50cnkuZ2V0RGlyZWN0b3J5KFxuICAgICAgICAgIGRpcmVjdG9yeU5hbWUsXG4gICAgICAgICAgZmxhZ3MsXG4gICAgICAgICAgZGUgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShkZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoICh4Yykge1xuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xuICAgICAgICByZWplY3QoeGMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhIGZpbGVcbiAgICogQHBhcmFtIGRpcmVjdG9yeUVudHJ5IHtEaXJlY3RvcnlFbnRyeX0gRGlyZWN0b3J5IGVudHJ5LCBvYnRhaW5lZCBieSByZXNvbHZlRGlyZWN0b3J5VXJsIG1ldGhvZFxuICAgKiBAcGFyYW0gZmlsZU5hbWUge3N0cmluZ30gRmlsZSBuYW1lXG4gICAqIEBwYXJhbSBmbGFncyB7RmxhZ3N9IE9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZUVudHJ5Pn1cbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBnZXRGaWxlKGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSwgZmlsZU5hbWU6IHN0cmluZywgZmxhZ3M6IEZsYWdzKTogUHJvbWlzZTxGaWxlRW50cnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmlsZUVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBkaXJlY3RvcnlFbnRyeS5nZXRGaWxlKGZpbGVOYW1lLCBmbGFncywgcmVzb2x2ZSwgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoICh4Yykge1xuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xuICAgICAgICByZWplY3QoeGMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkRmlsZTxUPihcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZmlsZTogc3RyaW5nLFxuICAgIHJlYWRBczogJ0FycmF5QnVmZmVyJyB8ICdCaW5hcnlTdHJpbmcnIHwgJ0RhdGFVUkwnIHwgJ1RleHQnXG4gICk6IFByb21pc2U8VD4ge1xuICAgIGlmICgvXlxcLy8udGVzdChmaWxlKSkge1xuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUtbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxuICAgICAgLnRoZW4oKGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGRpcmVjdG9yeUVudHJ5LCBmaWxlLCB7IGNyZWF0ZTogZmFsc2UgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGZpbGVFbnRyeTogRmlsZUVudHJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJldHVybiBnZXRQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlYWRlci5yZXN1bHQgIT09IHVuZGVmaW5lZCB8fCByZWFkZXIucmVzdWx0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBhbnkgYXMgVCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlYWRlci5lcnJvciAhPT0gdW5kZWZpbmVkIHx8IHJlYWRlci5lcnJvciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlamVjdCh7IGNvZGU6IG51bGwsIG1lc3NhZ2U6ICdSRUFERVJfT05MT0FERU5EX0VSUicgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGZpbGVFbnRyeS5maWxlKFxuICAgICAgICAgICAgZmlsZSA9PiB7XG4gICAgICAgICAgICAgIHJlYWRlcltgcmVhZEFzJHtyZWFkQXN9YF0uY2FsbChyZWFkZXIsIGZpbGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgcmVtb3ZlKGZlOiBFbnRyeSk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbW92ZVJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmUucmVtb3ZlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7IHN1Y2Nlc3M6IHRydWUsIGZpbGVSZW1vdmVkOiBmZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIG1vdmUoc3JjZTogRW50cnksIGRlc3RkaXI6IERpcmVjdG9yeUVudHJ5LCBuZXdOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzcmNlLm1vdmVUbyhcbiAgICAgICAgZGVzdGRpcixcbiAgICAgICAgbmV3TmFtZSxcbiAgICAgICAgZGVzdGUgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGVzdGUpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgY29weShzcmNlOiBFbnRyeSwgZGVzdGRpcjogRGlyZWN0b3J5RW50cnksIG5ld05hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RW50cnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHNyY2UuY29weVRvKFxuICAgICAgICBkZXN0ZGlyLFxuICAgICAgICBuZXdOYW1lLFxuICAgICAgICBkZXN0ZSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShkZXN0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgcHJpdmF0ZSByZWFkRW50cmllcyhkcjogRGlyZWN0b3J5UmVhZGVyKTogUHJvbWlzZTxFbnRyeVtdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGRyLnJlYWRFbnRyaWVzKFxuICAgICAgICBlbnRyaWVzID0+IHtcbiAgICAgICAgICByZXNvbHZlKGVudHJpZXMpO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgcmltcmFmKGRlOiBEaXJlY3RvcnlFbnRyeSk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbW92ZVJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZGUucmVtb3ZlUmVjdXJzaXZlbHkoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSwgZmlsZVJlbW92ZWQ6IGRlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlV3JpdGVyKGZlOiBGaWxlRW50cnkpOiBQcm9taXNlPEZpbGVXcml0ZXI+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmlsZVdyaXRlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZmUuY3JlYXRlV3JpdGVyKFxuICAgICAgICB3cml0ZXIgPT4ge1xuICAgICAgICAgIHJlc29sdmUod3JpdGVyKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyID0+IHtcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHdyaXRlKHdyaXRlcjogRmlsZVdyaXRlciwgZ3U6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcik6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGd1IGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlSW5DaHVua3Mod3JpdGVyLCBndSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgd3JpdGVyLm9ud3JpdGVlbmQgPSBldnQgPT4ge1xuICAgICAgICBpZiAod3JpdGVyLmVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KHdyaXRlci5lcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZShldnQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgd3JpdGVyLndyaXRlKGd1KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBwcml2YXRlIHdyaXRlRmlsZUluQ2h1bmtzKHdyaXRlcjogRmlsZVdyaXRlciwgZmlsZTogQmxvYikge1xuICAgIGNvbnN0IEJMT0NLX1NJWkUgPSAxMDI0ICogMTAyNDtcbiAgICBsZXQgd3JpdHRlblNpemUgPSAwO1xuXG4gICAgZnVuY3Rpb24gd3JpdGVOZXh0Q2h1bmsoKSB7XG4gICAgICBjb25zdCBzaXplID0gTWF0aC5taW4oQkxPQ0tfU0laRSwgZmlsZS5zaXplIC0gd3JpdHRlblNpemUpO1xuICAgICAgY29uc3QgY2h1bmsgPSBmaWxlLnNsaWNlKHdyaXR0ZW5TaXplLCB3cml0dGVuU2l6ZSArIHNpemUpO1xuXG4gICAgICB3cml0dGVuU2l6ZSArPSBzaXplO1xuICAgICAgd3JpdGVyLndyaXRlKGNodW5rKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHdyaXRlci5vbmVycm9yID0gcmVqZWN0IGFzIChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcbiAgICAgIHdyaXRlci5vbndyaXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAod3JpdHRlblNpemUgPCBmaWxlLnNpemUpIHtcbiAgICAgICAgICB3cml0ZU5leHRDaHVuaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHdyaXRlTmV4dENodW5rKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ 73661:
/*!********************************************************************!*\
  !*** ./node_modules/@ionic-native/media/__ivy_ngcc__/ngx/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MediaObject": () => (/* binding */ MediaObject),
/* harmony export */   "MEDIA_STATUS": () => (/* binding */ MEDIA_STATUS),
/* harmony export */   "MEDIA_ERROR": () => (/* binding */ MEDIA_ERROR),
/* harmony export */   "Media": () => (/* binding */ Media)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 60399);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 69165);





var MediaObject = /** @class */ (function () {
    function MediaObject(_objectInstance) {
        var _this = this;
        this._objectInstance = _objectInstance;
        this.onSuccess = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
            _this.successCallback = observer.next.bind(observer);
            return function () { return (_this.successCallback = function () { }); };
        });
        this.onError = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
            _this.errorCallback = observer.next.bind(observer);
            return function () { return (_this.errorCallback = function () { }); };
        });
        this.onStatusUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
            _this.statusCallback = observer.next.bind(observer);
            return function () { return (_this.statusCallback = function () { }); };
        });
    }
    MediaObject.prototype.getCurrentAmplitude = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getCurrentAmplitude", {}, arguments); };
    MediaObject.prototype.getCurrentPosition = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getCurrentPosition", {}, arguments); };
    MediaObject.prototype.getDuration = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "getDuration", { "sync": true }, arguments); };
    MediaObject.prototype.play = function (iosOptions) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "play", { "sync": true }, arguments); };
    MediaObject.prototype.pause = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "pause", { "sync": true }, arguments); };
    MediaObject.prototype.release = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "release", { "sync": true }, arguments); };
    MediaObject.prototype.seekTo = function (milliseconds) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "seekTo", { "sync": true }, arguments); };
    MediaObject.prototype.setVolume = function (volume) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setVolume", { "sync": true }, arguments); };
    MediaObject.prototype.setRate = function (speedRate) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "setRate", { "sync": true }, arguments); };
    MediaObject.prototype.startRecord = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "startRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stopRecord = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "stopRecord", { "sync": true }, arguments); };
    MediaObject.prototype.pauseRecord = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "pauseRecord", { "sync": true }, arguments); };
    MediaObject.prototype.resumeRecord = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "resumeRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stop = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaInstance)(this, "stop", { "sync": true }, arguments); };
    Object.defineProperty(MediaObject.prototype, "successCallback", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "successCallback"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "successCallback", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "errorCallback", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "errorCallback"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "errorCallback", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "statusCallback", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertyGet)(this, "statusCallback"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.instancePropertySet)(this, "statusCallback", value); },
        enumerable: false,
        configurable: true
    });
    return MediaObject;
}());

var MEDIA_STATUS;
(function (MEDIA_STATUS) {
    MEDIA_STATUS[MEDIA_STATUS["NONE"] = 0] = "NONE";
    MEDIA_STATUS[MEDIA_STATUS["STARTING"] = 1] = "STARTING";
    MEDIA_STATUS[MEDIA_STATUS["RUNNING"] = 2] = "RUNNING";
    MEDIA_STATUS[MEDIA_STATUS["PAUSED"] = 3] = "PAUSED";
    MEDIA_STATUS[MEDIA_STATUS["STOPPED"] = 4] = "STOPPED";
})(MEDIA_STATUS || (MEDIA_STATUS = {}));
var MEDIA_ERROR;
(function (MEDIA_ERROR) {
    MEDIA_ERROR[MEDIA_ERROR["ABORTED"] = 1] = "ABORTED";
    MEDIA_ERROR[MEDIA_ERROR["NETWORK"] = 2] = "NETWORK";
    MEDIA_ERROR[MEDIA_ERROR["DECODE"] = 3] = "DECODE";
    MEDIA_ERROR[MEDIA_ERROR["SUPPORTED"] = 4] = "SUPPORTED";
})(MEDIA_ERROR || (MEDIA_ERROR = {}));
var Media = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Media, _super);
    function Media() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Constants
        /**
         * @hidden
         */
        _this.MEDIA_NONE = 0;
        /**
         * @hidden
         */
        _this.MEDIA_STARTING = 1;
        /**
         * @hidden
         */
        _this.MEDIA_RUNNING = 2;
        /**
         * @hidden
         */
        _this.MEDIA_PAUSED = 3;
        /**
         * @hidden
         */
        _this.MEDIA_STOPPED = 4;
        // error codes
        /**
         * @hidden
         */
        _this.MEDIA_ERR_ABORTED = 1;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NETWORK = 2;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_DECODE = 3;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NONE_SUPPORTED = 4;
        return _this;
    }
    /**
     * Open a media file
     * @param src {string} A URI containing the audio content.
     * @return {MediaObject}
     */
    Media.prototype.create = function (src) {
        var instance;
        if ((0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(Media.getPluginRef(), null, Media.getPluginName()) === true) {
            // Creates a new media object
            instance = new (Media.getPlugin())(src);
        }
        return new MediaObject(instance);
    };
    Media.pluginName = "Media";
    Media.repo = "https://github.com/apache/cordova-plugin-media";
    Media.plugin = "cordova-plugin-media";
    Media.pluginRef = "Media";
    Media.platforms = ["Android", "Browser", "iOS", "Windows"];
Media.ɵfac = /*@__PURE__*/ function () { var ɵMedia_BaseFactory; return function Media_Factory(t) { return (ɵMedia_BaseFactory || (ɵMedia_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](Media)))(t || Media); }; }();
Media.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: Media, factory: function (t) { return Media.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](Media, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable
    }], null, null); })();
    return Media;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvbWVkaWEvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sZ0ZBQWdFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckgsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7QUFDNUM7QUFLQSxJQThCRSxxQkFBb0IsZUFBb0I7QUFDMUMsUUFERSxpQkFlQztBQUNILFFBaEJzQixvQkFBZSxHQUFmLGVBQWUsQ0FBSztBQUFDLFFBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxVQUFVLENBQU0sVUFBQyxRQUF1QjtBQUFJLFlBQy9ELEtBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUQsWUFBTSxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBakMsQ0FBaUMsQ0FBQztBQUNyRCxRQUFJLENBQUMsQ0FBQyxDQUFDO0FBQ1AsUUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksVUFBVSxDQUFjLFVBQUMsUUFBK0I7QUFBSSxZQUM3RSxLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3hELFlBQU0sT0FBTyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsYUFBYSxHQUFHLGNBQU8sQ0FBQyxDQUFDLEVBQS9CLENBQStCLENBQUM7QUFDbkQsUUFBSSxDQUFDLENBQUMsQ0FBQztBQUNQLFFBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFVBQVUsQ0FBZSxVQUFDLFFBQWdDO0FBQUksWUFDdEYsS0FBSSxDQUFDLGNB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QUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzlDLFNBQUs7QUFDTCxRQUNJLE9BQU8sSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDckMsSUFBRSxDQUFDO0FBQ0Y7QUFDOEI7QUFBbUU7QUFBMkM7QUFBK0I7eUNBMUQzSyxVQUFVOzs7OzBCQUNMO0FBQUMsZ0JBN1JQO0FBQUUsRUE2UnlCLGlCQUFpQjtBQUMzQyxTQURZLEtBQUs7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiwgY2hlY2tBdmFpbGFiaWxpdHkgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBNZWRpYU9iamVjdCB7XG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IG9uIGFjdGlvbnMgc3VjY2Vzc1xuICAgKi9cbiAgb25TdWNjZXNzOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiBhbiBlcnJvciBvY2N1cnNcbiAgICovXG4gIG9uRXJyb3I6IE9ic2VydmFibGU8TUVESUFfRVJST1I+O1xuXG4gIC8qKlxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGZpbGUgc3RhdHVzIGNoYW5nZXNcbiAgICovXG4gIG9uU3RhdHVzVXBkYXRlOiBPYnNlcnZhYmxlPE1FRElBX1NUQVRVUz47XG5cbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgc3VjY2Vzc0NhbGxiYWNrOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBlcnJvckNhbGxiYWNrOiBGdW5jdGlvbjtcblxuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBzdGF0dXNDYWxsYmFjazogRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHRoaXMub25TdWNjZXNzID0gbmV3IE9ic2VydmFibGU8YW55Pigob2JzZXJ2ZXI6IE9ic2VydmVyPGFueT4pID0+IHtcbiAgICAgIHRoaXMuc3VjY2Vzc0NhbGxiYWNrID0gb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKTtcbiAgICAgIHJldHVybiAoKSA9PiAodGhpcy5zdWNjZXNzQ2FsbGJhY2sgPSAoKSA9PiB7fSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uRXJyb3IgPSBuZXcgT2JzZXJ2YWJsZTxNRURJQV9FUlJPUj4oKG9ic2VydmVyOiBPYnNlcnZlcjxNRURJQV9FUlJPUj4pID0+IHtcbiAgICAgIHRoaXMuZXJyb3JDYWxsYmFjayA9IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcik7XG4gICAgICByZXR1cm4gKCkgPT4gKHRoaXMuZXJyb3JDYWxsYmFjayA9ICgpID0+IHt9KTtcbiAgICB9KTtcblxuICAgIHRoaXMub25TdGF0dXNVcGRhdGUgPSBuZXcgT2JzZXJ2YWJsZTxNRURJQV9TVEFUVVM+KChvYnNlcnZlcjogT2JzZXJ2ZXI8TUVESUFfU1RBVFVTPikgPT4ge1xuICAgICAgdGhpcy5zdGF0dXNDYWxsYmFjayA9IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcik7XG4gICAgICByZXR1cm4gKCkgPT4gKHRoaXMuc3RhdHVzQ2FsbGJhY2sgPSAoKSA9PiB7fSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGFtcGxpdHVkZSBvZiB0aGUgY3VycmVudCByZWNvcmRpbmcuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIGFtcGxpdHVkZSBvZiB0aGUgY3VycmVudCByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBnZXRDdXJyZW50QW1wbGl0dWRlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBwb3NpdGlvbiB3aXRoaW4gYW4gYXVkaW8gZmlsZS4gQWxzbyB1cGRhdGVzIHRoZSBNZWRpYSBvYmplY3QncyBwb3NpdGlvbiBwYXJhbWV0ZXIuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGdldEN1cnJlbnRQb3NpdGlvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGR1cmF0aW9uIG9mIGFuIGF1ZGlvIGZpbGUgaW4gc2Vjb25kcy4gSWYgdGhlIGR1cmF0aW9uIGlzIHVua25vd24sIGl0IHJldHVybnMgYSB2YWx1ZSBvZiAtMS5cbiAgICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgZHVyYXRpb24gb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXREdXJhdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdGFydHMgb3IgcmVzdW1lcyBwbGF5aW5nIGFuIGF1ZGlvIGZpbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5KGlvc09wdGlvbnM/OiB7IG51bWJlck9mTG9vcHM/OiBudW1iZXI7IHBsYXlBdWRpb1doZW5TY3JlZW5Jc0xvY2tlZD86IGJvb2xlYW4gfSk6IHZvaWQge31cblxuICAvKipcbiAgICogUGF1c2VzIHBsYXlpbmcgYW4gYXVkaW8gZmlsZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHBhdXNlKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVsZWFzZXMgdGhlIHVuZGVybHlpbmcgb3BlcmF0aW5nIHN5c3RlbSdzIGF1ZGlvIHJlc291cmNlcy4gVGhpcyBpcyBwYXJ0aWN1bGFybHkgaW1wb3J0YW50IGZvciBBbmRyb2lkLCBzaW5jZSB0aGVyZSBhcmUgYSBmaW5pdGUgYW1vdW50IG9mIE9wZW5Db3JlIGluc3RhbmNlcyBmb3IgbWVkaWEgcGxheWJhY2suIEFwcGxpY2F0aW9ucyBzaG91bGQgY2FsbCB0aGUgcmVsZWFzZSBmdW5jdGlvbiBmb3IgYW55IE1lZGlhIHJlc291cmNlIHRoYXQgaXMgbm8gbG9uZ2VyIG5lZWRlZC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbGVhc2UoKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBjdXJyZW50IHBvc2l0aW9uIHdpdGhpbiBhbiBhdWRpbyBmaWxlLlxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIFRoZSB0aW1lIHBvc2l0aW9uIHlvdSB3YW50IHRvIHNldCBmb3IgdGhlIGN1cnJlbnQgYXVkaW8gZmlsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2Vla1RvKG1pbGxpc2Vjb25kczogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHZvbHVtZSBmb3IgYW4gYXVkaW8gZmlsZS5cbiAgICogQHBhcmFtIHZvbHVtZSB7bnVtYmVyfSBUaGUgdm9sdW1lIHRvIHNldCBmb3IgcGxheWJhY2suIFRoZSB2YWx1ZSBtdXN0IGJlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMC4wIHRvIDEuMC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZvbHVtZSh2b2x1bWU6IG51bWJlcik6IHZvaWQge31cblxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRSYXRlKHNwZWVkUmF0ZTogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTdGFydHMgcmVjb3JkaW5nIGFuIGF1ZGlvIGZpbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzdGFydFJlY29yZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHJlY29yZGluZ1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc3RvcFJlY29yZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFBhdXNlcyByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHBhdXNlUmVjb3JkKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUmVzdW1lcyByZWNvcmRpbmdcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHJlc3VtZVJlY29yZCgpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFN0b3BzIHBsYXlpbmcgYW4gYXVkaW8gZmlsZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHN0b3AoKTogdm9pZCB7fVxufVxuXG5leHBvcnQgdHlwZSBNZWRpYVN0YXR1c1VwZGF0ZUNhbGxiYWNrID0gKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gdm9pZDtcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYUVycm9yIHtcbiAgLyoqXG4gICAqIEVycm9yIG1lc3NhZ2VcbiAgICovXG4gIG1lc3NhZ2U6IHN0cmluZztcblxuICAvKipcbiAgICogRXJyb3IgY29kZVxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBNRURJQV9TVEFUVVMge1xuICBOT05FID0gMCxcbiAgU1RBUlRJTkcsXG4gIFJVTk5JTkcsXG4gIFBBVVNFRCxcbiAgU1RPUFBFRCxcbn1cblxuZXhwb3J0IGVudW0gTUVESUFfRVJST1Ige1xuICBBQk9SVEVEID0gMSxcbiAgTkVUV09SSyxcbiAgREVDT0RFLFxuICBTVVBQT1JURUQsXG59XG5cbmV4cG9ydCB0eXBlIE1lZGlhRXJyb3JDYWxsYmFjayA9IChlcnJvcjogTWVkaWFFcnJvcikgPT4gdm9pZDtcblxuLyoqXG4gKiBAbmFtZSBNZWRpYVxuICogQHByZW1pZXIgbWVkaWFcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gcHJvdmlkZXMgdGhlIGFiaWxpdHkgdG8gcmVjb3JkIGFuZCBwbGF5IGJhY2sgYXVkaW8gZmlsZXMgb24gYSBkZXZpY2UuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBNZWRpYSwgTWVkaWFPYmplY3QgfSBmcm9tICdAaW9uaWMtbmF0aXZlL21lZGlhL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVkaWE6IE1lZGlhKSB7IH1cbiAqXG4gKlxuICogLi4uXG4gKlxuICpcbiAqIC8vIENyZWF0ZSBhIE1lZGlhIGluc3RhbmNlLiAgRXhwZWN0cyBwYXRoIHRvIGZpbGUgb3IgdXJsIGFzIGFyZ3VtZW50XG4gKiAvLyBXZSBjYW4gb3B0aW9uYWxseSBwYXNzIGEgc2Vjb25kIGFyZ3VtZW50IHRvIHRyYWNrIHRoZSBzdGF0dXMgb2YgdGhlIG1lZGlhXG4gKlxuICogY29uc3QgZmlsZTogTWVkaWFPYmplY3QgPSB0aGlzLm1lZGlhLmNyZWF0ZSgnZmlsZS5tcDMnKTtcbiAqXG4gKiAvLyB0byBsaXN0ZW4gdG8gcGx1Z2luIGV2ZW50czpcbiAqXG4gKiBmaWxlLm9uU3RhdHVzVXBkYXRlLnN1YnNjcmliZShzdGF0dXMgPT4gY29uc29sZS5sb2coc3RhdHVzKSk7IC8vIGZpcmVzIHdoZW4gZmlsZSBzdGF0dXMgY2hhbmdlc1xuICpcbiAqIGZpbGUub25TdWNjZXNzLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZygnQWN0aW9uIGlzIHN1Y2Nlc3NmdWwnKSk7XG4gKlxuICogZmlsZS5vbkVycm9yLnN1YnNjcmliZShlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3IhJywgZXJyb3IpKTtcbiAqXG4gKiAvLyBwbGF5IHRoZSBmaWxlXG4gKiBmaWxlLnBsYXkoKTtcbiAqXG4gKiAvLyBwYXVzZSB0aGUgZmlsZVxuICogZmlsZS5wYXVzZSgpO1xuICpcbiAqIC8vIGdldCBjdXJyZW50IHBsYXliYWNrIHBvc2l0aW9uXG4gKiBmaWxlLmdldEN1cnJlbnRQb3NpdGlvbigpLnRoZW4oKHBvc2l0aW9uKSA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTtcbiAqIH0pO1xuICpcbiAqIC8vIGdldCBmaWxlIGR1cmF0aW9uXG4gKiBsZXQgZHVyYXRpb24gPSBmaWxlLmdldER1cmF0aW9uKCk7XG4gKiBjb25zb2xlLmxvZyhkdXJhdGlvbik7XG4gKlxuICogLy8gc2tpcCB0byAxMCBzZWNvbmRzIChleHBlY3RzIGludCB2YWx1ZSBpbiBtcylcbiAqIGZpbGUuc2Vla1RvKDEwMDAwKTtcbiAqXG4gKiAvLyBzdG9wIHBsYXlpbmcgdGhlIGZpbGVcbiAqIGZpbGUuc3RvcCgpO1xuICpcbiAqIC8vIHJlbGVhc2UgdGhlIG5hdGl2ZSBhdWRpbyByZXNvdXJjZVxuICogLy8gUGxhdGZvcm0gUXVpcmtzOlxuICogLy8gaU9TIHNpbXBseSBjcmVhdGUgYSBuZXcgaW5zdGFuY2UgYW5kIHRoZSBvbGQgb25lIHdpbGwgYmUgb3ZlcndyaXR0ZW5cbiAqIC8vIEFuZHJvaWQgeW91IG11c3QgY2FsbCByZWxlYXNlKCkgdG8gZGVzdHJveSBpbnN0YW5jZXMgb2YgbWVkaWEgd2hlbiB5b3UgYXJlIGRvbmVcbiAqIGZpbGUucmVsZWFzZSgpO1xuICpcbiAqXG4gKlxuICogLy8gUmVjb3JkaW5nIHRvIGEgZmlsZVxuICogY29uc3QgZmlsZTogTWVkaWFPYmplY3QgPSB0aGlzLm1lZGlhLmNyZWF0ZSgncGF0aC90by9maWxlLm1wMycpO1xuICpcbiAqIGZpbGUuc3RhcnRSZWNvcmQoKTtcbiAqXG4gKiBmaWxlLnN0b3BSZWNvcmQoKTtcbiAqXG4gKlxuICogYGBgXG4gKlxuICogU29tZSBoaW50cyBpZiB5b3UgYXJlIHVzaW5nIGlPUyBhbmQgcmVjb3JkaW5nIGRvZXNuJ3Qgd29yazpcbiAqIDEuKSBUcnkgdG8gdXNlIGEgYWJzb2x1dGUgZmlsZSBwYXRoIGJ1dCByZW1vdmUgYmVnaW5uaW5nIFwiZmlsZTovL1wiLlxuICogVGhlbiBpdCBsb29rcyBsaWtlOiBgL3Zhci9tb2JpbGUvQ29udGFpbmVycy9EYXRhL0FwcGxpY2F0aW9uL0FGNDM4QjhCLTc3MjQtNEZCQi04RTY5LTA4MzQ2MzIyNEZDNC90bXAvbXlfZmlsZS5tNGFgXG4gKiBFeGFtcGxlOiBgdGhpcy5tZWRpYS5jcmVhdGUodGhpcy5maWxlLnRlbXBEaXJlY3RvcnkucmVwbGFjZSgvXmZpbGU6XFwvXFwvLywgJycpICsgJ215X2ZpbGUubTRhJylgXG4gKiAyLikgSWYgdGhhdCdzIG5vdCB3b3JraW5nLCB0b28sIGNyZWF0ZSB0aGUgZmlsZSBiZWZvcmUgdXNpbmcuXG4gKiBFeGFtcGxlOlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgTWVkaWEsIE1lZGlhT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9tZWRpYS9uZ3gnO1xuICogaW1wb3J0IHsgRmlsZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlsZS9uZ3gnO1xuICpcbiAqIC4uLlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVkaWE6IE1lZGlhLCBwcml2YXRlIGZpbGU6IEZpbGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmlsZS5jcmVhdGVGaWxlKHRoaXMuZmlsZS50ZW1wRGlyZWN0b3J5LCAnbXlfZmlsZS5tNGEnLCB0cnVlKS50aGVuKCgpID0+IHtcbiAqICAgbGV0IGZpbGUgPSB0aGlzLm1lZGlhLmNyZWF0ZSh0aGlzLmZpbGUudGVtcERpcmVjdG9yeS5yZXBsYWNlKC9eZmlsZTpcXC9cXC8vLCAnJykgKyAnbXlfZmlsZS5tNGEnKTtcbiAqICAgZmlsZS5zdGFydFJlY29yZCgpO1xuICogICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBmaWxlLnN0b3BSZWNvcmQoKSwgMTAwMDApO1xuICogfSk7XG4gKiBgYGBcbiAqXG4gKiBZb3UgY2FuIGZpbmQgdGhlIHJlYXNvbnMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtbmF0aXZlL2lzc3Vlcy8xNDUyI2lzc3VlY29tbWVudC0yOTk2MDU5MDZcbiAqIEBjbGFzc2VzXG4gKiBNZWRpYU9iamVjdFxuICogQGludGVyZmFjZXNcbiAqIE1lZGlhRXJyb3JcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNZWRpYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW1lZGlhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEnLFxuICBwbHVnaW5SZWY6ICdNZWRpYScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVkaWEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8vIENvbnN0YW50c1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfTk9ORSA9IDA7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBNRURJQV9TVEFSVElORyA9IDE7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBNRURJQV9SVU5OSU5HID0gMjtcbiAgLyoqXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIE1FRElBX1BBVVNFRCA9IDM7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBNRURJQV9TVE9QUEVEID0gNDtcblxuICAvLyBlcnJvciBjb2Rlc1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfRVJSX0FCT1JURUQgPSAxO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfRVJSX05FVFdPUksgPSAyO1xuICAvKipcbiAgICogQGhpZGRlblxuICAgKi9cbiAgTUVESUFfRVJSX0RFQ09ERSA9IDM7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBNRURJQV9FUlJfTk9ORV9TVVBQT1JURUQgPSA0O1xuXG4gIC8qKlxuICAgKiBPcGVuIGEgbWVkaWEgZmlsZVxuICAgKiBAcGFyYW0gc3JjIHtzdHJpbmd9IEEgVVJJIGNvbnRhaW5pbmcgdGhlIGF1ZGlvIGNvbnRlbnQuXG4gICAqIEByZXR1cm4ge01lZGlhT2JqZWN0fVxuICAgKi9cbiAgY3JlYXRlKHNyYzogc3RyaW5nKTogTWVkaWFPYmplY3Qge1xuICAgIGxldCBpbnN0YW5jZTogYW55O1xuXG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KE1lZGlhLmdldFBsdWdpblJlZigpLCBudWxsLCBNZWRpYS5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICAvLyBDcmVhdGVzIGEgbmV3IG1lZGlhIG9iamVjdFxuICAgICAgaW5zdGFuY2UgPSBuZXcgKE1lZGlhLmdldFBsdWdpbigpKShzcmMpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgTWVkaWFPYmplY3QoaW5zdGFuY2UpO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 17150:
/*!**********************************************************!*\
  !*** ./src/app/layouts/home/reactions/reactions.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReactionsPage": () => (/* binding */ ReactionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reactions_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reactions.page.html */ 13320);
/* harmony import */ var _reactions_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reactions.page.scss */ 90829);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let ReactionsPage = class ReactionsPage {
    constructor(navCtrl, navparams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navparams = navparams;
        this.viewCtrl = viewCtrl;
    }
    ngOnInit() { }
    ionViewDidLoad() {
        console.log('ion Reaction page');
    }
    share() {
        console.log('ion Reaction page');
        this.viewCtrl.dismiss();
    }
};
ReactionsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.PopoverController }
];
ReactionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-reactions',
        template: _raw_loader_reactions_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reactions_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReactionsPage);



/***/ }),

/***/ 64184:
/*!*********************************************************!*\
  !*** ./src/app/layouts/home/status/status.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatusComponent": () => (/* binding */ StatusComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_status_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./status.component.html */ 57758);
/* harmony import */ var _status_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status.component.scss */ 349);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _reactions_reactions_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reactions/reactions.page */ 17150);
/* harmony import */ var _Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../Shared/Service/post.service */ 91820);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 35758);
/* harmony import */ var _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Shared/Model/Comment */ 73070);
/* harmony import */ var _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Shared/Service/comment.service */ 49821);
/* harmony import */ var _component_parametres_parametres_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../component/parametres/parametres.component */ 24162);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/Shared/Service/favoris.service */ 38007);
/* harmony import */ var _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/video-player/ngx */ 524);
/* harmony import */ var _coachprofile_image_profile_image_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../coachprofile/image-profile/image-profile.component */ 6510);
/* harmony import */ var src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/Shared/Service/user.service */ 88838);
/* harmony import */ var _post_display_post_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../post-display/post-display.component */ 97119);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/Service/follower.service */ 93647);
/* harmony import */ var src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/shared/Service/notifications.service */ 43367);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-socket-io */ 75421);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/media/ngx */ 73661);
/* harmony import */ var _awesome_cordova_plugins_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @awesome-cordova-plugins/media-capture/ngx */ 42853);


























let StatusComponent = class StatusComponent {
    constructor(commentService, postService, userervice, favorisService, modalController, loadingController, popoverCtrl, videoPlayer, router, followerService, notificationsService, socket, userService, media, file, mediaCapture, platform) {
        this.commentService = commentService;
        this.postService = postService;
        this.userervice = userervice;
        this.favorisService = favorisService;
        this.modalController = modalController;
        this.loadingController = loadingController;
        this.popoverCtrl = popoverCtrl;
        this.videoPlayer = videoPlayer;
        this.router = router;
        this.followerService = followerService;
        this.notificationsService = notificationsService;
        this.socket = socket;
        this.userService = userService;
        this.media = media;
        this.file = file;
        this.mediaCapture = mediaCapture;
        this.platform = platform;
        this.likeFn = new _angular_core__WEBPACK_IMPORTED_MODULE_18__.EventEmitter();
        this.disLikeFn = new _angular_core__WEBPACK_IMPORTED_MODULE_18__.EventEmitter();
        this.apiImgUser = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiImg}User/`;
        this.apiImg = `${_environments_environment__WEBPACK_IMPORTED_MODULE_7__.environment.apiImg}Post/`;
        this.comment = new _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_4__.Comment();
        this.longPressActive = false;
        this.posts = [];
        this.comments = [];
        this.images = [];
        this.mediafiles = [];
        this.newMediaFiles = [];
        this.secondNewMediaFiles = [];
        this.thirdNewMediaFiles = [];
        this.tempMedia = [];
        this.tap = 0;
        this.press = 0;
        this.liked = false;
        this.bookmarked = false;
        this.showComment = false;
        this.etatSuivre = false;
        this.follower = false;
        this.shared = false;
        this.notif = { reciever: '', userOwner: '', text: '', postId: '' };
        this.options = { limit: 3 };
        window.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            this.status = '';
            this.isRecording = false;
            this.getMe();
            yield this.getCommentByPost();
            this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormGroup({
                contentControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_20__.Validators.required)
            });
        });
    }
    getMe() {
        this.userervice.getMe().subscribe((res) => {
            this.isUserConnected = res.data.data._id;
            this.user$ = res.data.data;
        });
    }
    showComments() {
        this.showComment = true;
    }
    hideComments() {
        this.showComment = false;
    }
    showReactions(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            this.press++;
            const reactions = yield this.popoverCtrl.create({
                component: _reactions_reactions_page__WEBPACK_IMPORTED_MODULE_2__.ReactionsPage,
                event: ev,
            });
            yield reactions.present();
            const { role } = yield reactions.onDidDismiss();
        });
    }
    onTap() {
        this.tap++;
    }
    like(post, event) {
        this.post.iconLike = event.id;
        this.likeFn.emit({ post, index: this.index });
        this.socket.connect();
        this.socket.emit('notifications', { note: 'hey' });
        this.socket.fromEvent('notifications').subscribe((res) => {
            this.notif = { reciever: '', userOwner: '', text: '', postId: '' };
            this.notif.reciever = post.user._id;
            this.notif.userOwner = this.user$._id;
            this.notif.text = "a aimé votre status";
            this.notif.postId = post._id;
            this.createNotif(this.notif);
        });
    }
    disLike(post, event) {
        this.post.iconLike = event.id;
        this.disLikeFn.emit({ post, index: this.index });
    }
    sendComment(post) {
        this.comments = [];
        this.notif = { reciever: '', userOwner: '', text: '', postId: '' };
        this.commentService.addComment(this.comment, post._id).subscribe(res => {
        });
        this.comment = new _Shared_Model_Comment__WEBPACK_IMPORTED_MODULE_4__.Comment();
        this.getCommentByPost();
        this.userService.getMe().subscribe((res) => {
            this.user$ = res.data.data;
            this.notif.reciever = post.user._id;
            this.notif.userOwner = this.user$._id;
            this.notif.text = "a commenté votre status";
            this.notif.postId = post._id;
            this.socket.connect();
            this.socket.emit('notifications', { msg: 'hey' });
            this.socket.fromEvent('notifications').subscribe((res) => {
                this.createNotif(this.notif);
            });
        });
    }
    share(post) {
        this.notif = { reciever: '', userOwner: '', text: '', postId: '' };
        this.shared = true;
        this.notif.reciever = post.user._id;
        this.notif.userOwner = this.user$._id;
        this.notif.text = "a partagé votre status";
        this.notif.postId = post._id;
        this.socket.connect();
        this.socket.emit('notifications', { note: 'hey' });
        this.socket.fromEvent('notifications').subscribe((res) => {
            this.createNotif(this.notif);
        });
        this.favorisService.addShared(post === null || post === void 0 ? void 0 : post._id).subscribe((res) => {
            this.shared = true;
        });
    }
    bookmark(post) {
        this.notif = { reciever: '', userOwner: '', text: '', postId: '' };
        this.notif.reciever = post.user._id;
        this.notif.userOwner = this.user$._id;
        this.notif.text = "a enregistré votre status";
        this.notif.postId = post._id;
        this.socket.connect();
        this.socket.emit('notifications', { note: 'hey' });
        this.socket.fromEvent('notifications').subscribe((res) => {
            this.createNotif(this.notif);
        });
        this.favorisService.addFavoris(post === null || post === void 0 ? void 0 : post._id).subscribe((res) => {
            this.bookmarked = true;
        });
    }
    unBookmark(post) {
        this.favorisService.addFavoris(post === null || post === void 0 ? void 0 : post._id).subscribe((res) => {
            this.bookmarked = false;
        });
    }
    getExt(fileName) {
        const ext = fileName.substr(fileName.lastIndexOf('.') + 1);
        return ext;
    }
    displayImage(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _coachprofile_image_profile_image_profile_component__WEBPACK_IMPORTED_MODULE_10__.ImageProfileComponent,
                cssClass: 'imageModal',
                componentProps: {
                    image: a,
                },
            });
            return yield modal.present();
        });
    }
    displayContent(files) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _post_display_post_display_component__WEBPACK_IMPORTED_MODULE_12__.PostDisplayComponent,
                cssClass: 'imageModal',
                componentProps: {
                    post: files,
                },
            });
            return yield modal.present();
        });
    }
    displayVideo(file) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            const modal = yield this.modalController.create({
                component: _coachprofile_image_profile_image_profile_component__WEBPACK_IMPORTED_MODULE_10__.ImageProfileComponent,
                cssClass: 'imageModal',
                componentProps: {
                    video: file,
                },
            });
            return yield modal.present();
        });
    }
    playvid(url) {
        this.videoPlayer.play(url).then(() => {
        }).catch(err => {
            console.log(err);
        });
    }
    getCommentByPost() {
        var _a, _b, _c;
        (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.forkJoin)({
            comments: this.commentService.getCommentByService(this.post.id),
            images: this.postService.getPost(((_a = this.post.post) === null || _a === void 0 ? void 0 : _a._id) || this.post.id),
            mediafiles: this.postService.getPost(((_b = this.post.post) === null || _b === void 0 ? void 0 : _b._id) || this.post.id),
            tempMedia: this.postService.getPost(((_c = this.post.post) === null || _c === void 0 ? void 0 : _c._id) || this.post.id),
        }).subscribe(({ comments, images, mediafiles }) => {
            this.comments = comments;
            this.images = images.images;
            this.mediafiles = mediafiles.mediafiles;
            this.tempMedia = mediafiles.mediafiles;
            if (this.tempMedia.length < 4) {
                this.newMediaFiles = this.tempMedia.splice(0, 1);
            }
            if (this.tempMedia.length > 3) {
                this.newMediaFiles = this.tempMedia.slice(0, 1);
                this.thirdNewMediaFiles = this.tempMedia.slice(1, 3);
                this.secondNewMediaFiles = this.tempMedia.splice(3, this.mediafiles.length);
            }
        });
    }
    presentPopover(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _component_parametres_parametres_component__WEBPACK_IMPORTED_MODULE_6__.ParametresComponent,
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true,
                componentProps: {
                    post: this.post,
                },
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
            location.reload();
        });
    }
    presentLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                message: 'Hellooo',
                duration: 2000,
                spinner: 'bubbles',
            });
            yield this.loading.present();
        });
    }
    getfollow(iduserpassed) {
        this.userervice.getMe().subscribe((response) => {
            this.iduser1 = response.data.data.id;
            this.followerService.getFollow(iduserpassed, this.iduser1)
                .subscribe((res) => {
                if (res == null) {
                    this.router.navigate(['profil', iduserpassed, 'adulte']);
                }
                else {
                    this.router.navigate(['menu/tabs/layouts/coachprofile', iduserpassed, 'followed']);
                }
            });
        }, (error) => {
            console.error(error);
        });
    }
    createNotif(notif) {
        this.notificationsService.postNotification(notif).subscribe();
    }
    recordAudio() {
        //   this.audioFile = this.media.create(this.file.externalRootDirectory + '/audiofile.mp3');
        //   this.audioFile.startRecord();
        if (this.platform.is('cordova')) {
            let fd = new FormData();
            // You're on a device, call the native plugins. Example:
            this.mediaCapture.captureAudio(this.options)
                .then((data) => {
                //  this.blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
                //fd.append('audio', this.blob);
                this.commentService.recordAudio(this.post._id, data).subscribe(res => {
                    this.isRecording = false;
                });
            }, (err) => console.error(err));
            this.status = 'recording...';
            this.isRecording = true;
        }
        else {
            // You're testing in browser, do nothing or mock the plugins' behaviour.
            console.log('you are not on device');
        }
    }
    stopRecording() {
        //  this.audioFile.stopRecord();
        this.status = 'records stopped';
    }
};
StatusComponent.ctorParameters = () => [
    { type: _Shared_Service_comment_service__WEBPACK_IMPORTED_MODULE_5__.CommentService },
    { type: _Shared_Service_post_service__WEBPACK_IMPORTED_MODULE_3__.PostService },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_11__.UserService },
    { type: src_app_Shared_Service_favoris_service__WEBPACK_IMPORTED_MODULE_8__.FavorisService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.PopoverController },
    { type: _ionic_native_video_player_ngx__WEBPACK_IMPORTED_MODULE_9__.VideoPlayer },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_23__.Router },
    { type: src_app_shared_Service_follower_service__WEBPACK_IMPORTED_MODULE_13__.FollowerService },
    { type: src_app_shared_Service_notifications_service__WEBPACK_IMPORTED_MODULE_14__.NotificationsService },
    { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_24__.Socket },
    { type: src_app_Shared_Service_user_service__WEBPACK_IMPORTED_MODULE_11__.UserService },
    { type: _ionic_native_media_ngx__WEBPACK_IMPORTED_MODULE_16__.Media },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_15__.File },
    { type: _awesome_cordova_plugins_media_capture_ngx__WEBPACK_IMPORTED_MODULE_17__.MediaCapture },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.Platform }
];
StatusComponent.propDecorators = {
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonVirtualScroll,] }],
    post: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Input }],
    index: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Input }],
    user: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Input }],
    likeFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Output }],
    disLikeFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Output }],
    isBookMarked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_18__.Input }]
};
StatusComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_18__.Component)({
        selector: 'app-status',
        template: _raw_loader_status_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_status_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StatusComponent);



/***/ }),

/***/ 90829:
/*!************************************************************!*\
  !*** ./src/app/layouts/home/reactions/reactions.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  padding: 0;\n}\n\nion-button {\n  width: 100%;\n  height: 100%;\n}\n\nimg {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFHSiIsImZpbGUiOiJyZWFjdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMDtcbn1cbmlvbi1idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 349:
/*!***********************************************************!*\
  !*** ./src/app/layouts/home/status/status.component.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".popover-wrapper .popover-content {\n  box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.25);\n}\n\nion-chip {\n  --background: transparent;\n}\n\nion-list {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n}\n\nion-button {\n  padding: 0;\n  --padding-start: 7px;\n  --padding-end: 5px;\n}\n\nion-button img {\n  width: 30px;\n}\n\nion-button img.last {\n  width: 20px;\n}\n\nion-input.commentaire:focus {\n  --highlight-color-focused: none;\n}\n\nion-item.commentaire {\n  --highlight-color-focused: var(--ion-color-light-shade);\n  --inner-padding-end: 0;\n  --background: var(--ion-color-light-tint);\n}\n\nion-button.commentaire {\n  --inner-padding-end: 0;\n}\n\nimg.ng-lazyloaded {\n  animation: fadein 1.5s;\n  width: 100%;\n  height: 100%;\n}\n\n@keyframes fadein {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.container {\n  display: flex;\n}\n\n#first {\n  height: 190px;\n  width: 250px;\n  border-radius: 10px;\n  object-fit: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 1px;\n  margin-left: 20px;\n  margin-right: 5px;\n}\n\n#next {\n  margin: 1px;\n  border-radius: 5px;\n  width: 95px;\n  height: 95px;\n  object-fit: cover;\n}\n\n.nextContainer {\n  display: flex;\n  flex-wrap: wrap;\n  width: auto;\n  height: auto;\n  margin-left: 2px;\n}\n\n.a {\n  background-size: cover;\n  padding: 50px 0;\n}\n\n.iconstyle {\n  height: 30% !important;\n}\n\n.commentaire {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  position: fixed;\n  display: block;\n  width: 97%;\n  margin: 5px;\n  --background: rgba(128, 128, 128, 0.507);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXR1cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsdURBQUE7RUFDQSxzQkFBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFBO0VBQ0Y7RUFFQTtJQUNFLFVBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0UsYUFBQTtBQURGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUFGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFBQTtFQUNFLHNCQUFBO0FBR0Y7O0FBQUE7RUFFRSxTQUFBO0VBQ0UsT0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7QUFFSiIsImZpbGUiOiJzdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9wb3Zlci13cmFwcGVyIC5wb3BvdmVyLWNvbnRlbnQge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDE1cHggMHB4IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuMjUpO1xufVxuXG5pb24tY2hpcCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbmlvbi1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDdweDtcbiAgLS1wYWRkaW5nLWVuZDogNXB4O1xufVxuXG5pb24tYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG5pb24tYnV0dG9uIGltZy5sYXN0IHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbmlvbi1pbnB1dC5jb21tZW50YWlyZTpmb2N1cyB7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IG5vbmU7XG59XG5cbmlvbi1pdGVtLmNvbW1lbnRhaXJlIHtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCk7XG59XG5cbmlvbi1idXR0b24uY29tbWVudGFpcmUge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG5pbWcubmctbGF6eWxvYWRlZCB7XG4gIGFuaW1hdGlvbjogZmFkZWluIDEuNXM7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuI2ZpcnN0IHtcbiAgaGVpZ2h0OiAxOTBweDtcbiAgd2lkdGg6IDI1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuI25leHQge1xuICBtYXJnaW46IDFweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogOTVweDtcbiAgaGVpZ2h0OiA5NXB4O1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5uZXh0Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4uYSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBhZGRpbmc6IDUwcHggMDtcbn1cbi5pY29uc3R5bGV7XG4gIGhlaWdodDogMzAlICFpbXBvcnRhbnQ7XG59XG5cbi5jb21tZW50YWlyZVxue1xuICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDk3JTtcbiAgICBtYXJnaW46IDVweDtcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41MDcpO1xufVxuIl19 */");

/***/ }),

/***/ 13320:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/home/reactions/reactions.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"share()\" fill=\"clear\" id=\"icon_like\"  slots=\"icon-only\">\n\n          <img src=\"../../../../assets/iconPost/icon_like.svg\" />\n\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"share()\" fill=\"clear\" id=\"icon_halthere\" slots=\"icon-only\">\n          <img src=\"../../../../assets/iconPost/icon_halthere.svg\" />\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"share()\" fill=\"clear\" id=\"icon_muscle\"  slots=\"icon-only\">\n\n          <img src=\"../../../../assets/iconPost/icon_muscle.svg\" />\n\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ 57758:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/home/status/status.component.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-grid>\n  <ion-row lines=\"none\">\n    <ion-avatar slot=\"\" class=\"ion-padding\">\n      <img [src]=\"apiImgUser + post?.user?.photo\"\n        routerLink=\"/tabs/layouts/coachprofile/{{ post.user.id || post.post.user.id }}/me/coachphoto\" />\n    </ion-avatar>\n\n    <ion-label [routerLink]=\"['/tabs/layouts/coachprofile/{{ post.user.id || post.post.user.id }}/me/coachphoto']\"\n      class=\"ion-justify-content-center\" style=\"display: grid; align-self: center\">\n      <ng-container *ngIf=\"post.shared===true; else mine\">\n        <h3 class=\"\n          ion-text-capitalize\n          ion-align-self-start\n          ion-justify-content-start\n          ion-text-start\n        \" routerLinkActive=\"router-link-active\">\n          <strong>{{ post.user.name }}</strong> shared {{post?.post?.user.name}}'s post\n        </h3>\n      </ng-container>\n      <div style=\"display: flex;\">\n        <ng-template #mine>\n          <h3 class=\"\n            ion-text-capitalize\n            ion-align-self-start\n            ion-justify-content-start\n            ion-text-start\n          \" routerLinkActive=\"router-link-active\">\n            <strong>{{ post?.user?.name }}</strong>\n          </h3>\n        </ng-template>\n\n        <p style=\"color: #a5a5a5;\">{{ post?.createdAt | date }}</p>\n        <span style=\"margin-left:15px ;\">{{post.content}}</span>\n      </div>\n    </ion-label>\n\n    <ion-button color=\"light\" slot=\"end\" shape=\"round\" fill=\"clear\" size=\"small\" (click)=\"presentPopover($event)\">\n      <ion-icon color=\"light\" style=\"color: #fff\" slot=\"icon-only\" name=\"ellipsis-vertical\">\n      </ion-icon>\n    </ion-button>\n  </ion-row>\n  <ion-row lines=\"none\" class=\"ion-justify-content-center ion-margin\" *ngIf=\"images.length > 0\">\n    <img [lazyLoad]=\"apiImg + images[0]?.image_name\" />\n  </ion-row>\n  <ng-container style=\"display: flex;flex-direction:column\" *ngIf=\"post.shared===true\">\n    <div style=\"display: flex; align-items:center;margin-top:-20px\">\n      <ion-avatar slot=\"\" class=\"ion-padding\">\n        <img [src]=\"apiImgUser + post.post.user.photo\"\n          routerLink=\"/tabs/layouts/coachprofile/{{ post.user.id || post.post.user.id }}/me/coachphoto\" />\n      </ion-avatar>\n      <span style=\"text-transform: capitalize;\">\n        {{ post.post?.user?.name }}\n      </span>\n    </div>\n    <span>{{post?.post?.content}}</span>\n  </ng-container>\n\n  <div routerLink=\"/one-status/{{ post.post?.id ||post.id }}\" *ngIf=\"mediafiles.length === 0\">\n\n\n    <div style=\"display: flex; justify-content: center;flex-direction:column\">\n      <div *ngFor=\"let file of newMediaFiles\">\n        <ng-container *ngIf=\"getExt(file.file_name) === 'png'\">\n          <div style=\"width: 350px; height: 220px\" id=\"first\" [style.background-size]=\"'cover'\"\n            [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n            errorImage=\"../../../assets/imgs/150.png\">\n            <ion-icon></ion-icon>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n          <div style=\"\n              margin-left: 15px;\n              width: 350px;\n              height: 220px;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              border-radius: 10px;\n            \" [style.background-size]=\"'cover'\" [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n            errorImage=\"../../../assets/imgs/150.png\" (click)=\"displayVideo(file)\">\n            <ion-icon style=\"height: 50px; width: 50px\" name=\"videocam\"></ion-icon>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n\n  </div>\n\n  <div routerLink=\"/one-status/{{ post.post?.id ||post.id }}\" *ngIf=\"\n      newMediaFiles.length > 0 &&\n      thirdNewMediaFiles.length === 0 &&\n      mediafiles.length !== 0\n    \">\n    <div style=\"display: flex; justify-content: center\">\n      <div *ngFor=\"let file of newMediaFiles\">\n        <ng-container *ngIf=\"getExt(file.file_name) === 'png'\">\n          <div style=\"width: 250px\" id=\"first\" [style.background-size]=\"'cover'\"\n            [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n            errorImage=\"../../../assets/imgs/150.png\">\n            <ion-icon></ion-icon>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n          <div style=\"\n              margin-left: 15px;\n              width: 250px;\n              height: 200px;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              border-radius: 10px;\n            \" [style.background-size]=\"'cover'\" [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n            errorImage=\"../../../assets/imgs/150.png\" (click)=\"displayVideo(file)\">\n            <ion-icon style=\"height: 50px; width: 50px\" name=\"videocam\"></ion-icon>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"nextContainer\" routerLink=\"/one-status/{{ post.post?.id ||post.id }}\">\n        <div *ngFor=\"let file of mediafiles\">\n          <ng-container *ngIf=\"getExt(file.file_name) === 'png'\">\n            <div id=\"next\" [style.background-size]=\"'cover'\"\n              [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n              errorImage=\"../../../assets/imgs/150.png\">\n              <ion-icon></ion-icon>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n            <div style=\"\n                margin-left: 15px;\n                width: 50px;\n                height: 50px;\n                display: flex;\n                justify-content: center;\n                align-items: center;\n                border-radius: 10px;\n              \" [style.background-size]=\"'cover'\" [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n              errorImage=\"../../../assets/imgs/150.png\" (click)=\"displayVideo(mediafiles)\">\n              <ion-icon name=\"videocam\"></ion-icon>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"secondNewMediaFiles.length !== 0\" routerLink=\"/one-status/{{ post.post?.id ||post.id }}\">\n    <div style=\"display: flex\">\n      <div *ngFor=\"let file of newMediaFiles\">\n        <ng-container *ngIf=\"getExt(file.file_name) === 'png'\">\n          <div id=\"first\" [style.background-size]=\"'cover'\"\n            [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n            errorImage=\"../../../assets/imgs/150.png\">\n            <ion-icon></ion-icon>\n          </div>\n        </ng-container>\n        <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n          <div style=\"\n              margin-left: 15px;\n              width: 250px;\n              height: 200px;\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              border-radius: 10px;\n            \" [style.background-size]=\"'cover'\" [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n            errorImage=\"../../../assets/imgs/150.png\" (click)=\"displayVideo(file)\">\n            <ion-icon style=\"height: 50px; width: 50px\" name=\"videocam\"></ion-icon>\n          </div>\n        </ng-container>\n      </div>\n      <div class=\"nextContainer\" style=\"position: relative\">\n        <div *ngFor=\"let file of thirdNewMediaFiles\">\n          <ng-container *ngIf=\"getExt(file.file_name) === 'png'\">\n            <div id=\"next\" [style.background-size]=\"'cover'\"\n              [style.background-image]=\"'url(' + apiImg + file?.file_name + ')'\"\n              errorImage=\"../../../assets/imgs/150.png\">\n              <ion-icon></ion-icon>\n            </div>\n          </ng-container>\n          <!-- <p style=\"color: black\">{{ secondNewMediaFiles.lenght }}</p> -->\n          <ng-container *ngIf=\"getExt(file.file_name) === 'mp4'\">\n            <div [style.background-size]=\"'cover'\" [style.background-image]=\"'url(../../../assets/imgs/150.png)'\"\n              errorImage=\"../../../assets/imgs/150.png\" (click)=\"displayVideo(file)\">\n              <ion-icon name=\"videocam\"></ion-icon>\n            </div>\n          </ng-container>\n        </div>\n        <div style=\"\n            position: absolute;\n            background-color: rgba(0, 0, 0, 0.219);\n            color: rgb(255, 255, 255);\n            font-size: 20px;\n            bottom: 0;\n            left: 0;\n            width: 95px;\n            height: 95px;\n            border-radius: 5px;\n            margin: 1px 0 0 1px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 40px;\n          \">\n          + {{ this.secondNewMediaFiles.length }}\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-grid>\n\n<ion-row style=\"margin-top:-12px\" lines=\"none\">\n  <ion-col size=\"col-2\">\n    <ion-chip>\n      <ng-container\n        *ngIf=\"!post.shared && !post?.likedBy.includes(user?._id) || !post.post?.likedBy.includes(user?._id); else dislikedTemp\">\n        <ion-button style=\"display: flex;align-items:center\" (dblclick)=\"showReactions($event)\"\n          (click)=\"like(post, $event.target)\" shape=\"round\" fill=\"clear\" size=\"large\">\n          <img src=\"../../../../assets/iconPost/{{ post?.iconLike || post.post?.iconLike }}.svg\" class=\"iconstyle\" />\n          <span style=\"color:#7F867D;font-size:14px\">{{ post?.likes || post.post?.likes }} </span>\n        </ion-button>\n      </ng-container>\n      <ng-template #dislikedTemp>\n        <ion-button style=\"display: flex;align-items:center\" (dblclick)=\"showReactions($event)\"\n          (click)=\"disLike(post, $event.target)\" shape=\"round\" fill=\"clear\" size=\"large\">\n          <img src=\"../../../../assets/iconPost/{{ post?.iconLike || post.post?.iconLike }}.svg\" class=\"iconstyle\" />\n          <span style=\"color:#7F867D;font-size:14px\">{{ post?.likes || post.post?.likes }} </span>\n        </ion-button>\n      </ng-template>\n    </ion-chip>\n  </ion-col>\n  <ion-col style=\"text-align: end\">\n    <ion-chip>\n      <ion-button style=\"display: flex;align-items:center\" shape=\"round\" fill=\"clear\" size=\"large\">\n        <img class=\"iconstyle\" src=\"../../../../assets/iconPost/icon_comment.svg\" />\n        <span style=\"color:#7F867D;font-size:14px\">{{ comments?.length }}</span>\n      </ion-button>\n      <ng-container *ngIf=\"!bookmarked && !isBookMarked; else unbook || isBookMarked\">\n        <ion-button style=\"display: flex;align-items:center\" (click)=\"bookmark(post)\" shape=\"round\" fill=\"clear\"\n          size=\"large \">\n          <ion-icon style=\"color:#7F867D;font-size:14px;height:20px;width:20px\" name=\"bookmark-outline\">\n          </ion-icon>\n          <span style=\"color:#7F867D;font-size:14px\">{{ post?.post?.favorisNb || post?.favorisNb }}</span>\n        </ion-button>\n      </ng-container>\n      <ng-template #unbook>\n        <ion-button style=\"display: flex;align-items:center\" (click)=\"unBookmark(post)\" shape=\"round\" fill=\"clear\"\n          size=\"large \">\n          <ion-icon style=\"color:#7F867D;font-size:14px;height:20px;width:20px \" name=\"bookmark\">\n          </ion-icon>\n          <span style=\"color:#7F867D;font-size:14px\">{{ post?.post?.favorisNb || post?.favorisNb }}</span>\n        </ion-button>\n      </ng-template>\n      <ion-button style=\"display: flex;align-items:center\" (click)=\"share(post)\" shape=\"round\" fill=\"clear\"\n        size=\"large \">\n        <img class=\"iconstyle\" src=\"../../../../assets/iconPost/icon_share.svg\" />\n        <span style=\"color:#7F867D;font-size:14px\">{{ post?.post?.sharedeNb || post?.sharedeNb }}</span>\n      </ion-button>\n    </ion-chip>\n  </ion-col>\n  <div style=\"width: 100%;\">\n    <div style=\"display: flex;align-items:center\">\n      <ng-container *ngIf=\"showComment===false; else not\">\n        <ng-container *ngIf=\"comments.length>1\" style=\"position: relative;\">\n          <p (click)=\"showComments()\"\n            style=\"display:flex;align-items:center;font-size:12px;position:absolute;right:20px;color:#7F867D;transform:translateY(-30px)\">\n            Afficher plus de commentaires <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n          </p>\n        </ng-container>\n        <ng-container *ngIf=\"comments.length!==0\">\n          <div style=\"display: flex;align-items:center;padding-top:15px;margin-left:7px\">\n            <div style=\"display: flex;flex-direction:column;align-items:center\">\n              <img style=\"width: 22px; height:22px;border-radius:50%;object-fit:cover\"\n                src={{apiImgUser+comments[0].user.photo}} alt=\"\">\n              <span style=\"font-size: 12px;\">{{comments[0].user.name}}</span>\n            </div>\n            <span\n              style=\"background-color:#EEEFEF ;margin:2px;padding:7px 10px;width:220px;height:30px;border-radius:15px;text-align:start;text-overflow:ellipsis;overflow:hidden;white-space: nowrap;font-size:12px\" *ngIf=\"comments[0].content.indexOf('file:///storage') ===  -1\" >{{comments[0].content}}</span>\n\n              <audio\n              controls\n              *ngIf=\"comments[0].content.indexOf('file:///storage') !==  -1\"\n              src=\"{{comments[0].content}}\">\n                  Your browser does not support the\n                  <code>audio</code> element.\n          </audio>\n            </div>\n        </ng-container>\n      </ng-container>\n      <ng-template #not>\n        <p (click)=\"hideComments()\"\n          style=\"display:flex;align-items:center;font-size:12px;position:absolute;right:20px;color:#7F867D\">Afficher\n          moins de commentaires <ion-icon name=\"chevron-down-outline\"></ion-icon>\n        </p>\n\n      </ng-template>\n    </div>\n    <div style=\"margin-top: 12px ;margin-left:4px\">\n      <ng-container *ngIf=\"showComment===true\">\n        <div style=\"display: flex;align-items:center;margin:3px \" *ngFor=\"let item of comments.slice().reverse()\">\n          <div style=\"display: flex;flex-direction:column;align-items:center\">\n            <img style=\"width: 22px; height:22px;border-radius:50%;object-fit:cover\" src={{apiImgUser+item.user.photo}}\n              alt=\"\">\n            <span style=\"font-size: 12px;\">{{item.user.name}}</span>\n          </div>\n          <span\n            style=\"background-color:#EEEFEF ;margin:2px;padding:7px 10px;width:220px;height:30px;border-radius:15px;text-align:start;text-overflow:ellipsis;overflow:hidden;white-space: nowrap;font-size:12px\">{{item.content}}</span>\n        </div>\n      </ng-container>\n    </div>\n    <div\n      style=\"display: flex;justify-content:space-between;align-items:center; background-color:#EEEFEF; border-radius:10px;margin:10px 3px 20px 3px\">\n      <div style=\"display: flex;align-items:center;padding:0px 10px\">\n        <img style=\"width: 30px; height:30px;border-radius:50%;object-fit:cover\" src={{apiImgUser+user.photo}}\n          routerLink=\"/tabs/layouts/coachprofile/coachphoto\" />\n        <input placeholder=\"Ecrivez un commentaire ...\" [(ngModel)]=\"comment.content\"\n          style=\"margin-left:5px;font-size:15px;border: none; background-color:#EEEFEF;margin-right:10px;padding:10px\"\n          type=\"text\">\n      </div>\n      <div style=\"display: flex;\">\n        <ion-icon style=\"width: 20px;height:20px;margin-right:5px;color:gray\" (click)=\"sendComment(post)\" name=\"send\">\n        </ion-icon>\n        <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/pics.svg\" alt=\"\">\n        <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/camera.svg\" alt=\"\">\n<!--\n     <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/gif.svg\" alt=\"\">\n        <img style=\"width: 20px;height:20px;margin-right:5px\" src=\"../../../assets/svg/attach.svg\" alt=\"\">\n\n-->\n        <img *ngIf=\"!isRecording\" (click)=\"recordAudio()\" style=\"width: 20px;height:20px;margin-right:5px\"\n          src=\"../../../assets/svg/mic.svg\" alt=\"\">\n        <img style=\"width: 22px;height:22px;margin-right:5px;border-radius:50px; color:red;\" src=\"../../../../assets/icon/sound-recorder-icon.png\"\n          *ngIf=\"isRecording\" (click)=\"stopRecording() ; isRecording = false\" />\n\n      </div>\n    </div>\n  </div>\n</ion-row>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_layouts_home_status_status_component_ts.js.map