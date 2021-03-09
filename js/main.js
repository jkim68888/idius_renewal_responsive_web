//popup
$(document).ready(function(){
    
    function setCookie(name, value, expiredays){
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';';
    }
    
    var popup = '.popup';
    var close = '#close';
    var chkbox = '#chkBox';
   
    $(close).click(function(){
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
    });

    $(chkbox).click(function(){
        setCookie('exCookie','done',1); 
        $(popup).stop().fadeOut(0);
        $('html, body').css('overflow','visible');
    });        
    
    var cookieData = document.cookie;
    
    if(cookieData.indexOf('exCookie=done') < 0){
        $(popup).fadeIn(0);
        $('html, body').css('overflow','hidden');
    }else{
        $(popup).fadeOut(0);
        $('html, body').css('overflow','visible');
    }
    
}); 


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

//review
$(document).ready(function(){
    var swiper = new Swiper('.review .swiper-container', {
        slidesPerView: 3.2,
        spaceBetween: 20,
        // init: false,
        breakpoints: {
          768: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.5,
            spaceBetween: 30,
          },
        },
        navigation: {
            nextEl: '.review .swiper-button-next',
            prevEl: '.review .swiper-button-prev',
            clickable: true,
        },
    });
});
