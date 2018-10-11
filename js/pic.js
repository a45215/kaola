var num=0;
var timer=null;
var timeout=null;
// 设置鼠标悬浮在按钮切换事件
$(".pic ul li a").mouseenter(function(event){
    //设置定时器前应先判断有没有定时器，有就清除
    if(timeout){
        clearTimeout(timeout);
        timeout=null;
    }
    num=$(this).parent().index();
    //设置悬浮时500毫秒时切换，不足500毫秒时不会切换
    timeout=setTimeout(changgeMg,500);
    return false;
})
//悬浮在窗口时停止轮播
$(".pic").mouseenter(function(){
    //清除定时器
    clearInterval(timer);
})
//鼠标移除窗口时开始轮播
$(".pic").mouseleave(function(){
    clearTimeout(timeout);
    //设置一个3秒的自动轮播定时器
    timer=setInterval(changeTab,5000);
})
//点击next切换
$(".pic .next").click(function(){
    //设置定时器前应先判断有没有定时器，有就清除
    if(timeout){
        clearTimeout(timeout);
        timeout=null;
    }
    if(num<2){
        num++;
    }else{
        num=0;
    }
    //设置点击后500毫秒去切换，如果点击间隔小于500毫秒不停点击则不会切换
    timeout=setTimeout(changgeMg,500);
    //不让a元素去默认跳转
    return false;
})
//点击prev切换
$(".pic .prev").click(function(){
    if(timeout){
    clearTimeout(timeout);
    timeout=null;
    }
    if(num>0){
        num--;
    }else{
        num=2;
    }
    //设置点击后500毫秒去切换，如果点击间隔小于500毫秒不停点击则不会切换
    timeout=setTimeout(changgeMg,500);
    return false;
})
//轮播定时器
timer=setInterval(changeTab,5000);
//移动盒子和给当前索引上色
function changgeMg(){
    var movePx=num*-1345+"px";
    $(".pic .inner").animate({"marginLeft":movePx},500);
    $(".pic ul li").eq(num).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
}
//定时器函数    
function changeTab(){            
    if (num<2){                
        num++;
    }else{
        num=0;
    }
     changgeMg();
}