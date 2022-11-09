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

})
