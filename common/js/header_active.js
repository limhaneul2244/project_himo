//header_active 

$(document).ready(function(){
    $(window).scroll(function(){ //내가 보고 있는 디바이스 기기의 윈도우에 아래의 기능을 선언함
        let headerscroll = $(this).scrollTop(); //scroll (화면에 보이는 우측 스코롤) scrollTop(화면의 보이는 세로 높이)
        let headerbg = $('#header');
        if(headerscroll > 100) { //스크롤 높이가 800이 넘어갈 경우 active 실행
            $(headerbg).addClass('active');
        }else{ //800보다 작을경우 active 제외
            $(headerbg).removeClass('active');
        }
    })
});