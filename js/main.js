"use strict";
jQuery(document).ready(function ($) {

//==========================================
// MOBAILE MENU
//=========================================

    var $targetForScrollingAfterHideMenu = null;
    $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);

            $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {
                if ($('.navbar-toggle').css('display') != 'none') {
                    $targetForScrollingAfterHideMenu = $target;
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                else {
                    $('html,body').animate({
                        scrollTop: ($target.offset().top - 0)
                    }, 400);
                }
                return false;
            }
        }
    });

    $('#navbar-menu').on('hidden.bs.collapse', function () {
        if ($targetForScrollingAfterHideMenu) {
            $('html,body').animate({
                scrollTop: ($targetForScrollingAfterHideMenu.offset().top - 0)
            }, 400, 'swing', function () {
                $targetForScrollingAfterHideMenu = null;
            });
        }
    })
//==========================================
//ScrollUp
//=========================================

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#scrollUp').fadeIn('slow');
        } else {
            $('#scrollUp').fadeOut('slow');
        }
    });

    $('#scrollUp').click(function () {
        $("html, body").animate({scrollTop: 0}, 400);
        return false;
    });
    

//==========================================
// Loading
//=========================================

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });



});