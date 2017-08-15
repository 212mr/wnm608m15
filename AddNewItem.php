<!--LEARN FROM -- https://gordoncluster.wordpress.com/2013/09/18/how-to-insert-data-into-mysql-database-using-jquery-ajax-php/-->


<!DOCTYPE html>
<html lang="en">
<head>
    <title>Product Details - Bones of Scent</title>

    <?php include "partials/head.html"; ?>

    <link rel="icon" type="image/gif" href="image/b_logo_black1.png"/>
    <link type="text/css" rel="stylesheet" href="css/common.css"/>
    <link type="text/css" rel="stylesheet" href="css/theme.css"/>
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Parisienne|Cormorant+Garamond" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/admin.js"></script>
    <link type="text/css" rel="stylesheet" href="css/admin.css"/>

</head>
<body>

<?php include "partials/header.html"; ?>


<?php

// include, include_once, require, require_once
include "db_connect.php";

$id = $_POST['id'];
$name = $_POST['name'];
$slogan = $_POST['slogan'];
$price = $_POST['price'];
$image = $_POST['image'];
$description = $_POST['description'];

$insert_sql = "INSERT INTO `products`
 (
 id,
 name, 
 slogan, 
 price, 
 image, 
 description, 
 date_create
 ) 
 
 VALUES 
 (
 NULL,
 '$name',
 '$slogan', 
 '$price',
 '$image', 
 '$description',
 NOW()
 )
 ";

//echo $insert_sql;
if ($conn->multi_query($insert_sql) === TRUE) {
    echo "<br><br><br><br><br><h3 align='center'> New Item Insert Successfully!</h3>
";
} else {
    echo "Error: " . $insert_sql . "<br>" . $conn->error;
}
?>

<div align="center">
<button><a href="productall.php">Back to SHOP</a></button>
<button><a href="admin.php">Back to Administration</a></button>
</div>

</body>








