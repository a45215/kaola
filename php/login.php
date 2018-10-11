<?php
	 // 返回的数据类型为json结构
     header("Content-Type: application/json");
     // 允许所有域名跨域
     header("Access-Control-Allow-Origin:*");
    include "public/connect_db.php";
    $json = json_decode(file_get_contents("php://input"));
    $username=$json->username;
    $password=$json->password;
    $sql="select * from shop_user where username='$username' and password='$password'";
    $conn=new db();
    $rows=$conn->Query($sql,2);
    if($rows){
        //输入正确;
        $arr=array("code"=>"200","msg"=>"","date"=>array("id"=>$rows["id"]));
    }else{
        //输入错误;
        $arr=array("code"=>"1000","msg"=>"输入错误，用户名或者密码错误");
    }
    echo json_encode($arr);
?>