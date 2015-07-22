/*******************************************************************************
 * File Name: home-controller.js
 * 
 * Date Created: Feb 26, 2015
 * 
 ******************************************************************************/

define([], function() {
    "use strict";
    return [ "$scope", "RestClient", "HTTP_SERVICE_CONSTANTS", function($scope, RestClient, HTTP_SERVICE_CONSTANTS) {

        var getContentSuccessHandler = function(response) {
            $scope.contentlist = response.data;
        };

        var getContentFailureHandler = function(response) {

        };

        var getContent = function() {
            // fetch Contents
            RestClient.Get(getContentSuccessHandler, getContentFailureHandler, HTTP_SERVICE_CONSTANTS.GetContent);
        };

        $scope.init = function() {
            getContent();
        };

    } ];
});
