/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/



function showCategories() {
	var display = $("#categories").css("display");
	if (display == "none") {
		$("#categories").css("display", "block");
	} else {
		$("#categories").css("display", "none");
	}
	$.get("/category/all", function (data) {
		var categories = JSON.parse(data);
		if (categories.success == true) {
			var body = "";
			for (var key in categories) {
				if (key == "success") {
					break;
				}
					body += "<li><a href='/category/" + categories[key].slug + "'>"+(categories[key].name) + "</a></li>";
				}
			$('#categories').html(body);
		}
	}).fail(function () {
		alert("Error loading categories !");
	});
}

$('#search-link').click(function () {
	var display = $("#search-cont").css("display");
	if (display == "none") {
		$("#search-cont").css("display", "block");
	} else {
		$("#search-cont").css("display", "none");
	}
});

(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);