/**
 * UserController
 * 
 * @constructor
 */

define([], function() {
    'use strict';
    return [ "$scope", "RestClient", "HTTP_SERVICE_CONSTANTS", function($scope, RestClient, HTTP_SERVICE_CONSTANTS) {

        $scope.content = {};
        $scope.editMode = false;

        $scope.initialize = function() {
            $scope.getContent();
            $scope.predicate = 'id';
            $("#imageIcon").on("change", $scope.sendImage);
        };

        var uploadImageSuccessHandler = function(response) {
            $scope.content.icon = response.data.icon;
        };

        var failureHander = function(response) {
            $scope.setError("Failed to perform operation");
        };

        var getContentSuccessHandler = function(response) {
            $scope.contents = response.data;
        };

        var addContentSuccessHandler = function(response) {
            $scope.getContent();
            $scope.content.name = '';
            $scope.content.description = '';
        };

        var updateContentSuccessHandler = function(response) {
            $scope.getContent();
            $scope.content.name = '';
            $scope.content.description = '';
            $scope.editMode = false;
        };

        var deleteContentSuccessHandler = function(response) {
            $scope.getContent();
        };

        $scope.getContent = function() {
            RestClient.Get(getContentSuccessHandler, failureHander, HTTP_SERVICE_CONSTANTS.GetContent);
        };

        $scope.addNewContent = function(content) {
            $scope.resetError();
            RestClient.Post(addContentSuccessHandler, failureHander, HTTP_SERVICE_CONSTANTS.AddContent, content);
        };

        $scope.updateContent = function(content) {
            $scope.resetError();
            RestClient.Put(updateContentSuccessHandler, failureHander, HTTP_SERVICE_CONSTANTS.UpdateContent, content);
        };

        $scope.removeContent = function(id) {
            $scope.resetError();
            RestClient.Delete(deleteContentSuccessHandler, failureHander, HTTP_SERVICE_CONSTANTS.RemoveContent + "/" + id);
            $scope.content.name = '';
            $scope.content.description = '';
        };

        $scope.removeAllUsers = function() {
            $scope.resetError();
            RestClient.Delete(deleteContentSuccessHandler, failureHander, HTTP_SERVICE_CONSTANTS.RemoveContent);
        };

        $scope.editContent = function(content) {
            $scope.resetError();
            $scope.content = content;
            $scope.editMode = true;
        };

        $scope.resetContentForm = function() {
            $scope.resetError();
            $scope.content = {};
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

        $scope.importImage = function() {

        };

        $scope.sendImage = function(event) {
            var element = event.target;

            var file = element.files[0];
            if (!file) {
                $scope.setError("Unable to load file");
                return;
            } else if (file.size > 5000000) {
                $scope.setError("File Size is more than 5 MB");
                return;
            } else if (file.type.indexOf("image") !== 0) {
                $scope.setError("Uploaded file is not an Image");
                return;
            }

            var fileAttrParams = {
                name : file.name,
                size : file.size,
                type : file.type
            };
            RestClient.uploadFile(uploadImageSuccessHandler, failureHander, HTTP_SERVICE_CONSTANTS.UploadContentImage, fileAttrParams, file);
            $("#imageIcon").val("");
        };

    } ];
});
