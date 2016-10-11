//Sticky Menu

jQuery(document).ready(function($) {

    var logo = $('.sc-landing-logo');
    var logo_sticky = $('.sc-landing-logo-sticky');

    var sandwitch = $('.sc-landing-menu-sandwitch-button');
    var sandwitch_sticky = $('.sc-landing-menu-sandwitch-button-sticky');

    var text =  $('.sc-landing-menu a');

    var header = $('.sc-landing-header');

    $(window).scroll(function(){

        if($(window).scrollTop()>550){
            header.css({"background":"rgba(245,245,245,0.88)","border-bottom":"1px solid #d1d1d1",});
            header.removeClass("navbar-top");
            header.addClass("navbar-fixed-top");
            logo.css({"display":"none"});
            logo_sticky.css({"display":"block"});
            sandwitch.css({"display":"none"});
            sandwitch_sticky.css({"display":"block"});
            text.css({"color":"#324c5a"});
        }else{
            header.css({"background":"transparent","border-bottom":"none", });
            header.removeClass("navbar-fixed-top");
            header.addClass("navbar-top");
            logo.css({"display":"block"});
            logo_sticky.css({"display":"none"});
            sandwitch.css({"display":"block"});
            sandwitch_sticky.css({"display":"none"});
            text.css({"color":"white"});
        }

    });

});


//Landing Page Menu Toggle - Collapse

jQuery(document).ready(function($) {

    var sandwitch = $('#sc-landing-menu-sandwitch');

    //Οταν πατάς το sandwitch για να ανοίξει
    sandwitch.click(function(){
        console.log('ΠΑΤΗΘΗΚΕ');
    });

});

//Smooth Scroll
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});



//Landing Page Menu Toggle - Collapse

jQuery(document).ready(function($){

    var itempressed = $('.sc-landing-menu-mobile-item-pressed');
    var menuopen =   $('.sc-landing-menu-sandwitch');
    var menuclose =   $('.sc-landing-menu-mobile-close');
    var mobilemenu =$('.sc-landing-menu-mobile-holder');

    //Οταν θέλω να ανοιξω το μενου

    menuopen.click(function(){
        mobilemenu.css({"display":"block"});
    });

    //Οταν θέλω να κλείσω το μενου

    menuclose.click(function(){
        mobilemenu.css({"display":"none"});
    });

    //Οταν θέλω να πατησω σε ενα αντικειμενο του μενου

    itempressed.click(function(){
        mobilemenu.css({"display":"none"});
    });
});
