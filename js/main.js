$(document).ready(function () {
    $nav = $('.nav');
    $togglecollapse = $('.toggle-collapse');

    /* click even on toggle menu*/
    $togglecollapse.click(function () {
        $nav.toggleClass('collapse');
    });

    /* owl craousel */
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
    });
    
    /* scroll top*/

    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })
});