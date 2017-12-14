$(document).ready(function(){
    $(".menu").find("a").click(function(){
        var _target =$(this).data("name");
        console.log(_target);
        
        var _offset =$("#"+_target).offset().top;
        console.log(_offset);
        
        $("html,body").animate({
            scrollTop:_offset
        },800);
        return false;
    })
    
    $("#gotop").click(function(){
        var _target =$(this).data("name");
        console.log(_target);
        
        var _offset =$("#toparea").offset().top;
        console.log(_offset);
        
        $("html,body").animate({
            scrollTop:_offset
        },800);
        return false;
    })
    
    $("#gotop").hide();
    $(window).scroll(function(){
        var q = $(window).scrollTop();
        console.log(q);
        
        if(q>800){
            $("#gotop").fadeIn();
        }else{
            $("#gotop").fadeOut();
        }
    })
    
    
})