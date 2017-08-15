// instantiate variables
// write functions

//http://hamiltondraws.com/smallcode/#ex9

as=function(a){var b=a.slice(0);b.sort(function(){return Math.random()-.5});return b}

function showData(arr,target,template_string){

    var output = "";

    var compiled = _.template(template_string);
    //https://lodash.com/docs/4.17.4#template

    for(var i in arr) {
        output += compiled(arr[i]);
    }

    $(target).html(output);
}

function doSearch() {
    console.log("honk");
    $.ajax({
        dataType: "json",
        url: "data_feed.php?search=" + $(".js-search").val()
    })
        .done(function (d) {
            showData(
                d,
                ".brief",
                $("#product-item-template").html()
            );
        })
}




$(function(){
    $.ajax({
        url:"data_feed.php",
        dataType:"json"
    })
        .done(function(data){
            console.log("success",data);

            // var reversed = data.reverse();
            //var rand = as(data);

            showData(
                data,
                ".brief",
                $("#product-item-template").html()
            );
        });
    // .fail(function(data){
    // 	console.log("failure",data);
    // })
    // .always(function(data){
    // 	console.log("always",data);
    // })

    //$(".js-sortdata").on("click",function(){



    $(".js-sortdata").change(function(){
        $.ajax({
            url:"data_feed.php?orderby=" + $('option:selected', this).data("sort") + "&direction=" + $('option:selected', this).data("order"),
            dataType:"json"
        })
            .done(function(d){
                showData(
                    d,
                    ".brief",
                    $("#product-item-template").html()
                    //$(".card").html()
                );
            })

    });

    $(".js-dosearch").on("click",doSearch)
})





