//main
$(document).ready(function(){
    var swiper = new Swiper('main .swiper-container', {
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: 'main .swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
        navigation: {
            nextEl: 'main .swiper-button-next',
            prevEl: 'main .swiper-button-prev',
            clickable: true,
        },
    });
});


//today_best
$(document).ready(function(){
    var tabbar = '.today_best .tabbar li';
    var content01 = '.today_best .contents01';
    var content02 = '.today_best .contents02';

    $(content02).stop().fadeOut(0);
    $(content01).stop().fadeIn(0);
    $(tabbar).eq(1).removeClass('active');
    $(tabbar).eq(0).addClass('active');

    $(tabbar).eq(0).find('a').click(function(e){
        e.preventDefault();
        
        $(content02).stop().fadeOut(0);
        $(content01).stop().fadeIn(0);
        $(tabbar).eq(1).removeClass('active');
        $(tabbar).eq(0).addClass('active');
    });

    $(tabbar).eq(1).find('a').click(function(e){
        e.preventDefault();
        
        $(content01).stop().fadeOut(0);
        $(content02).stop().fadeIn(0);
        $(tabbar).eq(0).removeClass('active');
        $(tabbar).eq(1).addClass('active');
    });
    
});
