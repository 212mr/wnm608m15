<?php
include "db_connect.php";

$search = (isset($_GET['search']))?
    //" WHERE '{$_GET['search']}' IN(description)":

    " WHERE description LIKE '%{$_GET['search']}%'":
    "";



$orderby=(isset($_GET['orderby']))?
    "ORDER BY `".$_GET['orderby']."` ".$_GET['direction']:
    "ORDER BY `date_create` desc";



$sql="SELECT * FROM `products` $search $orderby LIMIT 12";

$result=$conn->query($sql);
if($conn->errno) die($conn->error);

$output=array();
while($row=$result->fetch_object()){
    //array_push($output,$row);
    $output[]=$row;

}
echo json_encode($output);
die;

//JSON_UNESCAPED_UNICODE

