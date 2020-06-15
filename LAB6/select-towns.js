function attachEvents() {
    var optionTexts = [];

    $("#items li").bind("click", function () {
        $(this).css("background-color", "#DDD").each(function () {
            optionTexts.push($(this).text());
        });
    });

    $("#showTownsButton").click(function () {
        console.log(optionTexts);
        var quotedCSV = optionTexts.join(', ');
        $("#selectedTowns").text("Selected Towns : "+ quotedCSV);
    });


}
