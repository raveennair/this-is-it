/**
 * 
 */
define([], function() {
    "use strict";

    return [ 'version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    } ];
});
