function toggle(event) {
  $(event.target).toggleClass("hidden");
}

function reset() {
  $("row>toolbarbutton.plain").each(function() { $(this).removeClass("hidden"); });
}


$("row>toolbarbutton.plain").each(function() { $(this).click(function() { alert(1); }); });

