import $, { nodeName } from 'jquery'
window.jQuery = $
window.$ = $

import 'slick-carousel/slick/slick.js';

document.addEventListener('DOMContentLoaded', () => {

	$('.section5_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		// autoplay: true,
		dots: false,
		prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/dist/arrow_slider.svg"></button>',
		nextArrow: '<button type="button" class="slick-arrow slick-next"><img style="transform: rotate(180deg);" src="images/dist/arrow_slider.svg"></button>',
	});


	$('.rev_slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// autoplay: true,
		dots: true,
	});

$('.burger').on('click', () => {
	if ($('.menu').hasClass('.active') == false) {
		$('.menu').addClass('active');
	}
});

$('.menu .close').on('click', () => {
	$('.menu').removeClass('active');
});

$('.modal .close').on('click', () => {
	$('.modal').removeClass('active');
});

	//E-mail Ajax Send
	$("form.recall").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.modal').addClass('active');
			setTimeout(function() {
				$('.modal').removeClass('active');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});

})
