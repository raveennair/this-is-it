/********************************************************************
 * File Name:    car-controller.js
 *
 * Date Created: Mar 3, 2015
 *
 *******************************************************************/
define([], function() {
    'use strict';
    return [ "$scope", "RestClient", function($scope, RestClient) {

        $scope.car = {};
        $scope.editMode = false;

        var failureHandler = function(response) {
            $scope.setError('Could not this operation');
        };

        var getCarsSuccessHandler = function(response) {
            $scope.cars = response.data;
        };

        var addNewCarSuccessHandler = function(response) {
            $scope.fetchCarList();
            $scope.car.name = '';
        };

        var updateCarSuccessHandler = function(response) {
            $scope.fetchCarList();
            $scope.car.name = '';
            $scope.editMode = false;
        };

        var removeCarSuccessHandler = function(response) {
            $scope.fetchCarList();
        };

        $scope.fetchCarList = function() {
            RestClient.Get(getCarsSuccessHandler, failureHandler, 'cars/carslist.json');
        };

        $scope.addNewCar = function(car) {
            $scope.resetError();
            RestClient.Post(addNewCarSuccessHandler, failureHandler, 'cars/addCar', car);
        };

        $scope.updateCar = function(car) {
            $scope.resetError();
            RestClient.Put(updateCarSuccessHandler, failureHandler, 'cars/updateCar', car);
        };

        $scope.removeCar = function(id) {
            $scope.resetError();
            RestClient.Delete(removeCarSuccessHandler, failureHandler, 'cars/removeCar/' + id);
            $scope.car.name = '';
        };

        $scope.removeAllCars = function() {
            $scope.resetError();
            RestClient.Delete(removeCarSuccessHandler, failureHandler, 'cars/removeAllCars');
        };

        $scope.editCar = function(car) {
            $scope.resetError();
            $scope.car = car;
            $scope.editMode = true;
        };

        $scope.resetCarForm = function() {
            $scope.resetError();
            $scope.car = {};
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

        $scope.fetchCarList();

        $scope.predicate = 'id';
        
        
        $scope.openWizard = function () {
            $("#myModal").modal('show');
        };
        
    } ];
});
