$(document).ready(function() {
  $("#menu > li > ul, #menu > li > ul > li > ul")
  .hide()
  .click(function(event) {
    event.stopPropagation();
  });
  
  $("#menu > li,#menu > li > ul > li")
  .click(function() {
    $(this).find("> ul").toggle();
  });
});