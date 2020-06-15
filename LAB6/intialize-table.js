function initializeTable() {
    $('#createLink').click(function () {
        var value1 = $("#newCountryText").val();
        var value2 = $("#newCapitalText").val();
        $('#countriesTable').append(
            "<tr>" +
            "<td>" + $("#newCountryText").val() + "</td>" +
            "<td>" + $("#newCapitalText").val() + "</td>" +
            "<td>" +
            "<a herf='#' " +
            "class='down' " +
            "onclick='down(this);' " +
            ">[Down]</a>" +
            "<a herf='#' " +
            "onclick='productDelete(this);' " +
            ">[Delete]</a>" +
            "<a herf='#' " +
            "class='up' " +
            "onclick='up(this);' " +
            ">[Up]</a>" +
            "</td>" +
            "</tr>"
        );
    });
}
function productDelete(ctl) {
    console.log("productDelete");
    $(ctl).parents("tr").remove();
}
function down(ctl) {
    console.log("down");
    var row = $(ctl).parents("tr:first");
    row.insertAfter(row.next());
    console.log(row);   
}
function up(ctl) {
    console.log("up");
    var row = $(ctl).parents("tr:first");
    row.insertBefore(row.prev());
    console.log(row);   
}



