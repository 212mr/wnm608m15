$("#sub").click( function() {
    $.post( $("#addForm").attr("action"),
        $("#addForm :input").serializeArray(),
        function(info){ $("#addResult").html(info);
        });
});

$("#addForm").submit( function() {
    return false;
});

function clearInput() {
    $("#addForm :input").each( function() {
        $(this).val('');
    });
}