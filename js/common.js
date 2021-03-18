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
    var panel = 'header .panel_bg';
    
    //pc이벤트함수
    function pcGnb(){
        $(main).off('click');
        
        $(main).hover(function(){
            $(this).next().stop().slideDown('fast'); 
        },function(){
            $(this).next().stop().slideUp('fast'); 
        });

        $(sub).hover(function(){
            $(this).stop().slideDown(0);
        },function(){
            $(this).stop().slideUp('fast');
        });
    }
    
    
    //모바일이벤트함수
    function mGnb(){
        $(main).off('mouseenter');
        $(main).off('mouseleave');
        $(sub).off('mouseenter');
        $(sub).off('mouseleave');
        
        $(open).find('a').click(function(){
            $(panel).stop().fadeIn('fast');
            $('html,body').addClass('active');
        });

        $(close).find('a').click(function(){
            $(panel).stop().fadeOut('fast');
            $('html,body').removeClass('active');
        });
        
        $(main).click(function(){
            var has = $(this).next().css('display');
            
            if(has == 'none'){
                $(sub).stop().slideUp('fast');
                $(this).next().stop().slideDown('fast'); 
            }else{
                $(sub).stop().slideUp('fast'); 
                $(this).next().stop().slideUp('fast'); 
            }
        });       
        
    }
    
    $(window).resize(function(){
        $(main).off('click');
        $(sub).slideUp(0);
        
        var w = window.innerWidth; 
        
        if(w >= 1024){ 
            $(panel).stop().fadeIn(0);
            pcGnb();
        }else{ 
            $(panel).stop().fadeOut(0);
            mGnb(); 
        }
    });
    
    $(window).trigger('resize');
    
});


//ranking
$(document).ready(function(){
    var list = 'header .mouse_out ul'; 
    var ranking = 'header .ranking';
    var h = $(ranking).find('li').outerHeight();

    console.log(h);

    $(ranking).addClass('mouse_out');
   
    //ossam's
    $(list).find('li:first a').attr('tabindex','0');


    var topMove = function(){
  
        $(list).stop().animate({
            top: '-=' + h
        },'fast',function(){
            
            $(list).find('li').first().appendTo(list);
            
            $(list).css('top',0);
            
            $(list).find('li a').attr('tabindex','-1');
            $(list).find('li:first a').attr('tabindex','0'); 
        });
    }

    var autoMove = setInterval(topMove,3000);

    $(ranking).mouseenter(function(){
        $(this).removeClass('mouse_out');
        $(this).addClass('mouse_on');
        clearInterval(autoMove);
        
        for(var i=0; i<=5; i++){
            $(ranking).find('li[data-index=' + i + ']').appendTo($(ranking).find(' > ul'));
        }
    });

    $(ranking).mouseleave(function(){
        $(this).removeClass('mouse_on');
        $(this).addClass('mouse_out');
        autoMove = setInterval(topMove,3000);
    });
 
    
    

});