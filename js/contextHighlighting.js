function initHighlight() {
  $( ".highlight-trigger" ).hover(highlight, unhighlight);
}

function highlight() {
  var highlightFile = $( this ).attr("highlight-file");
  var highlightLines = $( this ).attr("highlight-lines");
  $( "#" + highlightFile + " tr").slice(highlightLines - 1, highlightLines).addClass("gist-highlight");
}

function unhighlight() {
    $( ".gist-highlight" ).removeClass("gist-highlight");
}
