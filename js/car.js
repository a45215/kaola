$(".vl").val(localStorage.username);//获取上个页面传来的值

$(".subtract").click(function(){ //减号
   var n= $(".vl").val();
   if(n>1){
        n--
   }else{
       n=1;
   }
   $(".vl").val(n);

   var m=$(".money").text();
   var mo=109*n;
   $(".money").text(mo);
   $(".total_value").text(mo);
   $(".gross").text(n);
})

$(".add").click(function(){//加号
    var n=$(".vl").val();
    if(n>=99){
        n=99;
    }else{
        n++;
    }
    $(".vl").val(n);
    var m=$(".money").text();
    console.log(n);
    var mo=109*n;
    $(".money").text(mo);
    $(".total_value").text(mo);
    $(".gross").text(n);
})

$(document).ready(function(){//页面载入是发生的
        var n=$(".vl").val();
        var m=$(".money").text();
        var mo=109*n;
        $(".money").text(mo);
        $(".total_value").text(mo);
        $(".gross").text(n);
});

$(".vl").mouseout(function(){//鼠标移出输入框时改变其它值
    var n=$(".vl").val();
    var m=$(".money").text();
    var mo=109*n;
    $(".money").text(mo);
    $(".total_value").text(mo);
    $(".gross").text(n);
});

$(".rm").click(function(){//删除
    $(".car_m ul").remove();
})
