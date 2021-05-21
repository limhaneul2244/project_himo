//sub page1_3D SCANNER_Slide


$(document).ready(function () {

    $(".gallery>ul").after($(".gallery>ul").clone()); //.gallery>ul뒤에 복제해서 붙여라
    let position = 0; //임의변수
    let movesize = parseInt($(".gallery span").css("width")) + parseInt($(".gallery span").css("margin-right")) //한개의 이미지 width값 기재함 (임의변동가능)
    let timeonoff; //자동재생하겠음
    let productBoxSize = parseInt($(".gallery").css("width")); //productBoxSize =4440

    timeonoff = setInterval(function () { //셋인터벌 함수를 timeonoff에 넣어라
        position -= movesize; //position 에 150을 빼서 왼쪽에 넣어라 즉 0-150 (-150씩 이동)
        $(".gallery").stop().animate({
            'left': position
        }, "normal", function () {
            if (position == -(productBoxSize / 2)) { //위치값이 -2220이 되면 (이미지의 전체너비값)
                $(".gallery").css('left', 0); //다시 처음(왼쪽)으로 돌아와라
                position = 0; //다 왼쪽으로 가면 다시 원위치
            }
        });
    }, 3000);
});



//sub page1_3D SCANNER_Slide
// let myImg=document.getElementById("slideImg");
// let imageArray=["../resource/slide_scanner_black.png","../resource/slide_scanner_white.png"];
// let slideIndex=0;

// function slideImage() {
//     myImg.setAttribute("src",imageArray[slideIndex]);
//     slideIndex++;
//     if(slideIndex>=imageArray.length){
//         slideIndex=0;
//     }
// }
// setInterval(slideImage, 3000);