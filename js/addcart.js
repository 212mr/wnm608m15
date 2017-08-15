/**
 * Created by mengruzhang on 7/11/17.
 */


// document.addEventListener("DOMContentLoaded", function(event) {
//     //do work
// });

function calculatePrice() {
    var total_price = 0;
    var all_item_selects = document.getElementsByClassName("cart_items");
    for (var i = 0; i < all_item_selects.length; i++) {
        var each_select = all_item_selects[i]; // Element
        var each_price = each_select.getAttribute("each_price"); // int
        var item_id = each_select.getAttribute("item_id");
        var item_num = each_select.value; // int
        var current_item_price = each_price * item_num;
        document.getElementById("price" + parseInt(item_id)).innerHTML =
            "$" + parseInt(current_item_price) + ".00";
        total_price += current_item_price;
    }
    document.getElementById("total_price").innerHTML = parseInt(total_price) + ".00";
}



