$(document).ready(function() {
  for (var i = 1; i <= 16; i++) {
    for (var j = 1; j <= 16; j++) {
      $('#container').append('<div class="cell"></div>');
    }
  }
});
