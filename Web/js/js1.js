$(document).ready(function () {
    $('#buttonTabla').click(function () {
        $.ajax({
            type = "POST",
            url = "Service/Service1.svc/Productos",
            cache = true,
            async = false,
            data ="{}",
            contentType = "application/json; charset=utf-8",
            dataType = "json",
            success: function (resultado) {
                var items = resultado.d;
                $.each(items, function (index, item) {
                    $("$tabla").append("<tr><td class=''>" + item.tkt_plu_id + "</td><td class=''>" + item.tkt_plu_long_desc + "</td>");
                });
            },
            error: function (result) {
                alert("Jadados");
            }
        });
    })
});