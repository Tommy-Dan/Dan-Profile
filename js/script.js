$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar while scrolling
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scrolling up button to show and hide
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // sliding up to the start of the page
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});

        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){

        // applying again the smooth scroll on menu items when clicked
        $('html').css("scrollBehavior", "smooth");
    });

     // toggling nav-menu and navbar
     $('.menu-btn').click(function(){
        $('.navbar .nav-menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});