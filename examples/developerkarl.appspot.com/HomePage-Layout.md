Home Page Layout
----------------

Can be served via simple file server, such as:

`python -m SimpleHTTPServer 8080`

This page uses the following plugins:

-	[jquery.nicescroll](http://nicescroll.areaaperta.com/)
-	[flowtype](http://simplefocus.com/flowtype/)
-	custom scroll config

Custom scroll config:

```js
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
```
