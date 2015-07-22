/**
 * RailwayStationController
 * 
 * @constructor
 */
define([], function() {
    'use strict';
    return [ "$scope", "RestClient", function($scope, RestClient) {

        $scope.rs = {};
        $scope.editMode = false;

        var failureHandler = function(response) {
            $scope.setError('Could not this operation');
        };

        var getRSSuccessHandler = function(response) {
            $scope.railwaystations = response.data;
        };

        var addRSSuccessHandler = function(response) {
            $scope.fetchRailwayStationsList();
            $scope.rs.name = '';
            $scope.rs.train.name = '';
            $scope.rs.train.speed = '';
            $scope.rs.train.diesel = false;
        };

        var updateRSSuccessHandler = function(response) {
            $scope.fetchRailwayStationsList();
            $scope.rs.name = '';
            $scope.rs.train.name = '';
            $scope.rs.train.speed = '';
            $scope.rs.train.diesel = false;
            $scope.editMode = false;
        };

        var removeRSSuccessHandler = function(response) {
            $scope.fetchRailwayStationsList();
        };

        $scope.fetchRailwayStationsList = function() {
            RestClient.Get(getRSSuccessHandler, failureHandler, 'railwaystations/railwaystationlist.json');
        };

        $scope.addNewRailwayStation = function(rs) {
            $scope.resetError();
            RestClient.Post(addRSSuccessHandler, failureHandler, 'railwaystations/add', rs);
        };

        $scope.updateRailwayStation = function(rs) {
            $scope.resetError();
            RestClient.Put(updateRSSuccessHandler, failureHandler, 'railwaystations/update', rs);
        };

        $scope.removeRailwayStation = function(id) {
            $scope.resetError();
            RestClient.Delete(removeRSSuccessHandler, failureHandler, 'railwaystations/remove/' + id);
            $scope.rs = '';
        };

        $scope.removeAllRailwayStations = function() {
            $scope.resetError();
            RestClient.Delete(removeRSSuccessHandler, failureHandler, 'railwaystations/removeAll');
        };

        $scope.editRailwayStation = function(rs) {
            $scope.resetError();
            $scope.rs = rs;
            $scope.editMode = true;
        };

        $scope.resetRailwayStationForm = function() {
            $scope.resetError();
            $scope.rs = {};
            $scope.editMode = false;
        };

        $scope.resetError = function() {
            $scope.error = false;
            $scope.errorMessage = '';
        };

        $scope.setError = function(message) {
            $scope.error = true;
            $scope.errorMessage = message;
        };

        $scope.fetchRailwayStationsList();

        $scope.predicate = 'id';
    } ];
});
