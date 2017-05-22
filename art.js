$(document).ready(function(){
  $("#first").mouseover(function() {
    $("#greenlady").replaceWith('<img src="images/greenlady1.png" style="width: 100%;">')
  });
  $("#first").mouseout(function() {
    $("#greenlady").replaceWith('<img src="images/mrinsin1.png" style="width: 100%;">')
  });
})
