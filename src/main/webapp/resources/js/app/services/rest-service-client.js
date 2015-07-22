/*******************************************************************************
 * File Name: rest-service-client.js
 * 
 * Date Created: Mar 1, 2015
 * 
 ******************************************************************************/

define([], function() {
    "use strict";

    return [ "Http", function(http) {

        this.Get = function(successHandler, failureHandler, url, params, headers) {
            var response = http.Get(url, params, headers);
            response.then(function(response) {
                successHandler(response);
            }, function(response) {
                failureHandler(response);
            });
        };
        this.Post = function(successHandler, failureHandler, url, data, params, headers) {
            var response = http.Post(url, data, params, headers);
            response.then(function(response) {
                successHandler(response);
            }, function(response) {
                failureHandler(response);
            });
        };

        this.Put = function(successHandler, failureHandler, url, data, params, headers) {
            var response = http.Put(url, data, params, headers);
            response.then(function(response) {
                successHandler(response);
            }, function(response) {
                failureHandler(response);
            });
        };

        this.Delete = function(successHandler, failureHandler, url, data, params, headers) {
            var response = http.Delete(url, data, params, headers);
            response.then(function(response) {
                successHandler(response);
            }, function(response) {
                failureHandler(response);
            });
        };

        this.uploadFile = function(successHandler, failureHandler, url, fileAttributes, file) {
            var headers = {
                "Content-Type" : undefined
            };
            var transformRequest = angular.identity;
            var response = http.Post(url, file, fileAttributes, headers, transformRequest);
            response.then(function(response) {
                successHandler(response);
            }, function(response) {
                failureHandler(response);
            });
        };

    } ];
});
