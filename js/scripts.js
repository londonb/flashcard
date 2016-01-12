/*$(document).ready(function() {
  $(".clickable").click(function() {
    $(".initially-showing").toggle();
    $(".initially-hidden").toggle();
  });
});

$(document).ready(function() {
  $("#bob").click(function() {
    $(".bob-response").toggle();
  });
});*/

$(function() {
  $(".clickable").click(function() {
    $("#response-" + this.id).toggle();
    console.log (this.id);
  })
});
