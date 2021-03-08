//aside
$(document).ready(function(){
    var btn = '.top_btn a';
    var easing = 'easeOutQuart'; 
    
    $(window).scroll(function(){
        
        var top = $(window).scrollTop(); 
        
        if(top > 200){
            $(btn).parent().stop().fadeIn(600);
        }else{
            $(btn).parent().stop().fadeOut(600);
        }
        
    });
    
    $(btn).click(function(e){
        
        e.preventDefault(); 
        
        $('html, body').stop().animate({
            scrollTop: 0
        },1200,easing);
        
    });

});

//gnb
$(document).ready(function(){
    var main = 'header .main_nav';
    var sub = 'header .sub_nav';
    var open = 'header .panel_ico';
    var close = 'header .close_btn';
    
    //pc이벤트함수
    function pcGnb(){
        $(main).off('click');
        
        $(main).hover(function(){
            $(this).next().stop().slideDown('fast'); 
        },function(){
            $(this).next().stop().slideUp('fast'); 
        });
    }
    
    
    //모바일이벤트함수
    function mGnb(){
        $(main).off('mouseenter');
        $(main).off('mouseleave');
        
        $(open).find('a').click(function(){
            $(this).addClass('active');
        });

        $(close).find('a').click(function(){
            $(this).addClass('active');
        });
        
        $(main).off('click');

        $(main).click(function(){
            $(sub).stop().slideUp('fast');
            $(this).next().stop().slideDown('fast'); 
        },function(){
            $(this).next().stop().slideUp('fast'); 
        });
        
    }
    
    $(window).resize(function(){
        $(open, close).removeClass('active');
        $(sub).slideUp(0);
        
        var w = window.innerWidth; 
        
        if(w >= 1024){ 
            pcGnb();
        }else{ 
            mGnb(); 
        }
    });
    
    $(window).trigger('resize');
    
});


