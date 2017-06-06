function initializeMatrix(matrixSize) {
  $('#container').empty(); // Removes any pre-existing cells

  for (var i = 1; i <= matrixSize; i++) {

    $('#container').append('<div class="cell clear-left"></div>'); // First cell clears at left

    for (var j = 2; j <= matrixSize; j++) {
      $('#container').append('<div class="cell"></div>');
    }

  }

  $('.cell').mouseenter(function() { // Makes cells become painted when mouse enters to them
    $(this).addClass('painted');
  });
}

$(document).ready(function() {
  initializeMatrix(16); // Initial matrix is 16x16

  $('button#reset').click(function() {
    $('.cell').removeClass('painted');
    var newSize = prompt('What size do you want now?');
    initializeMatrix(newSize);
  });
});
