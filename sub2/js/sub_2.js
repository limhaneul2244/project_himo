//sub2 lnb

$(document).ready(function(){
    $('.lnb .lnb_con1').show(); //메뉴1의 내용을 보임

    $('.lnb li').click(function(){ //li를 클릭하면 다음을 실행
        let ind = $(this).index(); //ind변수 선언. 
        $('.lnb li>a').removeClass();//li아래 a에 있는 클래스 모두 지워(비활성화)
        $('a',this).addClass('current');//내가 선택한 a만 활성화
        $('.lnb div').hide(); //tab아래 div는 숨겨
        $('.lnb_con'+(ind+1)).show(); //클릭한 메뉴만 활성화해라 tab_con에다가 ind+1을 연결()
    }); 
});
