<?php
include("config.php");

$result = [];
$list = [];

if ($mysql_connection) {

    $query = "select name,score,from_unixtime(time,'%Y-%m-%d %H:%i:%S') as time from user where state=1 order by score desc,time asc";

    $select_result = $mysql_connection->query($query);

    if(!$select_result){
        $result["state"] = 0;

    }else{
        while($row = $select_result->fetch_assoc()){
            $list[] = array(
                'name' => $row['name'],
                'score' => $row['score'],
                'time' => $row['time']
            );
        }
        $result['list'] = $list;

        $result["state"] = 1;
    }   

    

    echo json_encode($result);

}

?>