
<?php


include_once "lib/php/print_o.php";
include_once "db_connect.php";

?><!DOCTYPE html>
<html lang="en">
<head>

    <title>My Cart - Bones of Scent</title>
    <?php include "partials/head.html"; ?>

    <link rel="icon" type="image/gif" href="image/b_logo_black1.png"/>
    <link type="text/css" rel="stylesheet" href="css/common.css"/>
    <link type="text/css" rel="stylesheet" href="css/theme.css"/>
    <link type="text/css" rel="stylesheet" href="css/cartpay.css"/>
    <script type="text/javascript" src="https://code.jquery.com/jquery-compat-git.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Parisienne|Cormorant+Garamond" rel="stylesheet">
    <!--<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>-->


</head>

<body style="background-color: rgb(238, 238, 238);" onload="calculatePrice()">


<?php include "partials/header.html"; ?>

<div class="content" align="center">
    <div class="center" align="center">
         <div class="cartall" align="center">

            <p align="left">
                We are proud to offer beautiful hand-arranged bouquets and fast, reliable delivery by one of our local
                florists located across the US. Every order is sent to a local florist as we believe that supporting our
                local businesses strengthens our communities. Our fresh flowers are delivered in a vase, ready to be enjoyed immediately, and we never pack the arrangement in a box to be shipped across the country. That's the Bones of Scent's difference!

            </p>
            <hr>

            <?php

            $query_string = "SELECT * FROM `products` WHERE `id` IN(7,9,11)";
            $result = $conn->query($query_string);

            if($conn->errno) die($conn->error);

            while($row = $result->fetch_object()){
            ?>

            <div class="cartone">
                <div class="cartimg">
                    <a href="product_item.php?id=<?= $row->id ?>">
                    <img src="<?= $row->image?>" alt="productImage">
                    </a>
                </div>

                <div class="cartdiscp">
                    <a href="product_item.php?id=<?= $row->id ?>">
                        <h3><?= $row->name?></h3>
                        <h4 id="<?= $row->id?>"><?= $row->price?>/ea</h4>
                    </a>
                </div>

                <div class="cartnumberadd" align="center">
                    <label>
                        <select class="cart_items" each_price=<?= $row->price?>
                                item_id=<?= $row->id?> onChange="calculatePrice()">
                            <option value=0>0</option>
                            <option selected="selected" value=1>1</option>
                            <option value=2>2</option>
                            <option value=3>3</option>
                            <option value=4>4</option>
                            <option value=5>5</option>
                            <option value=6>6</option>
                            <option value=7>7</option>
                            <option value=8>8</option>
                        </select>
                    </label>
                </div>
                <div class="cartprice" id="price<?= $row->id?>" align="center">
                    $<?= $row->price?>
                </div>
        </div>
            <br>
                <?php
            }
            ?>

<!--            </div>-->

            <br>
            <hr>
            <br>

        <div class="totalprice" align="right">
                <h2 class="totalPrice">SUBTOTAL: $<span id="total_price">0.00</span></h2>
                <h5>Sales tax, if any, is determined at checkout.</h5>

                <button class="check">
                    PROCEED TO CHECKOUT
                </button>
        </div>




    </div>
        <br><br>

        <?php include "partials/footer.html"; ?>
</div>

<script type="text/javascript" src="js/nav.js"></script>
<script type="text/javascript" src="js/addcart.js"></script>

</body>
</html>