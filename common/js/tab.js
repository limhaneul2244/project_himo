// 시각 장애인을 위한 키보드 tab 처리//
$(document).ready(function () {
        $('li.gnbmenu .depth').bind('focus', function () {
                $('li.gnbmenu ul').slideDown('normal');
                $('#slide_box').slideDown('fast');
        });
        $('li.tab5 li:last').find('a').bind('blur', function () {
                $('li.gnbmenu ul').slideUp('fast');
                $('#slide_box').slideUp('normal');
        });
});