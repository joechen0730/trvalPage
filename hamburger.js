 
$(document).ready(function(){
        $(".hamburger").click(function(){
            $(".hamburger").toggleClass("hamburger-x");
            $(".menu").slideToggle();
        })
     $(window).resize(function(){
         console.log($(window).width());
         var w = $(window).width();
         
         
         if(w>600){
             $(".menu").show();
         }else if(w<600){
             $(".menu").hide();
             $(".hamburger").removeClass(".hamburger-x");
         }
     })
    })