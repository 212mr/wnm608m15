<?php
/**
 * Created by PhpStorm.
 * User: mengruzhang
 * Date: 2017/8/1
 * Time: 下午4:06
 */

//host name
$db_host = "localhost";

//user name
$db_name ="wnm608mengruzhan";

//the mysql pass: wnm608mengruzhang/j44030116985
$db_pass="j44030116985";

//name of your custom database
$db_base="wnm608mengruzhang";


//start a cinnection to database

$conn = new mysqli(
    $db_host,
    $db_name,
    $db_pass,
    $db_base
);

if($conn->connect_errno) die($conn->connect_errno);


