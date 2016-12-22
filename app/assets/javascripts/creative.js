(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    
    // Original code to highlight topbar on scroll, somehow not working
    // Highlight the top nav as scrolling occurs
    // $('body').scrollspy({
    //     target: '.navbar-fixed-top',
    //     offset: 51
    // });
    
    // This makes the navbar backround color transparent when the page is loading
    // Somehow I cannot make it work in css (either background is white in the beginning, or does not become transparent on scrolling)
    $(document).ready(function(){       
     $('.navbar').css('background-color', 'transparent');
    });
    
    // This makes the background of the navbar become white gradually on scrolldown
    // Maginc number 500 is the divider for the scrollTop, the lower the number the faster the opacity goes above 1
    $(document).on('scroll', function (e) {
        var alpha = $(document).scrollTop() / 500;
        $('.navbar').css('background-color', 'rgba(255,255,255,' + alpha + ')');
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
    
    //Get errors in JS in dev tools if uncommented. Same commentout on the min.js file

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    // sr.reveal('.sr-icons', {
    //     duration: 600,
    //     scale: 0.3,
    //     distance: '0px'
    // }, 200);
    // sr.reveal('.sr-button', {
    //     duration: 1000,
    //     delay: 200
    // });
    // sr.reveal('.sr-contact', {
    //     duration: 600,
    //     scale: 0.3,
    //     distance: '0px'
    // }, 300);

    // Initialize and Configure Magnific Popup Lightbox Plugin
    // $('.popup-gallery').magnificPopup({
    //     delegate: 'a',
    //     type: 'image',
    //     tLoading: 'Loading image #%curr%...',
    //     mainClass: 'mfp-img-mobile',
    //     gallery: {
    //         enabled: true,
    //         navigateByImgClick: true,
    //         preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    //     },
    //     image: {
    //         tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    //     }
    // });
    
     $(function () {
            $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
                    $('.navbar-toggle:visible').click();
            });
    });


})(jQuery); // End of use strict
