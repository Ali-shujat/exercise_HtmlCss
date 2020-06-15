function attachEvents() {
    var optionTexts = [];

    $("#items li").click(function () {
        var color = $(this).css("background-color");
        let val = $(this).text();
        console.log(color);
        if (color != 'rgba(0, 0, 0, 0)') {
            $(this).css("background-color", 'rgba(0, 0, 0, 0)');
            optionTexts = $.grep(optionTexts, function (value) {
                return value != val;
            });
            console.log(optionTexts);
            console.log(val);
        }
        else {
            $(this).css("background-color", "#DDD");
            optionTexts.push($(this).text());
            console.log(optionTexts);
        }
    });

    $("#showTownsButton").click(function () {
        console.log(optionTexts);
        var quotedCSV = optionTexts.join(', ');
        $("#selectedTowns").text("Selected Towns : " + quotedCSV);
    });


}
