/**
 * UserController
 * 
 * @constructor
 */

define([], function() {
    'use strict';
    return [ "$scope", "RestClient", function($scope, RestClient) {

        $scope.user = {};
        $scope.editMode = false;
        var failureHandler = function(response) {
            $scope.setError('Could not perform this operation');
        };

        var getUserSuccessHandler = function(response) {
            $scope.users = response.data;
        };

        var addUserSuccessHandler = function(response) {
            $scope.fetchUsersList();
            $scope.user.username = '';
            $scope.user.password = '';
            $scope.user.enabled = false;
        };

        var updateUserSuccessHandler = function(response) {
            $scope.fetchUsersList();
            $scope.user.username = '';
            $scope.user.password = '';
            $scope.user.enabled = false;
            $scope.editMode = false;
        };

        var removeUserSuccessHandler = function(response) {
            $scope.fetchUsersList();
        };

        $scope.fetchUsersList = function() {
            RestClient.Get(getUserSuccessHandler, failureHandler, 'users/userslist.json');
        };

        $scope.addNewUser = function(user) {
            $scope.resetError();
            RestClient.Post(addUserSuccessHandler, failureHandler, 'users/addUser', user);
        };

        $scope.updateUser = function(user) {
            $scope.resetError();

            RestClient.Put(updateUserSuccessHandler, failureHandler, 'users/updateUser', user);
        };

        $scope.removeUser = function(id) {
            $scope.resetError();
            RestClient.Delete(removeUserSuccessHandler, failureHandler, 'users/removeUser/' + id);
            $scope.user.username = '';
            $scope.user.password = '';
        };

        $scope.removeAllUsers = function() {
            $scope.resetError();
            RestClient.Delete(removeUserSuccessHandler, failureHandler, 'users/removeAllUsers');
        };

        $scope.editUser = function(user) {
            $scope.resetError();
            $scope.user = user;
            $scope.editMode = true;
        };

        $scope.resetUserForm = function() {
            $scope.resetError();
            $scope.user = {};
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

        $scope.fetchUsersList();

        $scope.predicate = 'id';
    } ];
});
