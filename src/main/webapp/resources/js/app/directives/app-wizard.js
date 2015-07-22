/*******************************************************************************
 * File Name: app-wizard.js
 * 
 * Date Created: Mar 19, 2015
 * 
 ******************************************************************************/

define([], function() {
    "use strict";

    return function() {
        function link(scope, elm, attrs) {

        }

        return {
            restrict : "E",
            controller : "WizardDirectiveController",
            templateUrl : "resources/js/app/directives/directive-template/app-wizard-directive-template.html",
            link : link
        };
    };

});
