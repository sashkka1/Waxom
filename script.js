$(document).ready(function(){
    $('.header-burger').click(function (){
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function(){
    $(".scroll-img-scrol").owlCarousel({
        items: 3
    }
    );
});