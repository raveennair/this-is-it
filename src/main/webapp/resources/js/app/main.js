/**
 * 
 */

require.config({
    paths : {
        "jquery" : "../lib/jquery/jquery-2.1.3",
        "angular" : "../lib/angular/angular",
        "angular-route" : "../lib/angular/angular-route",
        "app" : "app.main",
        "bootstrap" : "../../bootstrap/js/bootstrap.min",

        "classie" : "../lib/animatedheader/classie",
        "animatedheader" : "../lib/animatedheader/cbpAnimatedHeader.min",
        
        "formstone" : "../lib/formstone/jquery.fs.wallpaper.min",
        "wow" : "../lib/wow/wow.min",
        "nanogallery" : "../../nanogallery/jquery.nanogallery.min"

    },

    shim : {
        "angular" : {
            deps : [ "jquery" ],
            exports : "angular"
        },
        "bootstrap" : {
            deps : [ "jquery" ]
        },
        "nanogallery" : {
            deps : [ "jquery" ]
        },
        "wow" : {
            deps : [ "jquery" ],
            exports : "WOW"
        },
        "formstone" : {
            deps : [ "jquery" ]
        },
        "angular-route" : {
            deps : [ "angular" ]
        },
        "classie" : {
            deps : [ "bootstrap" ],
            exports : "classie"
        },
        "animatedheader" : {
            deps : [ "classie" ]
        },
        "app" : {
            deps : [ "bootstrap", "classie", "animatedheader", "formstone", "wow", "nanogallery", "angular", "angular-route" ]
        }

    }

});

require([ "angular", "app" ], function(angular, app) {
    angular.bootstrap(document, [ app.name ]);

});
