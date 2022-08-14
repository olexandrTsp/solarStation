$(function () {

	$('.info-tabs__item').on('click', function (e) {
		e.preventDefault();

		$('.info-tabs__item').removeClass('info-tabs__item--active');
		$(this).addClass('info-tabs__item--active');

		$('.info-tabs__content').removeClass('info-tabs__content--active');

		$($(this).attr('href')).addClass('info-tabs__content--active')
	});

	$('.info-slider, .clients-slieder').slick({
		fade: true,
		prevArrow: '<svg class="slick-left" width="49" height="16" viewBox="0 0 49 16" fill="none" xmlns="http://www.w3.org/2000/svg">< g filter="url(#filter0_d)" ><path d="M4.64645 3.64645C4.45118 3.84171 4.45118 4.15829 4.64645 4.35355L7.82843 7.53553C8.02369 7.7308 8.34027 7.7308 8.53553 7.53553C8.7308 7.34027 8.7308 7.02369 8.53553 6.82843L5.70711 4L8.53553 1.17157C8.7308 0.976311 8.7308 0.659728 8.53553 0.464466C8.34027 0.269204 8.02369 0.269204 7.82843 0.464466L4.64645 3.64645ZM45 3.5L5 3.5V4.5L45 4.5V3.5Z" fill="#303030" /></svg >',
		nextArrow: '<svg class="slick-right" width="41" height="8" viewBox="0 0 41 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.3536 4.35355C40.5488 4.15829 40.5488 3.84171 40.3536 3.64645L37.1716 0.464466C36.9763 0.269204 36.6597 0.269204 36.4645 0.464466C36.2692 0.659728 36.2692 0.976311 36.4645 1.17157L39.2929 4L36.4645 6.82843C36.2692 7.02369 36.2692 7.34027 36.4645 7.53553C36.6597 7.7308 36.9763 7.7308 37.1716 7.53553L40.3536 4.35355ZM0 4.5H40V3.5H0V4.5Z" fill="#303030"/></svg>',
	});



});