$(document).ready(function() {
    var $toggleButtonBlack = $('.toggle-button-black'),
        $menuWrapBlack = $('.menu-wrap-black');
    $toggleButtonBlack.on('click', function() {
        $(this).toggleClass('button-open-black');
        $menuWrapBlack.toggleClass('menu-show-black');
    });
});


