/**
 * TrainController
 * 
 * @constructor
 */

define([], function() {
    'use strict';
    return [ "$scope", "RestClient", function($scope, RestClient) {

        $scope.train = {};
        $scope.editMode = false;

        var failureHandler = function(response) {
            $scope.setError('Could not this operation');
        };

        var getTrainSuccessHandler = function(response) {
            $scope.trains = response.data;
        };

        var addTrainSuccessHandler = function(response) {
            $scope.fetchTrainsList();
            $scope.train.name = '';
            $scope.train.speed = '';
            $scope.train.diesel = false;
        };

        var updateTrainSuccessHandler = function(response) {
            $scope.fetchTrainsList();
            $scope.train.name = '';
            $scope.train.speed = '';
            $scope.train.diesel = false;
            $scope.editMode = false;
        };
        var removeTrainSuccessHandler = function(response) {
            $scope.fetchTrainsList();
        };

        $scope.fetchTrainsList = function() {
            RestClient.Get(getTrainSuccessHandler, failureHandler, 'trains/trainslist.json');
        };

        $scope.addNewTrain = function(train) {
            $scope.resetError();
            RestClient.Post(addTrainSuccessHandler, failureHandler, 'trains/addTrain', train);
        };

        $scope.updateTrain = function(train) {
            $scope.resetError();
            RestClient.Put(updateTrainSuccessHandler, failureHandler, 'trains/updateTrain', train);
        };

        $scope.removeTrain = function(id) {
            $scope.resetError();
            RestClient.Delete(removeTrainSuccessHandler, failureHandler, 'trains/removeTrain/' + id);
            $scope.train.name = '';
            $scope.train.speed = '';
        };

        $scope.removeAllTrains = function() {
            $scope.resetError();
            RestClient.Delete(removeTrainSuccessHandler, failureHandler, 'trains/removeAllTrains');
        };

        $scope.editTrain = function(train) {
            $scope.resetError();
            $scope.train = train;
            $scope.editMode = true;
        };

        $scope.resetTrainForm = function() {
            $scope.resetError();
            $scope.train = {};
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

        $scope.fetchTrainsList();

        $scope.predicate = 'id';
    } ];
});
