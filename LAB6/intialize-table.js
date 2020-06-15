function initializeTable() {
    $('#createLink').click(function () {
        //$( this ).slideUp();
        var value1 = $("#newCountryText").val();
        var value2 = $("#newCapitalText").val();
        $('#countriesTable').append(
            "<tr>" +
            "<td>" + $("#newCountryText").val() + "</td>" +
            "<td>" + $("#newCapitalText").val() + "</td>" +
            "<td>" +
            "<a herf='#' " +
            "onclick='productDelete(this);' " +
            ">[Delete]</a>" +
            "</td>" +
            "</tr>"
        );
    });
}
function productDelete(ctl) {
    console.log("productDelete");
    $(ctl).parents("tr").remove();
}
