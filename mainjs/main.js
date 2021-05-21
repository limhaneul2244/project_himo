// //main_page 제품소개 slide

$(document).ready(function () {

    $(".product").after($(".product").clone()); //.gallery>ul뒤에 복제해서 붙여라
    let position = 0; //임의변수
    let movesize = parseInt($(".product>li").css("width")) + parseInt($(".product>li").css("margin-right")) //한개의 이미지 width값 기재함 (임의변동가능)
    let timeonoff; //자동재생하겠음
    let productBoxSize = parseInt($(".product_box").css("width")); //productBoxSize =4440

    timeonoff = setInterval(function () { //셋인터벌 함수를 timeonoff에 넣어라
        position -= movesize; //position 에 150을 빼서 왼쪽에 넣어라 즉 0-150 (-150씩 이동)
        $(".product_box").stop().animate({
            'left': position
        }, "normal", function () {
            if (position == -(productBoxSize / 2)) { //위치값이 -2220이 되면 (이미지의 전체너비값)
                $(".product_box").css('left', 0); //다시 처음(왼쪽)으로 돌아와라
                position = 0; //다 왼쪽으로 가면 다시 원위치
            }
        });
    }, 2000);


    $('.btn').click(function(){

        clearInterval(timeonoff);  //슬라이드 멈춰
    
        let tar = $(event.target);  //tar은 target의 약자 event.target과 this는 유사함
        if(tar.is(".lft_wrap .arrow_lft_icon")){  //m1이면 왼쪽으로 계속 이동
            if (position == -(productBoxSize / 2)) {
                $(".product_box").css('left',0);
                position = 0;
            }
            position -= movesize;
            $(".product_box").stop().animate({'left':position},"normal");
        }
        else{
            if(position == 0){  //시작점이 po:0 으로 시작
                $(".product_box").css('left',-2220);
                position = -2220;
            }
            position += movesize;  //오른쪽버튼 누르면 150씩 오른쪽으로 이동
            $(".product_box").stop().animate({'left':position},"normal");
        }
    });
});

// parseInt : css속성을 속성값으로 변환해라 즉, 350px라는 문자를 350으로 뽑아라