<?php

include_once "lib/php/print_o.php";
include_once "db_connect.php";

?><!DOCTYPE html>
<html lang="en">
<head>
    <title>Product Details - Bones of Scent</title>

    <?php include "partials/head.html"; ?>

    <link rel="icon" type="image/gif" href="image/b_logo_black1.png"/>
    <link type="text/css" rel="stylesheet" href="css/common.css"/>
    <link type="text/css" rel="stylesheet" href="css/theme.css"/>
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Parisienne|Cormorant+Garamond" rel="stylesheet">


</head>
<body>


<?php include "partials/header.html"; ?>
<br>


<div class="content" align="center">

    <div class="center" align="center">
        <div class="dual-box">
            <div class="container flex-parent">
                <?php

                if(!isset($_GET['id'])) {
                    echo "cannot get id";
                } else {

                $query_string = "SELECT * FROM `products` WHERE `id` = '{$_GET['id']}'";
                $result = $conn->query($query_string);

                if($conn->errno) die($conn->error);

                $row = $result->fetch_object();

                // the explode function makes an array
                $exploded_images = explode(",",$row->image);

                // show the data after it's all ready

                ?>

                <div class="box">
                    <img src="<?= $row->image?>" alt="prdctImage">

                </div>
                <br>
                <div class="box">

                        <h2><?= $row->name?></h2>
                        <h4>
                            <?= $row->slogan?>
                        </h4>
                        <br>
                        <h5>1 dozen for $<?= $row->price?></h5>
                        <label>
                            <select>
                                <option value="0">0</option>
                                <option selected="selected" value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </label>
                        <button class="add">
                            ADD TO BASKET
                        </button>
                        <div class="mysql-description" align="left">
                            <?= $row->description ?>
                        </div>
                </div>
            </div>
            <?php

            }
            ?>


        </div>


    <br><br><br>
        <?php include "partials/footer.html";
        ?>
    </div>
</div>

<script type="text/javascript" src="https://code.jquery.com/jquery-compat-git.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

<script>
    $(function () {
        $(".toggle input").on("change", function () {
            $(".total-toggles").html($(".toggle input:checked").length)
        })
    })
</script>
<script type="text/javascript" src="js/nav.js"></script>

</body>
</html>

