$(function(){
    $(".gnb>li").hover(function(){
        $(this).children(".gnb_2deps").stop().slideDown(500);
    },function(){
        $(this).children(".gnb_2deps").stop().slideUp(500);
    });
    $(".gnb_2deps>li").hover(function(){
        $(this).parents("li").css("background-color","#37466c");
    },function(){
        $(this).parents("li").css("background-color","#1c4199");
    });
});