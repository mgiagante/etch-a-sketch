$(document).ready(function() {
  for (var i = 1; i <= 16; i++) {

    $('#container').append('<div class="cell clear-left"></div>');

    for (var j = 2; j <= 16; j++) {
      $('#container').append('<div class="cell"></div>');
    }

  }

  $('div').mouseenter(function() {
    $(this).addClass('painted');
  });
});
