/**
 * 
 */

define([ "jquery", "wow", "classie", "animatedheader", "nanogallery" ], function($, WOW, classie, animatedheader, nanogallery) {

    'use strict';

    $(document).ready(function() {

        $(".nav a").on("click", function() {
            $(".nav").find(".active").removeClass("active");
            $(this).parent().addClass("active");
        });

        $("#element").wallpaper({
            source : {
                poster : "path/to/poster.jpg",
                video : "//www.youtube.com/embed/VIDEO_ID"
            }
        });

        // WOW init
        new WOW().init();

        // Nano gallery
        var myColorScheme = {
            navigationbar : {
                background : '#f00',
                border : '1px dotted #555',
                color : '#ccc',
                colorHover : '#fff'
            },
            thumbnail : {
                background : '#f00',
                border : '0px solid #000',
                labelBackground : 'transparent',
                labelOpacity : '0.8',
                titleColor : '#fff',
                descriptionColor : '#eee'
            }
        };
        var myColorSchemeViewer = {
            background : 'rgba(1, 1, 1, 0.75)',
            imageBorder : '15px solid #f8f8f8',
            imageBoxShadow : '#888 0px 0px 20px',
            barBackground : '#222',
            barBorder : '2px solid #111',
            barColor : '#eee',
            barDescriptionColor : '#aaa'
        };

        $("#nanoGallery3").nanoGallery({
            thumbnailHoverEffect : 'borderLighter',
            colorScheme : myColorScheme,
            colorSchemeViewer : myColorSchemeViewer
        });

    });

});
