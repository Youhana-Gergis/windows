$(document).ready(function () {
    $('#win').click(function(){
        $('.fixed-menu').slideToggle(250);
    });
    $('#powers').click(function(){
        $('.power-nav').slideToggle(100);
    });
    $('.ic').click(function(){
        $('.power-nav').slideToggle(100);
    });
    $('#profiles').click(function(){
        $('.profile-nav').slideToggle(100);
    });
    $('#more').click(function(){
        $('.element-search').fadeToggle();
    });
    $('#search').click(function(){
        $('.search-fix').fadeToggle();
    });
    $('#exit').click(function(){
        $('.search-fix').fadeOut();
    });

});
$(document).ready(function(){
    $('#notification').click(function(){
        $('.fix-noti').slideToggle(250);
    });
});
$(document).ready(function(){
    $('.fix-min').mousemove(function(){
        $('.ic').fadeIn(0)
    });
    $('.fix-min').mouseleave(function(){
        $('.ic').fadeOut(10)
    });
});
