<?php
include("config.php");

$name = htmlspecialchars($_POST['name'], ENT_QUOTES);
$score = htmlspecialchars($_POST['score'], ENT_QUOTES);
$result = array(
    "state"=>0
);


//用户名为空时直接返回
if(!$name){
    echo json_encode($result);
    return false;
}

//分数是否为整数
if(!is_numeric($score)){
    echo json_encode($result);
    return false;
}

if ($mysql_connection) {
    $now_timestamp = time();
    $query = "update user set score=". $score .",state=1 where score=0 and state=0 and name='". $name ."' and time > ". ($now_timestamp - 310);

    
    $update_result = $mysql_connection->query($query);

    if(mysqli_affected_rows($mysql_connection) > 0){
        $result["state"] = 1;
    }

    echo json_encode($result);

}

?>