/*
| ----------------------------------------------------------------------------------
| TABLE OF CONTENT
| ----------------------------------------------------------------------------------
-SETTING
-Preloader
-Scroll Animation
-Parallax(Stellar)
-Animated Entrances
-Chars Start
-Video player
-Loader blocks
-Accordion
-Tooltip
-Zoom Images
-Isotope filter
-Select customization
-Enumerator
-Price range
-Main slider
-OWL Sliders
*/



$(document).ready(function() {

    "use strict";


    /////////////////////////////////////////////////////////////////
    // SETTING
    /////////////////////////////////////////////////////////////////


    /////////////////////////////////////////////////////////////////
    // Preloader
    /////////////////////////////////////////////////////////////////


    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(50).fadeOut('slow');


    /////////////////////////////////////
    //  Scroll Animation
    /////////////////////////////////////


    if ($('.scrollreveal').length > 0) {
        window.sr = ScrollReveal({
            reset: true,
            duration: 1000,
            delay: 200
        });

        sr.reveal('.scrollreveal');
    }



    //////////////////////////////
    // Parallax(Stellar)
    //////////////////////////////

    if ($('.stellar').length > 0) {
        $.stellar({
            responsive: true
        });
    }


    /////////////////////////////////////
    //  Chars Start
    /////////////////////////////////////


    if ($('body').length) {
        $(window).on('scroll', function() {
            var winH = $(window).scrollTop();

            $('.b-progress-list').waypoint(function() {
                $('.js-chart').each(function() {
                    CharsStart();
                });
            }, {
                offset: '80%'
            });
        });
    }



    /////////////////////////////////////
    //  Effect Active
    /////////////////////////////////////  






    $('.effect-active').waypoint(function() {


        $(this).addClass("active");


    }, {
        triggerOnce: true,
        offset: '55%'
    });




    $('.effect-active').on("hover", function() {
        $(this).removeClass("active");
    });




    $('.b-isotope-grid').on("hover", function() {
        $(this).children().removeClass("active");
    });


    $('.b-advantages-group').on("hover", function() {
        $(this).children().children().removeClass("active");
    });




    /////////////////////////////////////
    //  RevealFX Start
    /////////////////////////////////////





    $('#revealfx1').waypoint(function() {



        var rev1 = new RevealFx

        (


            document.querySelector('#revealfx1'), {
                revealSettings: {
                    bgcolor: '#f8f8f8',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }

            }

        );

        rev1.reveal();


    }, {
        triggerOnce: true,
        offset: '95%'
    });





    $('#revealfx2').waypoint(function() {



        var rev1 = new RevealFx

        (


            document.querySelector('#revealfx2'), {
                revealSettings: {
                    bgcolor: '#f8f8f8',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }

            }

        );

        rev1.reveal();


    }, {
        triggerOnce: true,
        offset: '95%'
    });



    $('#revealfx3').waypoint(function() {



        var rev1 = new RevealFx

        (


            document.querySelector('#revealfx3'), {
                revealSettings: {
                    bgcolor: '#f8f8f8',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }

            }

        );

        rev1.reveal();


    }, {
        triggerOnce: true,
        offset: '95%'
    });



    $('#revealfx4').waypoint(function() {



        var rev1 = new RevealFx

        (


            document.querySelector('#revealfx4'), {
                revealSettings: {
                    bgcolor: '#f8f8f8',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }

            }

        );

        rev1.reveal();


    }, {
        triggerOnce: true,
        offset: '95%'
    });












    function CharsStart() {

        $('.js-chart').easyPieChart({
            barColor: false,
            trackColor: false,
            scaleColor: false,
            scaleLength: false,
            lineCap: false,
            lineWidth: false,
            size: false,
            animate: 5000,

            onStep: function(from, to, percent) {
                $(this.el).find('.js-percent').text(Math.round(percent));
            }
        });
    }



    /////////////////////////////////////
    //  Video player
    /////////////////////////////////////


    if ($('.player').length > 0) {
        $(".player").flowplayer();
    }



    /////////////////////////////////////
    //  Loader blocks
    /////////////////////////////////////


    $(".js-scroll-next").on("click", function() {

        var hiddenContent = $(".js-scroll-next + .js-scroll-content");

        $(".js-scroll-next").hide();
        hiddenContent.show();
        hiddenContent.addClass("animated");
        hiddenContent.addClass("animation-done");
        hiddenContent.addClass("bounceInUp");

    });



    /////////////////////////////////////////////////////////////////
    // Accordion
    /////////////////////////////////////////////////////////////////

    $(".btn-collapse").on('click', function() {
        $(this).parents('.panel-group').children('.panel').removeClass('panel-default');
        $(this).parents('.panel').addClass('panel-default');
        if ($(this).is(".collapsed")) {
            $('.panel-title').removeClass('panel-passive');
        } else {
            $(this).next().toggleClass('panel-passive');
        };
    });




    /////////////////////////////////////
    //  Tooltip
    /////////////////////////////////////


    $('.link-tooltip-1').tooltip({
        template: '<div class="tooltip tooltip-1" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    });
    $('.link-tooltip-2').tooltip({
        template: '<div class="tooltip tooltip-2" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    });





    /////////////////////////////////////
    //  Zoom Images
    /////////////////////////////////////



    if ($('.js-zoom-gallery').length > 0) {
        $('.js-zoom-gallery').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery__item', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled: true
                },
                mainClass: 'mfp-with-zoom', // this class is for CSS animation below

                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function(openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        });
    }


    if ($('.js-zoom-images').length > 0) {
        $('.js-zoom-images').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below

            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });

    }



    ////////////////////////////////////////////
    // ISOTOPE FILTER
    ///////////////////////////////////////////


    if ($('.b-isotope').length > 0) {

        var $container = $('.b-isotope-grid');

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
        // layout Isotope after each image loads
        $grid.imagesLoaded().progress(function() {
            $grid.isotope('layout');
        });

        // filter items when filter link is clicked
        $('.b-isotope-filter a').on('click', function() {
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector
            });
            return false;
        });

        $('.b-isotope-filter a').on('click', function() {
            $('.b-isotope-filter').find('.current').removeClass('current');
            $(this).addClass('current');
        });
    }




    /////////////////////////////////////
    // Select customization
    /////////////////////////////////////

    if ($('.selectpicker').length > 0) {

        $('.selectpicker').selectpicker({
            style: 'ui-select'
        });
    }



    /////////////////////////////////////
    // Enumerator
    /////////////////////////////////////

    if ($('.enumerator').length > 0) {
        $(".js-minus_btn").on('click', function() {
            var inputEl = jQuery(this).parent().children().next();
            var qty = inputEl.val();
            if (jQuery(this).parent().hasClass("js-minus_btn"))
                qty++;
            else
                qty--;
            if (qty < 0)
                qty = 0;
            inputEl.val(qty);
        });


        $(".js-plus_btn").on('click', function() {
            var inputEl = jQuery(this).parent().children().next();
            var qty = inputEl.val();
            if (jQuery(this).hasClass("js-plus_btn"))
                qty++;
            else
                qty--;
            if (qty < 0)
                qty = 0;
            inputEl.val(qty);
        });
    }



    /////////////////////////////////////////////////////////////////
    //PRICE RANGE
    /////////////////////////////////////////////////////////////////


    if ($('.js-slider-price').length > 0) {


        $(".js-slider-price").noUiSlider({
            start: [1000, 3000],
            step: 10,
            connect: true,
            range: {
                'min': 0,
                'max': 5000
            },

            // Full number format support.
            format: wNumb({
                decimals: 0,
                prefix: '$'
            })
        });

        // Reading/writing + validation from an input? One line.
        $('.js-slider-price').Link('lower').to($('.js-slider-price_min'));

        // Write to a span? One line.
        $('.js-slider-price').Link('upper').to($('.js-slider-price_max'));

    }


    ////////////////////////////////////////////
    // Main slider
    ///////////////////////////////////////////


    if ($('#main-slider').length > 0) {

        var sliderWidth = $("#main-slider").data("slider-width");
        var sliderHeigth = $("#main-slider").data("slider-height");
        var sliderArrows = $("#main-slider").data("slider-arrows");
        var sliderButtons = $("#main-slider").data("slider-buttons");

        $('#main-slider').sliderPro({
            width: sliderWidth,
            height: sliderHeigth,
            arrows: sliderArrows,
            buttons: sliderButtons,
            fade: true,
            fullScreen: true,
            touchSwipe: false,
            autoplay: false
        });
    }


    /////////////////////////////////////////////////////////////////
    // OWL Sliders
    /////////////////////////////////////////////////////////////////

    var Core = {

        initialized: false,

        initialize: function() {

            if (this.initialized) return;
            this.initialized = true;

            this.build();

        },

        build: function() {

            // Owl Carousel

            this.initOwlCarousel();
        },
        initOwlCarousel: function(options) {

            $(".enable-owl-carousel").each(function(i) {
                var $owl = $(this);

                var itemsData = $owl.data('items');
                var navigationData = $owl.data('navigation');
                var paginationData = $owl.data('pagination');
                var singleItemData = $owl.data('single-item');
                var autoPlayData = $owl.data('auto-play');
                var transitionStyleData = $owl.data('transition-style');
                var mainSliderData = $owl.data('main-text-animation');
                var afterInitDelay = $owl.data('after-init-delay');
                var stopOnHoverData = $owl.data('stop-on-hover');
                var min480 = $owl.data('min480');
                var min768 = $owl.data('min768');
                var min992 = $owl.data('min992');
                var min1200 = $owl.data('min1200');

                $owl.owlCarousel({
                    navigation: navigationData,
                    pagination: paginationData,
                    singleItem: singleItemData,
                    autoPlay: autoPlayData,
                    transitionStyle: transitionStyleData,
                    stopOnHover: stopOnHoverData,
                    navigationText: ["<i></i>", "<i></i>"],
                    items: itemsData,
                    itemsCustom: [
                        [0, 1],
                        [465, min480],
                        [750, min768],
                        [975, min992],
                        [1185, min1200]
                    ],
                    afterInit: function(elem) {
                        if (mainSliderData) {
                            setTimeout(function() {
                                $('.main-slider_zoomIn').css('visibility', 'visible').removeClass('zoomIn').addClass('zoomIn');
                                $('.main-slider_fadeInLeft').css('visibility', 'visible').removeClass('fadeInLeft').addClass('fadeInLeft');
                                $('.main-slider_fadeInLeftBig').css('visibility', 'visible').removeClass('fadeInLeftBig').addClass('fadeInLeftBig');
                                $('.main-slider_fadeInRightBig').css('visibility', 'visible').removeClass('fadeInRightBig').addClass('fadeInRightBig');
                            }, afterInitDelay);
                        }
                    },
                    beforeMove: function(elem) {
                        if (mainSliderData) {
                            $('.main-slider_zoomIn').css('visibility', 'hidden').removeClass('zoomIn');
                            $('.main-slider_slideInUp').css('visibility', 'hidden').removeClass('slideInUp');
                            $('.main-slider_fadeInLeft').css('visibility', 'hidden').removeClass('fadeInLeft');
                            $('.main-slider_fadeInRight').css('visibility', 'hidden').removeClass('fadeInRight');
                            $('.main-slider_fadeInLeftBig').css('visibility', 'hidden').removeClass('fadeInLeftBig');
                            $('.main-slider_fadeInRightBig').css('visibility', 'hidden').removeClass('fadeInRightBig');
                        }
                    },
                    afterMove: sliderContentAnimate,
                    afterUpdate: sliderContentAnimate,
                });
            });

            function sliderContentAnimate(elem) {
                var $elem = elem;
                var afterMoveDelay = $elem.data('after-move-delay');
                var mainSliderData = $elem.data('main-text-animation');
                if (mainSliderData) {
                    setTimeout(function() {
                        $('.main-slider_zoomIn').css('visibility', 'visible').addClass('zoomIn');
                        $('.main-slider_slideInUp').css('visibility', 'visible').addClass('slideInUp');
                        $('.main-slider_fadeInLeft').css('visibility', 'visible').addClass('fadeInLeft');
                        $('.main-slider_fadeInRight').css('visibility', 'visible').addClass('fadeInRight');
                        $('.main-slider_fadeInLeftBig').css('visibility', 'visible').addClass('fadeInLeftBig');
                        $('.main-slider_fadeInRightBig').css('visibility', 'visible').addClass('fadeInRightBig');
                    }, afterMoveDelay);
                }
            }
        },

    };

    Core.initialize();

});



new WOW().init();