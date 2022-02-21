$(document).ready(function () {
	$(".slider__wrapp").slick({
		arrows: true,
		prevArrow:
			"<button type='button' class='slick-prev pull-left'><i class='fz50 link fa-solid fa-angle-left' aria-hidden='true'></i></button>",
		nextArrow:
			"<button type='button' class='slick-next pull-right'><i class='fz50 link fa-solid fa-angle-right' aria-hidden='true'></i></button>",
	});
});

$(".nav__menu").click(() => {
	$(".nav").toggle("slow");
});
