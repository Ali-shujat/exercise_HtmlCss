function initializeTable() {
    $('#createLink').click(function () {
        var dStr = "<a herf='#' " +
            "class='down' " +
            "onclick='down(this);' " +
            ">[Down]</a>";
        var uStr = "<a herf='#' " +
            "class='up' " +
            "onclick='up(this);' " +
            ">[Up]</a>";
        $('#countriesTable').append(
            "<tr>" +
            "<td>" + $("#newCountryText").val() + "</td>" +
            "<td>" + $("#newCapitalText").val() + "</td>" +
            "<td>" +
            dStr +
            "<a herf='#' " +
            "onclick='productDelete(this);' " +
            ">[Delete]</a>" +
            uStr +
            "</td>" +
            "</tr>"
        );
        fixlinks(this);
    });
}
function productDelete(ctl) {
    $(ctl).parents("tr").remove();
}
function down(ctl) {
    var row = $(ctl).parents("tr:first");
    row.insertAfter(row.next());
}
function up(ctl) {
    var row = $(ctl).parents("tr:first");
    row.insertBefore(row.prev());
}
function fixlinks(ctl){
    let lst= $('#countriesTable tr:last');
    console.log(lst);
    let frst= $(ctl).siblings(":first");
    if($(this).is(":last")){
        $(this).hide();
    }
}



