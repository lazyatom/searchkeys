/** 
Searchkeys for Chrome
Inspired by SearchKeys for Firefox by Jesse Ruderman.

(c) James Adam 2010, released under the MIT license
**/

$("li.g.w0 h3 a").each(function(index, element) {
  $(element).before("<span class='search_number'>" + (index+1) + "<span>");
});

$(document).keyup(function(event) {
  var isNumber = (event.keyCode >= 48) && (event.keyCode <= 57);
  var isNav = (event.keyCode == 188) || (event.keyCode == 190);
  if (isNumber || isNav) {
    var searching = ($.inArray(document.activeElement, $.makeArray($("input[name=q]")))) >= 0;
    if (searching) { // return if the inputs have focus
      return;
    } else {
      if (isNumber) { // pressing the number of a result
        number = event.keyCode - 48;
        if (number == 0) { number = 10 };
        link = $.makeArray($("li.g.w0 h3 a"))[number-1];
        // TODO: i'd prefer to trigger the click event.
        document.location = $(link).attr('href');
      } else if (isNav) {
        var prev = null;
        if ($("#nav tr td:first-child").text() == "Previous") {
          prev = $("#nav tr td:first-child a");
        }
        var next = null;
        if ($("#nav tr td:last-child").text() == "Next") {
          next = $("#nav tr td:last-child a");
        }
        if (event.keyCode == 188) {
          if (prev != null) { document.location = prev.attr('href'); } 
        } else {
          if (next != null) { document.location = next.attr('href'); }
        }
      }
    }
  }
})
