$(document).ready(function() {
	
	$(".header-search-mob-btn").on("click", function() { //show-hide mobile search
		$(".header-search").toggleClass("open");
	});

	$(".header-burger").on("click", function() { //show-hide mobile menu
		$(".header-wrap").toggleClass("header-wrap_open-menu");
	});

	if ($.exists(".show-all")) { //collaps item list
		
		$(".show-all_on").on("click", function(){
			var itemHeight = 43;
			var linkParent = $(this).closest(".show-all-box");
			var itemsCount = $(linkParent).find(".main-list-item__list li").length;
			$(linkParent).addClass("open");
			$(linkParent).find(".main-list-item__list").height(itemHeight * itemsCount);
			return false;
		});
		$(".show-all_off").on("click", function(){
			var itemHeight = 43;
			var linkParent = $(this).closest(".show-all-box");
			$(linkParent).removeClass("open");
			$(linkParent).find(".main-list-item__list").height(itemHeight * 5);
			return false;
		});
	}

	if ($.exists(".item-counter")) { //counter for items list
		
		$(".item-counter").each(function() {
			var counter = $(this).closest(".counter-box").find(".counter-list li").length;
			$(this).text("(" + counter +")");
		});
	}

	if ($.exists("#comments-link")) { //counter for comments
		
		$("#comments-link").each(function() {
			var counter = $("#comments-list").find(".comment-item").length;
			$(this).text(counter);
		});
	}

	$(window).scroll(function () { //scroll button
        if ($(this).scrollTop() > 300) {
            $("#scrollTop").fadeIn();
        } else {
            $("#scrollTop").fadeOut();
        }
	});
	
	$("#message-thanks-link").on("click", function() { // show thanks modal
		console.log("Send message"); // ajax call function here
		$("#message-thanks").modal();
		return false;
	});

	$(".comments-list").slick({
		infinite: false,
		appendArrows: $(".comments-paginator"),
		appendDots: $(".comments-paginator"),
		dots: true,
		rows: 4,
		adaptiveHeight: true,
		responsive: [
			{
			  breakpoint: 1159,
			  settings: {
				rows: 1
			  }
			}
		]
	});

});

jQuery.exists = function(selector) {
	return ($(selector).length > 0);
}