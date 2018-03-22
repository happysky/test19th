<?php
    define("SAE_MYSQL_HOST_M", "xx");
    define("SAE_MYSQL_PORT", "xx");
    define("SAE_MYSQL_USER", "xx");
    define("SAE_MYSQL_PASS", "xx");
    define("SAE_MYSQL_DB", "xx");
    
    // 连主库
    $mysql_connection = mysqli_connect(SAE_MYSQL_HOST_M.':'.SAE_MYSQL_PORT,SAE_MYSQL_USER,SAE_MYSQL_PASS);

    if (!$mysql_connection) {
        die("Database connection failed: " . mysqli_error($mysql_connection));
    }

    if ($mysql_connection) {
        $db_select = mysqli_select_db($mysql_connection, SAE_MYSQL_DB);
    }

    if (!$db_select) {
        die("Database selection failed: " . mysqli_error($mysql_connection));
    }
?>