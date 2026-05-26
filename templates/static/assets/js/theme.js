(function ($) {
    'use strict';

     //Header Search
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }

    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });

    // Loder  //
    $(function () {
        $('body').addClass('loaded');
    });

   

    // Case Study Active
    $('.brand-list').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 1500,
        dots: false,
        nav: false,
        center: false,
        margin: 30,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            },
            1920: {
                items: 5
            }
        }
    })


    // brand Active
    $('.testi-list').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 10000,
        dots: false,
        nav: true,
        margin:20,
        navText: ["<i class='bi bi-chevron-left''></i>", "<i class='bi bi-chevron-right''></i>"],
        responsive: {
            0: {
                items: 1  
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    })


    /*  Cart Plus Minus Button
    /*----------------------------------------*/
    
    $('.ctnbutton').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find('input').val(newVal);
    });


    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    // counterUp
    $('.counter').counterUp({
        delay: 5,
        time: 1500
    });

    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });
    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })


    jQuery(document).ready(function ($) {

        //=====< barfiller script >====
        $('#bar1').barfiller({
            duration: 7000
        });
        $('#bar2').barfiller({
            duration: 7000
        });
        $('#bar3').barfiller({
            duration: 7000
        });


        //======< Custom Tab >======
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $(".tab ul.tabs li a").on("click", function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        });

    });


    // scroll up

    if($('.prgoress_indicator path').length){
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.prgoress_indicator').addClass('active-progress');
          } else {
            jQuery('.prgoress_indicator').removeClass('active-progress');
          }
        });
        jQuery('.prgoress_indicator').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        });
    }

        /* Portfolio Isotope---case study*/
        $('.image_load').imagesLoaded(function () {

            if ($.fn.isotope) {
                
                var $portfolio = $('.image_load');
        
                $portfolio.isotope({
                    itemSelector: '.grid-item',
                    filter: '*',
                    resizesContainer: true,
                    layoutMode: 'masonry',
                    transitionDuration: '0.8s'
                });
        
                $('.menu-filtering li').on('click', function () {
                    $('.menu-filtering li').removeClass('current_menu_item');
                    $(this).addClass('current_menu_item');
                    var selector = $(this).attr('data-filter');
                    $portfolio.isotope({
                        filter: selector,
                    });
                });
        
            }
        });


         // Pricing Tab
         $(document).ready(function() {
            const tabs= document.querySelectorAll('.pricing-tab-button button');
            const all_content= document.querySelectorAll('.tab-content')
    
            tabs.forEach((tab, index)=>{
                tab.addEventListener('click', ()=>{
                    tabs.forEach(tab=>{tab.classList.remove('active')});
                    tab.classList.add('active');
    
                    all_content.forEach(content=>{content.classList.remove('active')});
                    all_content[index].classList.add('active');
                });
            });
        });

        // Pricing Tab
        $(document).ready(function() {
            const tabs= document.querySelectorAll('.Price-tab-btn');
            const all_content= document.querySelectorAll('.tab-contents')
    
            tabs.forEach((tab, index)=>{
                tab.addEventListener('click', ()=>{
                    tabs.forEach(tab=>{tab.classList.remove('active')});
                    tab.classList.add('active');
    
                    all_content.forEach(content=>{content.classList.remove('active')});
                    all_content[index].classList.add('active');
                });
            });
        });

    //scrollcue js
        scrollCue.init();
        duration : 300;
        interval : -200;
        percentage : 0.8;

})(jQuery);