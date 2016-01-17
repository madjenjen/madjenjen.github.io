function initHighlight() {
  $( ".highlight-trigger" ).hover(highlight, unhighlight);
}

function highlight() {
  var highlightFile = $( this ).attr("highlight-file");
  var highlightLines = $( this ).attr("highlight-lines").split(",");
  highlightLines.forEach(function (line) {
    var highlightRange = line.split("-");
    if (highlightRange.length == 1)
    {
      $( "#" + highlightFile + " tr").slice(line - 1, line).addClass("gist-highlight");
    }
    else
    {
      $( "#" + highlightFile + " tr").slice(highlightRange[0]-1, highlightRange[1]).addClass("gist-highlight");
    }
  })
}

function unhighlight() {
    $( ".gist-highlight" ).removeClass("gist-highlight");
}
