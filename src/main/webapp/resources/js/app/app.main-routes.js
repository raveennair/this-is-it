/*******************************************************************************
 * File Name: app.main-routes.js
 * 
 * Date Created: Mar 3, 2015
 * 
 ******************************************************************************/

define([], function() {
    "use strict";

    var AppRoutes = angular.module("AngularSpringApp.routes", []);

    // Declare app level module which depends on filters, and services
    AppRoutes.config([ "$routeProvider", function($routeProvider) {
        $routeProvider.when("/home", {
            templateUrl : "home/layout",
            controller : "HomeController"
        });

        $routeProvider.when("/cars", {
            templateUrl : "cars/layout",
            controller : "CarController"
        });

        $routeProvider.when("/trains", {
            templateUrl : "trains/layout",
            controller : "TrainController"
        });

        $routeProvider.when("/users", {
            templateUrl : "users/layout",
            controller : "UserController"
        });

        $routeProvider.when("/railwaystations", {
            templateUrl : "railwaystations/layout",
            controller : "RailwayStationController"
        });

        $routeProvider.when("/aboutus", {
            templateUrl : "aboutus/layout",
            controller : "AboutUsController"
        });

        $routeProvider.otherwise({
            redirectTo : "/home"
        });
    } ]);

    return AppRoutes.name;

});
