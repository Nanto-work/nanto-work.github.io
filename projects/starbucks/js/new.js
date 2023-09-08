$(document).ready(function() {
	let starsLink = $(".header .dropdown h3").eq(1).find("a").attr("href"),
		settingsLink = $(".header .dropdown h3").eq(2).find("a").attr("href");
	
	$(".header .dropdown .stars-container").append('<a href="' + starsLink + '" class="dropdown-link ">Перейти</a>');
	$(".header .dropdown h3").eq(2).after('<a href="' + settingsLink + '" class="dropdown-link dropdown-link_m0">Настройки профиля</a>');

	let starsGreenLabel = $(".home-page .subheading.green"),
		starsGoldLabel = $(".home-page .subheading.gold");
	
	if($.exists(starsGreenLabel)) {
		$(".home-page .right-tab").removeClass("active");
		$(".home-page .left-tab").addClass("active");
		$(".home-page .rewards-tabs-nav li").eq(0).addClass("active");
		$(".home-page .rewards-tabs-nav li").eq(1).removeClass("active");
		
	} else if($.exists(starsGoldLabel)) {
		$(".home-page .left-tab").removeClass("active");
		$(".home-page .right-tab").addClass("active");
		$(".home-page .rewards-tabs-nav li").eq(1).addClass("active");
		$(".home-page .rewards-tabs-nav li").eq(0).removeClass("active");
	} else {
		$(".home-page .tab-pane").removeClass("active");
	}


	/*let rewardsNote = $(".rewards-tabs-note").clone();
	$(".rewards-tabs .tab-pane.left-tab").append(rewardsNote);*/

	$(".rewards-tabs .collapse-toggler").on("click", function() {
		let el = "#" + $(this).attr("aria-controls");
		if(!$(el).hasClass("in")) {
			$(this).addClass("toggle_on");
		} else {
			$(this).removeClass("toggle_on");
		}
	});

	$(".checkbox input[type=checkbox]").each(function() {
		if($(this).prop("checked")) {
			$(this).closest("label").addClass("checked");
		} else {
			$(this).closest("label").removeClass("checked");
		}
	});

	$("body").on("change", ".checkbox input[type=checkbox]", function() {
		if($(this).prop("checked")) {
			$(this).closest("label").addClass("checked");
		} else {
			$(this).closest("label").removeClass("checked");
		}
	});

	$(".change-password form .form-group label").each(function() {
		let wrap = $(this).closest(".form-group").find(".form-group");
		$(wrap).append($(this).addClass("placeholder"));

	});
	
	$(".change-password").on("focus", "form input", function(){
		$(this).closest(".form-group").addClass("js-placeholder-focus-off");
	});
	
	$(".change-password").on("blur", "form input", function(){
		$(this).closest(".form-group").removeClass("js-placeholder-focus-off");
	});

	$(".change-password").on("change", "form input", function(){
		if($(this).val() !== "") {
			$(this).closest(".form-group").addClass("js-placeholder-change-off");
		} else {
			$(this).closest(".form-group").removeClass("js-placeholder-change-off");
		}
	});

	$(".rewards h1.page-heading").text($(".rewards .col-sm-push-3 h2.hidden-xs").text());

	let greenStarDiv = $(".rewards .green-star-div"),
		goldStarDiv = $(".rewards .gold-star-div");
	
	if($.exists(greenStarDiv)) {
		$(greenStarDiv).html('<p class="subheading green">Ваш уровень: <span>Зеленый KZ</span></p>');
		$(".rewards .right-tab").removeClass("active");
	} else if($.exists(goldStarDiv)) {
		$(goldStarDiv).html('<p class="subheading green">Ваш уровень: <span>Золотой KZ</span></p>');
		$(".rewards .left-tab").removeClass("active");
	} else {
		$(".rewards .tab-pane").removeClass("active");
	}

	$(".payment .payment_header_bg").html('<h2>Оплатить картой</h2>');

	
	let aboutList = $(".about-page .program-block-list");
	$(".about-page .program-block-container").after('<div class="program-block-listwrap"><h3>Звезды накапливаются быстро!</h3><p>Смотрите как накапливаются ваши звезды и получайте больше напитков</p></div>');
	$(".about-page .program-block-listwrap").append(aboutList);

	let accountList = $(".account .program-block-list");
	$(".account .program-block-container").after('<div class="program-block-listwrap"><h3>Звезды накапливаются быстро!</h3><p>Смотрите как накапливаются ваши звезды и получайте больше напитков</p></div>');
	$(".account .program-block-listwrap").append(accountList);


	
});


jQuery.exists = function(selector) {
	return ($(selector).length > 0);
}