$(function(){

  $('.bike-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.slider__items').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		let id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 300 мс
		$('body,html').animate({scrollTop: top}, 300);
	});

});