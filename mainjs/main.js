// //main_page 제품소개 slide
let gall = setInterval(main_Gallery, 2000);
let inter = true;
let idx = 0;

function main_Gallery() {
    if (idx < $(".main_Gallary .product_box li").length) {
        $(".main_Gallary .product_box").animate({
            "left": -370 * idx + "px"
        }, 500);
        idx++;
    } else {
        $(".main_Gallary .product_box").animate({
            "left": 370 + "px"
        }, 500);
        idx = 0;
    }
}
$(".main_Gallary").hover(function () {
    if (inter == true) { //값이 같은지?
        clearInterval(gall); //값이 같다면 2초 동안 작업 중지
        inter = false; //거짓이면 다음으로 넘어가
    }
}, 
    function () {
    if (inter == false) { //inter가 거짓이면
        gall = setInterval(main_Gallery, 2000); //main_Gallery 2초동안 실행
        inter = true;
    }
});
