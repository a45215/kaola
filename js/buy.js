$(".buy").click(function(){
    var s=document.getElementById("vl");
    localStorage.username=s.value;
    location.assign("car.html");
})
$(".subtract").click(function(){
    var n=$(".vl").val();
    if(n>1){
        n--;
    }else{
        n=1;
    }
    $(".vl").val(n);
});
$(".add").click(function(){
    var n=$(".vl").val();
    if(n>=99){
        n=99;

    }else{
        n++;
    }
    $(".vl").val(n);
})