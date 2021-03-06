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

    $(tabbar).eq(0).find('a').click(function(e){
        e.preventdefault();
        
        $(content02).stop().fadeOut('fast');
        $(content01).stop().fadeIn('fast');
        $(tabbar).eq(1).removeClass('active');
        $(tabbar).eq(0).addClass('active');
    });

    $(tabbar).eq(1).find('a').click(function(e){
        e.preventdefault();  
        
        $(content01).stop().fadeOut('fast');
        $(content02).stop().fadeIn('fast');
        $(tabbar).eq(0).removeClass('active');
        $(tabbar).eq(1).addClass('active');
    });
    
});
