/*******************************************************************************
 * File Name: http.js
 * 
 * Date Created: Mar 1, 2015
 * 
 ******************************************************************************/

define([], function() {
    "use strict";

    return [ "$http", "$q", function($http, $q) {
        this.Get = Get;
        this.Post = Post;
        this.Put = Put;
        this.Delete = Delete;

        function constructResponse(data, status, headers, config) {
            var response = {
                data : data,
                status : status,
                headers : headers,
                config : config
            };
            return response;
        }

        function makeHTTPRequest(config, deferred) {
            $http(config).success(function(data, status, headers, config) {
                deferred.resolve(constructResponse(data, status, headers, config));
            }).error(function(data, status, headers, config) {
                deferred.reject(constructResponse(data, status, headers, config));
            });
            return deferred.promise;
        }

        function Get(url, params, headers) {
            var deferred = $q.defer();
            var config = {
                method : 'GET',
                url : url
            };
            if (params)
                config.params = params;
            if (headers)
                config.headers = headers;
            return makeHTTPRequest(config, deferred);
        }

        function Post(url, data, params, headers, transformRequest) {
            var deferred = $q.defer();
            var config = {
                method : 'POST',
                url : url,
                data : data
            };
            if (headers)
                config.headers = headers;
            if (params)
                config.params = params;
            if (transformRequest) {
                config.transformRequest = transformRequest;
            }
            return makeHTTPRequest(config, deferred);

        }

        function Put(url, data, params, headers) {
            var deferred = $q.defer();
            var config = {
                method : 'PUT',
                url : url,
                data : data
            };
            if (headers)
                config.headers = headers;
            if (params)
                config.params = params;
            return makeHTTPRequest(config, deferred);
        }

        function Delete(url, data, params, headers) {
            var deferred = $q.defer();
            var config = {
                method : 'DELETE',
                url : url
            };
            if (data)
                config.data = data;
            if (headers)
                config.headers = headers;
            if (params)
                config.params = params;
            return makeHTTPRequest(config, deferred);
        }

    } ];

});
