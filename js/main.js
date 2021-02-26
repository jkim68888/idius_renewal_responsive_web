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
