<?php
define("SAE_MYSQL_HOST_M", "w.rdc.sae.sina.com.cn");
define("SAE_MYSQL_PORT", "3306");
define("SAE_MYSQL_USER", "nojwkxn20w");
define("SAE_MYSQL_PASS", "1w05z43z1ixm3wwx3yy5iy43y1h20yij4zlmjijk");
define("SAE_MYSQL_DB", "app_cehsi");

// 连主库
$db = mysql_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);

// 连从库
// $db = mysql_connect(SAE_MYSQL_HOST_S.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);

if ($db) {
    mysql_select_db(SAE_MYSQL_DB, $db);

    $query = "select * from user where name = '测试'";

    $result = mysql_query($query);

    while ($row = mysql_fetch_row($result)) {
        //取出结果并显示
        $name = $row[0];
        $age = $row[1];
        echo "Name: $name Age: $age \n";
    }

    // ...
}

?>