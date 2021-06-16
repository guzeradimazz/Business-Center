$(document).ready(function() {
    var $toggleButtonBlack = $('.toggle-button-black');
    $toggleButtonBlack.on('click', function() {
      $(this).toggleClass('button-open');
    });
});