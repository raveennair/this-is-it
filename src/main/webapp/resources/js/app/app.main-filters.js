/**
 * 
 */

define(["filters/interpolate-filter"], function(interpolateFilter) {
    
    'use strict';
    
    /* Filters */
    
    var AppFilters = angular.module('AngularSpringApp.filters', []);
    
    AppFilters.filter('interpolate', interpolateFilter);
    
    return AppFilters.name;
});
