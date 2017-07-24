$(function(){
    var Mainindex=0;
	/*分页点击*/
    function change(index){
        $('.div_ul li').eq(index).css({'backgroundColor':'#FFFFFF'}).siblings('.div_ul li').css({'backgroundColor':'transparent'});
        $('.btns ul li').eq(index).css({'color':'#949393'}).siblings('.btns ul li').css({'color':'#FFFFFF'});
    }
    /*初始化*/
    change(0);
    $(".cent").eq(0).slideDown('slow/1000/fast').siblings('.cent').hide();
    /*导航条*/
	$('.btns ul li').click(function(){
		var index=$(this).index();
		$('.cent').eq(index).slideDown('slow/1000/fast').siblings('.cent').hide();
        change(index);
        Mainindex=index;
	}).mouseover(function(){
        var index=$(this).index();
        if(!$('.cent').is(':animated')){
            $('.btns ul li').eq(index).css({'fontSize':'20px'}).siblings('.btns ul li').css({'fontSize':'16px'});
        }
    }).mouseout(function(){
        var index=$(this).index();
        if(!$('.cent').is(':animated')){
            $('.btns ul li').eq(index).css({'fontSize':'16px'});
        }
    })
	/*按钮*/
	$('.div_ul li').on('click',function(){
		var index=$(this).index();
        if(!$('.cent').is(':animated')){
            $('.cent').eq(index).slideDown('slow/1000/fast').siblings('.cent').hide();
        }
        change(index);
        Mainindex=index;
	})
	/*项目里的切换*/
	function btn_pro(index){
        $('.first_div div').eq(index).css({'color':'#FC0505'}).siblings('.first_div div').css({'color':'#FFFFFF'});
    }
    btn_pro(0)
    $(".project").eq(0).slideDown('slow/1000/fast').siblings('.project').hide();;
    $('.first_div div').click(function(){
    	var index = ($(this).index())-1;
        $(".project").eq(index).slideDown('slow/2000/fast').siblings('.project').hide();
        btn_pro(index);
    });
    /*滚轮*/
    var scrollFunc = function (e) { 
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
            if (e.wheelDelta > 0) { //当滑轮向上滚动时  
               Mainindex--;
               if(Mainindex<0){
                    Mainindex=5;
                }
               $(".cent").eq(Mainindex).slideDown('slow/1000/fast').siblings('.cent').hide();
                 change(Mainindex);
            }  
            if (e.wheelDelta < 0) { //当滑轮向下滚动时  
                 Mainindex++;
                 if(Mainindex>5){
                    Mainindex=0;
                }
                 $(".cent").eq(Mainindex).slideDown('slow/1000/fast').siblings('.cent').hide();
                 change(Mainindex);
            }  
        } else if (e.detail) {  //Firefox滑轮事件  
            if (e.detail> 0) { //当滑轮向上滚动时  
                $(".cent").eq(Mainindex).slideDown('slow/1000/fast').siblings('.cent').hide();
                 change(Mainindex);
                 Mainindex--;
            }  
            if (e.detail< 0) { //当滑轮向下滚动时  
                $(".cent").eq(Mainindex).slideDown('slow/1000/fast').siblings('.cent').hide();
                 change(Mainindex);
                 Mainindex++;
            }  
        }  
    }  
    window.onmousewheel = scrollFunc;   
    
    
})