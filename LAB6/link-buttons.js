function attachEvents() {
    $(".button").bind("click", function () {
        if ($(this).is(".button.selected")) {
            $(this).removeClass("selected");
            console.log("remove");
        } else {
            $(this).addClass("selected");
            console.log("add");
        }       
    });
}
