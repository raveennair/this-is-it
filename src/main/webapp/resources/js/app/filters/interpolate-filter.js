/**
 * 
 */

define([], function() {

    return [ 'version', function(version) {
        "use strict";
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    } ];
});
