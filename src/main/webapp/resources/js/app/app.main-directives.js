/**
 * 
 */
define([ "directives/app-version", "directives/app-wizard", "directives/directive-controller/app-wizard-directive-controller" ], function(appVersionDirective, appWizardDirective, appWizardDirectiveController) {

    'use strict';

    /* Directives */

    var AppDirectives = angular.module('AngularSpringApp.directives', []);

    AppDirectives.directive('appVersion', appVersionDirective);
    AppDirectives.directive('appWizard', appWizardDirective);
    
    AppDirectives.controller('WizardDirectiveController', appWizardDirectiveController);

    return AppDirectives.name;

});
