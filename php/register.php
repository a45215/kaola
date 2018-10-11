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
    $password=$json->password;
    $sql="select * from shop_user where username='$username'";
    $insert_sql="insert into shop_user (username,password) values ('$username','$password')";
    $conn=new db();
    $rows=$conn->Query($sql,2);
    if($rows){
        $arr=array("code"=>"1000","msg"=>"用户名已经存在,注册不成功");
    }else{
        $result=$conn->Query($insert_sql,3);
        if($result){
            $arr=array("code"=>"200","msg"=>"");
        }else{
            $arr=array("code"=>"1001","msg"=>"注册失败，未知原因");
        }
    }
    echo json_encode($arr);
?>