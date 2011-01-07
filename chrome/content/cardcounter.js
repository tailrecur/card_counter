var joker = nil;

function toggle(event) {
  $(event.target).toggleClass(leftClick(event) ? "hidden" : "picked");
  // if(leftClick(event) && !joker) {
  //   joker = $(event.target).label;
  // }
  // alert(joker);
}

function launchCounter() {
  $('#counterWindow').toggle(); 
  $("row>toolbarbutton.plain").each(function() { $(this).click(function(event) { toggle(event); }); });
}

function reset() {
  $("row>toolbarbutton.plain").each(function() { $(this).removeClass("hidden").removeClass("picked"); });
  joker = nil;
}

function leftClick(event) {
  return event.which == 1
}