var joker = nil;

function toggle(event) {
  // SUITES = [9824, 9829, 9827, 9830];
  if(leftClick(event) && !joker) {
    joker = event.target.label.slice(0,1);
  }
  $(event.target).toggleClass(leftClick(event) ? "hidden" : "picked");
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
  return event.which == 1;
}