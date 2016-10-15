$(document).ready(function() {
  $("#menu > li > ul, #menu > li > ul > li > ul")
  .hide()
  .click(function(event) {
    event.stopPropagation();
  });
  
  $("#menu > li,#menu > li > ul > li")
  .click(function() {
    $(this).find("> ul").slideToggle();
  });
  
  $("#menu a").click(function(event) {
    var url = $(this).attr("href");
    $("article")
    .load(url)
    .css("display","block");
    $("#menu a").removeClass("checked");
    $(this).addClass("checked");
    event.preventDefault();
  });
});