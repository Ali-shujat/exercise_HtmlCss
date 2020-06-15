function attachEvents() {
  $(".button").click(function () {
    $(this).toggleClass("selected");
    if ($(this).is(".selected")) {
      $(this).prevAll().removeClass("selected");
      $(this).nextAll().removeClass("selected"); 
    }
  });
}
