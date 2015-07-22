/********************************************************************
 * File Name:    app.main-constants.js
 *
 * Date Created: Mar 3, 2015
 *
 *******************************************************************/

define([], function() {
    "use strict";

   var AppConstants = angular.module("AngularSpringApp.constants", []);
   
   AppConstants.constant("HTTP_SERVICE_CONSTANTS", {
       
       AboutUs : "aboutus",
       GetContent : "aboutus/content.json",
       AddContent : "aboutus/add",
       UpdateContent : "aboutus/update",
       RemoveContent : "aboutus/remove",
       RemoveAllContent : "aboutus/removeAll",
       UploadContentImage : "aboutus/addImage"
           
   });
   
   return AppConstants.name;
    
});


