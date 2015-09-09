jQuery(function ($) {
	$( document ).ready(function() {
		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop();
			if(scrollTop > 0) {
				$(".zone.header").addClass("filter");
			} else {
				$(".zone.header").removeClass("filter");
			}
		});
		
		$("body").niceScroll();
	});
});