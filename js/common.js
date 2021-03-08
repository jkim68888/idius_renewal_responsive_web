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