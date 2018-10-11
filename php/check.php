<?php
     // 获取用户名
    // 返回的数据类型为json结构
    header("Content-Type: application/json");
    // 允许所有域名跨域
    header("Access-Control-Allow-Origin:*");
    include "public/connect_db.php";
    // 获取传输的json字符串
    $json = json_decode(file_get_contents("php://input"));
    $username=$json->username;
    $sql="select * from shop_user where username='$username'";
    $conn=new db();
    $rows=$conn->Query($sql,2);
    if($rows){
        $arr=array("code"=>"1000","msg"=>"用户名已经存在");
    }else{
        $arr=array("code"=>"200","msg"=>"");
    }
    echo json_encode($arr);
?>