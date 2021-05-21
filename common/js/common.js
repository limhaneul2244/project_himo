//main page_gnb_bottom_Slide 개별li마다 나타나게 하는것
// $(document).ready(function(){
//     $("#gnb_bottom>ul>li").mouseover(function(){
//         $(this).children(".sub_menu").stop().slideDown();
//     });
//     $("#gnb_bottom>ul>li").mouseout(function(){
//         $(this).children(".sub_menu").stop().slideUp();
//     });
// });

// $(document).ready(function(){
//     $("header").hover(function(){
//         $().show()
//     })
// })

//header slide Up, Down
$(document).ready(function () {
    $("#gnb_bottom").hover(function () {
            $(".sub_menu").stop().fadeIn(2000);
            $("#slide_box").stop().slideDown();
        },
        function () {
            $(".sub_menu").stop().fadeOut('slow');
            $("#slide_box").stop().slideUp();
        });
});
//----------------------------------------------------

//비디오 자동재생
document.getElementById("vid").play();
//----------------------------------------------------

//footer family site URL (새창열기)
function copyURL(url) {
    if (url) {
        window.open(url);
    }
}
//----------------------------------------------------
