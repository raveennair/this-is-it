/**
 * 
 */
define([ "require", "app.main-jquery", "app.main-controllers", "app.main-directives", "app.main-filters", "app.main-services", "app.main-constants", "app.main-routes"], function(require, AppJquery, AppControllers, AppDirectives, AppFilters, AppServices, AppConstants, AppRoutes) {
    "use strict";
    var AngularSpringApp = {};

    var App = angular.module("AngularSpringApp", [ "ngRoute", AppControllers, AppFilters, AppServices, AppDirectives, AppConstants, AppRoutes ]);

    return App;
});
