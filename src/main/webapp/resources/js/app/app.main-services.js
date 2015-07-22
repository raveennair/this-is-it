/**
 * 
 */

define(["services/http", "services/rest-service-client"], function(http, restServiceClient) {

    'use strict';

    /* Services */

    var AppServices = angular.module('AngularSpringApp.services', []);

    AppServices.value('version', '0.1');
    AppServices.service("Http", http);
    AppServices.service("RestClient", restServiceClient);

    return AppServices.name;
});
