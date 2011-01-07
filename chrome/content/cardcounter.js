function toggle(event) {
  classToApply = event.which == 3 ? "picked" : "hidden";
  $(event.target).toggleClass(classToApply);
}

function launchCounter() {
  $('#counterWindow').toggle(); 
  $("row>toolbarbutton.plain").each(function() { $(this).click(function(event) { toggle(event); } ); });
}

function reset() {
  $("row>toolbarbutton.plain").each(function() { $(this).removeClass("hidden").removeClass("picked"); });
}



