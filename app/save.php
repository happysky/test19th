<?php
include("config.php");

$name = htmlspecialchars($_POST['name'], ENT_QUOTES);
$result = array(
    "state"=>0
);

$canAdd = false;

//echo 'a';
//用户名为空时直接返回
if(!$name){
    //echo 'b';
    echo json_encode($result);
    return false;
}

if ($mysql_connection) {

    $query = "select * from user where name = '".$name."'";

    $select_result = $mysql_connection->query($query);
    
    if(!$select_result){
        echo json_encode($result);
        return false;
    }

    if(!mysqli_num_rows($select_result)){
        //echo 'c';
        $canAdd = true;
    }else{
        //echo 'd';
        $now_timestamp = time();
        //是否正在答题
        $is_used = false;
        while($row = $select_result->fetch_assoc()){
            //echo 'e';
            if($row['state'] == 0){
                //echo 'f';
                if($now_timestamp - $row['time'] < 310){ //前端限定5分钟内答完题，后端限制用户注册后310s没提交的将用户视为无效用户
                    $is_used = true;
                }
            }else{//用户名已经被占用
                $is_used = true;
            }
        }

        //没有用户正在答题，则可以使用当前用户名
        if(!$is_used){
            $canAdd = true;
        }
    }

    //重复用户
    if(!$canAdd){
        //echo 'g';
        echo json_encode($result);
        return false;
    }


    $insert = "INSERT INTO user (id, name, score, state, time) VALUES (NULL, '". $name ."', '0', 0, UNIX_TIMESTAMP())";

    $insert_result = $mysql_connection->query($insert);

    if(!$insert_result){
        //echo 'h';
        //die('无法插入数据: ' . mysqli_error($mysql_connection));
        $result["state"] = 0;
    }else{
        //echo 'i';
        $result["state"] = 1;
    }

    echo json_encode($result);

}

?>