<?php

include_once "lib/php/print_o.php";
include_once "db_connect.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Product Details - Bones of Scent</title>

    <?php include "partials/head.html"; ?>

    <link rel="icon" type="image/gif" href="image/b_logo_black1.png"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link type="text/css" rel="stylesheet" href="css/common.css"/>
    <link type="text/css" rel="stylesheet" href="css/theme.css"/>
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Parisienne|Cormorant+Garamond" rel="stylesheet">
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/admin.js"></script>
    <link type="text/css" rel="stylesheet" href="css/admin.css"/>

</head>
<body>

<?php include "partials/header.html"; ?>


<!--<a href="AddNewItem.php">add a new item</a>-->
<br>
<div align="center">
    <br>
    <div class="adm-content" align="left">
        <h2 id="top"><a href="#" class="fa fa-user"></a>&nbsp;Administration <br> - review current product details -</h2>
        <br>
        <hr>

        <?php

        $query_string = "SELECT * FROM `products` ORDER BY `date_create` DESC LIMIT 99";
        $result = $conn->query($query_string);

        if($conn->errno) die($conn->error);

        while($row = $result->fetch_object()){
            // print_o($row);
            ?>
            <div class="admin-current" align="left">
                <h3>&#10070; id:<?= $row->id ?></h3>
                <h3>&#10070; Product: <?= $row->name ?></h3>
                <form id="currentData">
                    Slogan: <input type="text" name="slogan" value="<?= $row->slogan ?>"/><br>
                    Price: <input type="text" name="price" value="<?= $row->price ?>"/><br>
                    Image: <input type="text" name="image" value="<?= $row->image ?>"/><br>
                    Description: <input type="text" name="description" value="<?= $row->description ?>"/><br>
                </form>
            </div>
            <?php
        }

        ?>

        <br>
        <hr>
        <br>
        <br>

        <h2><a href="#" class="fa fa-user"></a> &nbsp;Administration <br> - add new items - </h2>
        <div class="admin-big-new" align="left">
            <div class="admin-new" align="left">
                <form id="addForm" action="AddNewItem.php" method="post">
                <!--    id: <input type="text" name="id" /><br>-->
                    Product Name : <input type="text" name="name" /><br>
                    Slogan: <input type="text" name="slogan" /><br>
                    Price: <input type="text" name="price" /><br>
                    Image: <input type="text" name="image" /><br>
                    Description: <input type="text" name="description" /><br>
                    <button id="sub">Confirm to Add New Item</button>
                </form>
            </div>
        </div>
        <!--<span id="addResult"></span>-->
        <div align="right" style="margin-right: 30px">
            <a href="#top">Back to top</a>
        </div>
    </div>
    <br><br>
</div>
<?php include "partials/footer.html"; ?>

</body>
</html>
