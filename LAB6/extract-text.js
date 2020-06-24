
function extractText() {
  var optionTexts = [];
  $("#items li").each(function () {
    optionTexts.push($(this).text())
  });
  var quotedCSV = optionTexts.join(', ');
  $("#result").text(quotedCSV);
}

function search() {
  $("#towns li").css("font-weight", "");
  var value = $("#searchText").val();
  console.log(value);
  var len = 0;
  //filter each item in the list , make it bold and count number ot items
  $("#towns li").filter(function () {
    return $(this).text().toLowerCase().indexOf(value) > -1;
  }).css("font-weight", "Bold").each(function () {
    len += 1;
  });
  console.log(len);
  $("#output").text(len + " matches found");
}
//shujat