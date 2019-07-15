$(document).ready(function(){
	var btnLink = $(".btnLink"),
		bgPopup = $(".popup-bg"),
		trackForm = $(".slide-bt-form"),
		trackID = $("#trackValue"),
		questionForm = $("#contactWindowQuestion .modal-w-form"),
		sborForm = $("#sborWindowQuestion .modal-w-form"),
		dndBox = $(".head-bn-item_dropdown"),
		dndLink = $(".head-bn-item_dropdown > .head-bni-link"),
		carousel = $(".carousel-b-wrap");

	if ($.exists(carousel)) {
		buildCarousel(carousel);
	}

	$(dndLink).on("click", function(){
		$(dndBox).toggleClass("open");
		return false;
	});

	$(btnLink).on("click", function(){
		var elPopup = $("#" + $(this).attr("data-window"));
	
		showPopup(elPopup, bgPopup);
		return false;
	});

	$(trackForm).on("submit", function(){ //test function
		var track = trackID.val();

		findTrack(track);
		return false;
	});

	$(questionForm).on("submit", function(){ //test function
		var msg = 'test';

		submitQuestion(msg, bgPopup);
		return false;
	});

	$(sborForm).on("submit", function(){ //test function
		var msg = 'test';

		submitQuestion(msg, bgPopup);
		return false;
	});


});


function buildCarousel(carousel) {
	if($(window).width() < 1140) {
		while(carousel.children("div:not(.carousel-wrap)").length){
			carousel.children("div:not(.carousel-wrap):lt(1)").wrapAll("<div class='carousel-wrap'>");
		}
	} else {
		while(carousel.children("div:not(.carousel-wrap)").length){
			carousel.children("div:not(.carousel-wrap):lt(3)").wrapAll("<div class='carousel-wrap'>");
		}
	};

	var page = $(carousel).children(".carousel-wrap"),
		paginator = $(".carousel-b-paginator");
	
	if(page.length > 1) {
		$(paginator).append('<a class="carousel-bp-arrow carousel-bp-arrow_left left-arrow" href="#"></a>');
		for(var i = 0; i < page.length; i++){
			$(paginator).append('<a class="carousel-bp-item" href="#"></a>');
		};
		$(paginator).append('<a class="carousel-bp-arrow carousel-bp-arrow_right right-arrow" href="#"></a>');
		$(paginator).children(".carousel-bp-item").eq(0).addClass("carousel-bp-item_active");
		$(paginator).css("display", "flex");
		
	};

	$(".carousel-b-paginator").on("click", ".carousel-bp-item", function() {

		if($(this).hasClass("carousel-bp-item_active")) return false;

		var el = $(this).index(".carousel-bp-item"),
			elFirstPage = $(".carousel-wrap").eq(0).offset(),
			elPage = $(".carousel-wrap").eq(el).offset(),
			elLeft = elPage.left - elFirstPage.left,
			activeSq = $(this);

		$(".carousel-b-paginator").find(".carousel-bp-item_active").removeClass("carousel-bp-item_active");

		$(".carousel-wrap").eq(0).animate({
			marginLeft: -elLeft
		}, 1000, function() {
			$(activeSq).addClass("carousel-bp-item_active");
		});

		return false;
	});

	$(".carousel-bp-arrow_left").on("click", function() {

		var el = $(".carousel-bp-item_active").index(".carousel-bp-item") - 1,
			elFirstPage = $(".carousel-wrap").eq(0).offset(),
			elPage = $(".carousel-wrap").eq(el).offset(),
			elLeft = elPage.left - elFirstPage.left,
			activeSq =  $(".carousel-bp-item").eq(el);

		$(".carousel-b-paginator").find(".carousel-bp-item_active").removeClass("carousel-bp-item_active");

		$(".carousel-wrap").eq(0).animate({
			marginLeft: -elLeft
		}, 1000, function() {
			$(activeSq).addClass("carousel-bp-item_active");
		});

		return false;
	});

	$(".carousel-bp-arrow_right").on("click", function() {

		var el = $(".carousel-bp-item_active").index(".carousel-bp-item") + 1;
		if (el > (page.length - 1)) {el = 0};

		var elFirstPage = $(".carousel-wrap").eq(0).offset(),
			elPage = $(".carousel-wrap").eq(el).offset(),
			elLeft = elPage.left - elFirstPage.left,
			activeSq =  $(".carousel-bp-item").eq(el);

		$(".carousel-b-paginator").find(".carousel-bp-item_active").removeClass("carousel-bp-item_active");

		$(".carousel-wrap").eq(0).animate({
			marginLeft: -elLeft
		}, 1000, function() {
			$(activeSq).addClass("carousel-bp-item_active");
		});

		return false;
	});
}

function showPopup(el, bg) {
	var close = el.find(".modal-w-close");
	var form = el.find(".modal-w-form");
	var msg = 'test';
	
	$(form).on("submit", function(){ //test function
		submitForm(msg, el, bg, form, close);
		return false;
	});
	
	bg.show();
	el.show();

	$(close).on("click", function(){
		hidePopup(el, bg, form, close);
		return false;
	});

	$(bg).on("click", function(event){
		if (event.target === bg[0]){
        	hidePopup(el, bg, form, close);
    	};
	});

}

function submitForm(msg, el, bg, form, close) {
	var success = $("#windowSuccess");
	var successClose = success.find(".modal-w-close");
	var successBtn = success.find(".modal-w-btn");
	
	form.off();
	close.off();
	el.hide();
	success.show();

	$(successClose).on("click", function(){
		hideSuccess(success, bg, successClose, successBtn);
		return false;
	});

	$(bg).on("click", function(event){
		if (bg.has(event.target).length === 0){
        	hideSuccess(success, bg, successClose, successBtn);
    	};
		return false;
	});

	$(successBtn).on("click", function(){
		hideSuccess(success, bg, successClose, successBtn);
		return false;
	});
}

function submitQuestion(msg, bg) {
	var success = $("#windowSuccess");
	var successClose = success.find(".modal-w-close");
	var successBtn = success.find(".modal-w-btn");
	
	bg.show();
	success.show();

	$(successClose).on("click", function(){
		hideSuccess(success, bg, successClose, successBtn);
		return false;
	});

	$(bg).on("click", function(event){
		if (bg.has(event.target).length === 0){
        	hideSuccess(success, bg, successClose, successBtn);
    	};
		return false;
	});

	$(successBtn).on("click", function(){
		hideSuccess(success, bg, successClose, successBtn);
		return false;
	});
}

function hidePopup(el, bg, form, close) {
	form.off();
	close.off();
	el.hide();
	bg.hide().off();
}

function hideSuccess(success, bg, close, btn) {
	close.off();
	btn.off();
	success.hide();
	bg.hide().off();
}

function findTrack(track) {
	alert('Тестовая функция. \n Ваш номер контейнера: ' + track);
}

jQuery.exists = function(selector) {
	return ($(selector).length > 0);
}