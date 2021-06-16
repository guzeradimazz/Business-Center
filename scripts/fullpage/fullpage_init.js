$(document).ready(function() {
	$('#fullpage').fullpage({
		onLeave: function(index, nextIndex, direction){
			var $menuWrap = $('.menu-wrap');
        	$menuWrap.removeClass('menu-show');

			var $toggleButton = $('.toggle-button');
			$toggleButton.removeClass('button-open');

			var $toggleButtonBlack = $('.toggle-button-black');
			$toggleButtonBlack.removeClass('button-open-black');

			var $menuWrapBlack = $('.menu-wrap-black');
			$menuWrapBlack.removeClass('menu-show-black');

        },
		//options here
		autoScrolling:true,
		scrollHorizontally: false,
        scrollingSpeed:900,
		scrollOverflow: false
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});