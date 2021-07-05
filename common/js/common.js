//header slide Up, Down
$(document).ready(function () {
    $("#gnb_bottom").hover(function () {
            $(".sub_menu").stop().fadeIn(100);
            $("#slide_box").stop().slideDown(100);

            let headerscroll = $(window).scrollTop(); //scroll (화면에 보이는 우측 스코롤) scrollTop(화면의 보이는 세로 높이)
            if (headerscroll > 100) { //스크롤 높이가 10이 넘어갈 경우 active 실행
                $("#slide_box, #header").css({'background-color': 'rgba(0, 0, 0, 0.678)'}); //검정

            } else { //100보다 작을경우 active 제외
                $("#slide_box, #header").css({'background-color': 'rgb(255, 255, 255, 0.7)'});//흰색
            }
        },
        function () {
            $(".sub_menu").stop().fadeOut(100);
            $("#slide_box").stop().slideUp(100);
            $("#slide_box, #header").css({'background-color': ''}); //색상 미지정
        });
});
//----------------------------------------------------

//video auto play
$(document).ready(function () {
    document.getElementById("vid").play();
});

//----------------------------------------------------

// top_btn
$(document).ready(function () {

    $("#top_btn").click(function () { //top버튼 클릭시 이동
        $("html,body").stop().animate({
            "scrollTop": 0
        }, 1000); //html, body 태그 기점으로 1.4초 정도 위로 이동
    });
    $(window).on("scroll", function () {
        let scroll = $(window).scrollTop(); //윈도우창의 화면 높이를 측정해서
        if (scroll >= 1100) { //측정 높이가 1080이 넘어가면 기능을 수행해라
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