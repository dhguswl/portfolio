var slideIndex = 0;
function slideAuto(){
    $(".backimg>li").removeClass("topImg");
    // .backimg안에 있는 모든 li에 접근 한 후 거기에 topImg클래스가 있다면 지워 버려라
    slideIndex++;
    var isIdx = slideIndex % 3;
    $(".backimg>li").eq(isIdx).addClass("topImg");
}

var slideCall = setInterval("slideAuto()", 2000);

$(".backimg").hover(function(){
    clearInterval(slideCall);
},function(){
    slideCall = setInterval("slideAuto()",2000);
});

$(function(){
    $("#gnb>li").hover(function(){
        $(this).children(".sub").stop().slideDown(800); //fadeIn,fadeOut사용 가능
    },function(){
        $(this).children(".sub").stop().slideUp(800);
    });
});

$(function(){
    $("#menu").click(function(){
        $(this).toggleClass("aniMenu");
        $("#gnb").fadeToggle(100);
    });
});
