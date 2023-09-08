$(document).ready(function() {

	toggleMenu();
	showModals();
});


// show/hide mobile menu
function toggleMenu() {

	$("#header__btn").on("click", function() {
		$("body").toggleClass("js-menu-opened").removeClass("js-modal-opened");
		$(".modal").removeClass("js-show");
		$(".modal-wrap").removeClass("js-show");

		return false;
	})
}


// show modal windows
function showModals() {

	$(".js-modal-link").on("click", function() {

		let modal = $(this).attr("href");
		
		$("body").addClass("js-modal-opened").removeClass("js-menu-opened");
		$(".modal").removeClass("js-show");
		$(".modal-wrap").addClass("js-show");
		$(modal).addClass("js-show");

		return false
	});

	$(".js-modal-close").on("click", function() {

		$("body").removeClass("js-menu-opened").removeClass("js-modal-opened");
		$(".modal").removeClass("js-show");
		$(".modal-wrap").removeClass("js-show");

		return false
	});
}

/*
	программное открытие/закрытие модалок по той же логике что и выше, ну только таргет указать:
	let modal = $("#modal-remind-success")

	ошибки на пустые значения обязательных полей выводить через $(el).closest(".input").addClass(".error") (ну т.е. накидывать класс error на обёртку инпута)
	проверка промокода - на обёртку инпута накинуть .promocode-false или .promocode-true
*/