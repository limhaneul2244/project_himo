//header slide Up, Down
$(document).ready(function () {
    $("#gnb_bottom").hover(function () {
            $(".sub_menu").stop().fadeIn(100);
            $("#slide_box").stop().slideDown(100);
        },
        function () {
            $(".sub_menu").stop().fadeOut(100);
            $("#slide_box").stop().slideUp(100);
        });
});
//----------------------------------------------------

//video auto play
$(document).ready(function(){
    document.getElementById("vid").play();
});

//----------------------------------------------------

// top_btn
$(document).ready(function(){

    $("#top_btn").click(function(){  //top버튼 클릭시 이동
        $("html,body").stop().animate({"scrollTop":0},1000); //html, body 태그 기점으로 1.4초 정도 위로 이동
    });
    $(window).on("scroll",function(){
        let scroll = $(window).scrollTop(); //윈도우창의 화면 높이를 측정해서
        if(scroll>=1100){  //측정 높이가 1080이 넘어가면 기능을 수행해라
            $("#top_btn").fadeIn('slow'); //1000이 넘어가면 버튼을 천천히 보여라
        } else {
            $("#top_btn").fadeOut('slow'); //1000이 넘어가지 않으면 화면에서 버튼 숨겨
        }
    });
});
//----------------------------------------------------

//footer family site URL (새창열기)
function copyURL(url) {
    if (url) {
        window.open(url);
    }
};
//----------------------------------------------------
