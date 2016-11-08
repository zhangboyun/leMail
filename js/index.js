// 处理搜索框下拉框的显示隐藏
(function () {
    var oSearchBox = document.getElementById('j_le_search'),
        oInput = oSearchBox.getElementsByTagName('input')[0],
        oUl = oSearchBox.getElementsByTagName('ul')[0],
        oSuperFir = oSearchBox.getElementsByTagName('a')[1],
        oSuperSec = oSearchBox.getElementsByTagName('a')[2];
    oInput.onfocus = function () {
        this.placeholder = '';
        oUl.style.display = 'block';
        oSuperFir.style.display = 'none';
        oSuperSec.style.display = 'none';
    };
    oInput.onblur = function () {
        this.placeholder = '定金50抵100';
        oUl.style.display = 'none';
        oSuperFir.style.display = 'block';
        oSuperSec.style.display = 'block';
    }
})();
/* 轮播图  */


$(function () {
// banner list的hover效果
    $('#j_banner_list').children('li').on('mouseover', function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        $('#j_banner_hover li').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    });
    $('#j_banner_list').children('li').on('mouseleave', function () {
        $(this).removeClass('cur');
        $('#j_banner_hover li').eq($(this).index()).css('display', 'none');
    });
    $('#j_banner_hover').children('li').on('mouseover', function () {
        $(this).css('display', 'block').siblings().css('display', 'none');
        $("#j_banner_list li").eq($(this).index()).addClass('cur').siblings().removeClass('cur');
    });
    $('#j_banner_hover').children('li').on('mouseleave', function () {
        $(this).css('display', 'none');
        $("#j_banner_list li").eq($(this).index()).removeClass('cur');
    });
// 5F 类似选项卡的效果
    $('#j_5F_conL').children('ul').children('li').on('mouseover', function () {
        $(this).addClass('curL').removeClass('le-contL-li').siblings().removeClass('curL').addClass('le-contL-li');
    });
// 8F 类似选项卡的效果
    $('#j_8F_cont').children('li').on('mouseover', function () {
        $(this).addClass('curMedia').siblings().removeClass("curMedia");
        $('#j_8F_contImg li').eq($(this).index()).addClass('curImg').siblings().removeClass('curImg');
    });
// toTop
    $('#j_toTop div').on('click', function () {
        $(document).scrollTop(0);
    });
    $(window).on('scroll', function () {
        $('#j_toTop div').css('display', 'block');
        if ($(window).scrollTop() == 0) {
            $('#j_toTop div').css('display', 'none');
        }
    });
// 右侧飘窗
    $('#j_tools').children('li').on('mouseenter', function () {
        $(this).addClass('curTool').siblings().removeClass('curTool').find('span').css('display', 'none');
        $(this).find('span').css('display', 'block');
    });
    $('#j_tools').children('li').on('mouseleave', function () {
        $(this).removeClass('curTool').find('span').css('display', 'none');
    });
//  楼层导航
    var oStair = document.getElementById('j_stair'),
        aStr = oStair.getElementsByTagName('li');
    var aStDiv = $('#j_story').find('.j-story-content');
    for (var i = 0; i < aStDiv.length; i++) {
        (function (n) {
            $(aStr).eq(n).on('click', function () {
                $(this).addClass('stairCur').siblings().removeClass('stairCur');
                $('body').animate({scrollTop: $(aStDiv).eq(n).offset().top - 100}, 200);
            })
        })(i)
    }
    $(window).on('scroll', function () {
        if ($("body").scrollTop() <= $("#j_le_1F").offset().top - 100) {
            $('.le-stair').addClass("le-ab-stair").removeClass('le-fixd-stair');
        } else {
            $('.le-stair').addClass("le-fixd-stair").removeClass('le-ab-stair');
        }
    });


    var oCommitBox=document.getElementById('j_commit'),
        oCommitUl=oCommitBox.getElementsByTagName('ul')[0],
        aCommitLi=oCommitUl.getElementsByTagName('li'),
        step=0;

    var autoTimer=setInterval(autoMove,2000);
    function autoMove(){
        step++;
        if(step>aCommitLi.length-2){
            $(oCommitUl).css('top',0);
            step=1;
        }
        $(oCommitUl).animate({top:-step*105},1000);
    }
});













